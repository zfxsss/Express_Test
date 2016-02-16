var o2;

function Car(p)
{
	this.price = p; 
	
	//this.price2 = function(){return 2;};
	
	//this.price2 = function price2(){return 2;};
	
	//console.log(o2());
	
	//return this;
}

//console.log(o2());


function Car2()
{
	return Car;
}

o2 = Car2;

var O3 = o2();

Car.prototype.wheels = 4;

console.log((new O3(5)).wheels);

var car = new Car(1024);
var car2 = new Car(512);

console.log(car.price);
console.log(car.wheels);

console.log(car2.price);
console.log(car2.wheels);

Car.prototype.wheels = 6;

console.log(Car.prototype.wheels);

console.log(car.wheels);
console.log(car2.wheels);

car.wheels = 100;

console.log(car.wheels);
console.log(car2.wheels);

console.log(car instanceof Car);

console.log(car instanceof Car.prototype.constructor);

console.log(Car.prototype.constructor !== Car);

console.log(Car.prototype.isPrototypeOf(car));

console.log(Car.isPrototypeOf(car));

console.log(car.wheels === car2.wheels);

console.log(typeof(car2));
console.log(typeof(Car));
console.log(typeof(Car.prototype));

//console.log()