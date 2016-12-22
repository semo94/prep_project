var _row ="Cadillac-black-2014-80 000-https://goo.gl/iQdqDV,Lamborghini-silver-2017-250 000-https://goo.gl/J0Kphk,Ford-white-2012-17 000-https://goo.gl/goA8XV,Mercedes Benz-metal-2014-35 000-https://goo.gl/VeaaaD, Mercedes AMG-Red-2016-17 000-https://goo.gl/r1JJll,Mercedes classic-Brown-1973-2 000-https://goo.gl/EdcZrH,Mercedes E Class-Blue-2011-21 000-https://goo.gl/D1wBkg,Mercedes G class-Yellow-1999-60 000- https://goo.gl/5rsUl1,Infiniti-Pink-2014-80 000- https://goo.gl/j6VZtl,Infiniti-Gold-2009-40 000- https://goo.gl/7HC5sY,BMW S5230-Blue-2007-22 000- https://goo.gl/4cMlYf,BMW M4-Red-2016-70 000- https://goo.gl/0XTle3,BMW M7-Green-2015-99 000- https://goo.gl/PUdv0h,Audi S3 Hybrid-Multi colors-2013-63 000- https://goo.gl/mIpCcS,Audi R8-Orange-2015-200 000 - https://goo.gl/RD1o4j,	Audi q7-white-2017-155 000- https://goo.gl/WorSqd,Audi a6-Silver-2013-71 000- https://goo.gl/8aA27z,Kia Sprotage-Black-2016-40 000- https://goo.gl/O84nM2,Dodge Pick Up-Black-2015-55 000- https://goo.gl/fGYc3g ,Dodge Charger-Red-2017-65 000- https://goo.gl/fNnQzC,Dodge Charger-Dark Blue-2017-80 000- https://goo.gl/Cg5BRQ,Porsche Cayenne-White-2016-70 000-https://goo.gl/3gMFms,Porsche GT3-Purple-2012-30 000-https://goo.gl/PKbcdF, Porsche Boxster-Silver-2015-130 000 -https://goo.gl/4a8yfK,Porsche-Red-2013-65 000-https://goo.gl/IfR2Kl,SkateBoard sprot-Black-1990s-70-https://goo.gl/cqDVLL,skateBoard sport-Red-1990s-50-https://goo.gl/Pcn8qc,SkateBoard Motorized sport-Black-2008-150-https://goo.gl/80NDM5, Bicycle sport-Silver-2007-200-https://goo.gl/rFyiWO, Bicycle sport-Black-2012-255- https://goo.gl/TxTpvi,Bicycles sport-Red-2016-450- https://goo.gl/HnDbbl, Bicycle sport-Green-2015-199- https://goo.gl/zOKZlC,Range Rover-Orange-2016-120 000 -https://goo.gl/xizSTu-Range , Range Rover-grey-2015-95 000-https://goo.gl/4DkkFh,Range Rover-Red-2014-100 000 - https://goo.gl/txHCgo,Ferrari-Red-2010-150 000- https://goo.gl/ynpEVx,Ferrari - Yellow - 2009 - 130 000 - https://goo.gl/TdV4lS, Rolls Royce - Black - 2011 - 140 00- https://goo.gl/dGQ4db ,  Rolls Royce - Gold - 2015 - 350 000 - https://goo.gl/UHckWE , Rolls Royce - Purple  - 2016  - 290 000 - https://goo.gl/4frznk, Bentley - Green - 2010  -  100 000 - https://goo.gl/vGztmW , Bentley - Blue - 2012 - 130 000  - https://goo.gl/kqbZo9" 


function CarsHub(){
	var functionOfCars={};

	functionOfCars.carsLibrary=[];
	functionOfCars.carsArray = [] ;
	functionOfCars.seperateCars = seperateCars ;
	functionOfCars.itemFactory = itemFactory ;
	functionOfCars.addItem = addItem ;
	functionOfCars.publishItems = publishItems ;
	functionOfCars.displayCars = displayCars ;
	functionOfCars.search=search ;

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

var displayCars = function(arr){
	if(arr=== undefined){
		arr= this.carsLibrary ;
	}
	each( arr, function(elem , i){
		$('#products').append('<div class="col-md-4"><div class="panel panel-primary"><div class="panel-heading"><h4>'+elem['brand']+'</h4></div><div class="panel-body"><div class="thumbnail"><img src="'+elem['url']+'"></div><ul class="list-group"><li class="list-group-item">'+elem['color']+'</li><li class="list-group-item">'+elem['yearOfProd']+'</li><li class="list-group-item">price : '+elem['price']+' JD</li></ul></div></div></div>');
	})

	if($('#products').has('ul').length === 0){
		$('#products').append("<p>Unfortunately Your search did not match any car in our store </p>");
	}
}

var search = function(query){
	return filter(this.carsLibrary , function(elem,index){
		var str = JSON.stringify(elem)
		return isMatch(query,elem);
	})
}


$(document).ready(function(){
	var run = CarsHub() ;
	run.publishItems();
	run.displayCars();

	$( "[name=search]" ).change(function() {
	$( "#products" ).empty();
 	run.displayCars(run.search($(this).val()))
	});

	$('h2').click(function(){
		$('#products').empty();
		run.displayCars();
	});
	
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

function filter(array, predicate) {
     var acc = [];
     each(array, function(element, i) {
          if (predicate(element, i)) {
                acc.push(element);
          }
     });
     return acc;
}

