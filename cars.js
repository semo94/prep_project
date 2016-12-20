var _row ="Cadillac-black-2014-80 000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-250 000-https://goo.gl/J0Kphk,Ford-white-2012-17 000-https://goo.gl/goA8XV,Mercedes Benz-metal-2014-35 000-https://goo.gl/VeaaaD, Mercedes AMG-Red-2016-17 000-https://goo.gl/r1JJll,Mercedes classic-Brown-1973-2 000-https://goo.gl/EdcZrH,Mercedes E Class-Blue-2011-21 000-https://goo.gl/D1wBkg,Mercedes G class-Yellow-1999-60 000- https://goo.gl/5rsUl1,Infiniti-Pink-2014-80 000- https://goo.gl/j6VZtl,Infiniti-Gold-2009-40 000- https://goo.gl/7HC5sY,BMW S5230-Blue-2007-22 000- https://goo.gl/4cMlYf,BMW M4-Red-2016-70 000- https://goo.gl/0XTle3,BMW M7-Green-2015-99 000- https://goo.gl/PUdv0h,Audi S3 Hybrid-Multi colors-2013-63 000- https://goo.gl/mIpCcS,Audi R8-Orange-2015-200 000 - https://goo.gl/RD1o4j,	Audi q7-white-2017-155 000- https://goo.gl/WorSqd,Audi a6-Silver-2013-71 000- https://goo.gl/8aA27z,Kia Sprotage-Black-2016-40 000- https://goo.gl/O84nM2,Dodge Pick Up-Black-2015-55 000- https://goo.gl/fGYc3g ,Dodge Charger-Red-2017-65 000- https://goo.gl/fNnQzC,Dodge Charger-Dark Blue-2017-80 000- https://goo.gl/Cg5BRQ" 

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
		$('#products').append("<ul><img src="+elem['url']+"><li>"+elem['brand']+"</li><li>"+elem['color']+"</li><li>"+elem['yearOfProd']+"</li><li>"+"price : "+elem['price']+" JD"+"</li></ul>");
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

function isMatch(query, obj){
	for(var key in obj){
	if(query.toString().toLowerCase() === obj[key].toString().substr(0,query.length).toLowerCase()){
		return true ;
	}
}
	return false;
}

// function searchBooks(query , Arrk){
// 	if(Arrk === ""){
// 		for (var i = 0; i < books.length; i++) {
// 			if(isMatch(query , books[i])){
// 				return displayBook(books[i].title);

// 			}
// 		}
// 	}
// 	else{ for (var i = 0; i < books.length; i++) {
// 		for (var j = 0; j < Arrk.length; j++) {
			
// 			if(isMatch(query , books[i])){
// 				return displayBook(books[i][Arrk[j]]);
// 			}
			
// 		}
// 	}
// }
// }