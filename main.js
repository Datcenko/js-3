var counter = (function(){
	var count = 0;
	return function (num) {
		count = num !== undefined ? num : count;
		return count++;
	}
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(300));
console.log(counter());
console.log(counter(3));
console.log(counter());


var greet = function(){
	return'Hi! I am' + this.status;
}
var person ={
	status:'Soldier',
	greet: greet
}
var secondPerson ={
	status:'Firefighter',
	greet: greet
}
var thirdPerson = {
	status:'Policeman',
	greet:greet
}
console.log(person.greet());
console.log(secondPerson.greet());
console.log(thirdPerson.greet());


var person = {
	name: 'Elephant',
	_age:  20,
	get age() {
		return this._age;
	},
	set age(value){
		this._age = value <0 ? 0 : value > 70 ? 70: value;
	}
		
}
person.age = 40;
console.log(person.age);