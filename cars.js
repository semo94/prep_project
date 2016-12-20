var _row ="Cadillac-black-2014-25000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-100000-https://goo.gl/J0Kphk,Ford-white-2012-17000-https://goo.gl/goA8XV,Cadillac-black-2014-25000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-100000-https://goo.gl/J0Kphk,Ford-white-2012-17000-https://goo.gl/goA8XV,Cadillac-black-2014-25000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-100000-https://goo.gl/J0Kphk,Ford-white-2012-17000-https://goo.gl/goA8XV,Cadillac-black-2014-25000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-100000-https://goo.gl/J0Kphk,Ford-white-2012-17000-https://goo.gl/goA8XV,Cadillac-black-2014-25000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-100000-https://goo.gl/J0Kphk,Ford-white-2012-17000-https://goo.gl/goA8XV,Cadillac-black-2014-25000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-100000-https://goo.gl/J0Kphk,Ford-white-2012-17000-https://goo.gl/goA8XV" 

function CarsHub(){
	var functionOfCars={};

	functionOfCars.carsLibrary=[];
	functionOfCars.carsArray = [] ;
	functionOfCars.seperateCars = seperateCars ;
	functionOfCars.itemFactory = itemFactory ;
	functionOfCars.addItem = addItem ;
	functionOfCars.publishItems = publishItems ;
	functionOfCars.displayCars = displayCars ;

	return functionOfCars ; 
}

var seperateCars = function (){
	this.carsArray = _row.split(",")
	var that = this;
	each(this.carsArray , function(elem ,i){
		var temp = elem.split("-")
		that.carsArray[i]=temp ;
	})
	return this.carsArray ;
}

var itemFactory=function (brand, color,yearOfProd,price,url){
	return {
		brand:brand,
		color:color,
		yearOfProd:yearOfProd ,
		price:price,
		url:url
	}
}

var addItem = function (obj){
	this.carsLibrary.push(obj);
}

var publishItems= function(){
	var that = this;
	each(this.seperateCars(), function(elem ,i){
		that.addItem(that.itemFactory(elem[0],elem[1],elem[2], elem[3],elem[4]))
	})
}

var displayCars = function(){
	this.publishItems() ;
	each(this.carsLibrary , function(elem , i){
		$('#products').append("<ul><img src="+elem['url']+"><li>"+elem['brand']+"</li><li>"+elem['color']+"</li><li>"+elem['yearOfProd']+"</li><li>"+elem['price']+"</li></ul>");
	})
}

$(document).ready(function(){
	var run = CarsHub() ;
	run.displayCars();
	
})





//helpers
function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function map(coll, f) {
	var acc = [];
	if (!Array.isArray(coll)) {
		acc = {};
	}
	each(coll, function(element, key) {
		acc[key] = f(element, key);
	});
	return acc;
}