
//NO NEW = GLOBAL
var a = 4;
var z = {
    name: 'Jane',
    pet: 'Dog', 
    // no arg, implicit return, 1 line execution
    sayHi: () => console.log(this.name),
    // no arg, return string, BUT return keyword is omitted because it's a 1-liner
    returnHi: () => 'hi',
    // no arg, return string, require brackets and return statement BECAUSE NOT A 1-liner
    returnHi2: () => {
        //console.log(this);
        //this is bound to global scope by the arrow function, because z is an object that is in global scope
        return this.name+" has "+this.pet;
    },
    returnHiFunct: function () {
        //console.log(this);
        //this not bound to global scope, not bound to object, not bound to ANYTHING
        //context will be determined at runtime
        return function () {
            return this.name+" has "+this.pet;
        }
        //return this.name+" has "+this.pet;
    }
}

var x = function () {
    this.name = 'Jane';
    this.pet = 'Dog'; 
    // no arg, implicit return, 1 line execution
    this.sayHi = () => console.log(this.name);
    // no arg, return string, BUT return keyword is omitted because it's a 1-liner
    this.returnHi = () => 'hi';
    // no arg, return string, require brackets and return statement BECAUSE NOT A 1-liner
    this.returnHi2 = () => {
        //console.log(this);
        return this.name+" has "+this.pet;
    },
    this.returnHiFunct = function () {
        //console.log(this);
        return this.name+" has "+this.pet;
    }
}

var jane = z;
//pring out the object z
console.log( z.returnHi2()); //arrow function - 'this' lexically bound to global object, thus undefined name/pet
console.log (z.returnHiFunct());  //regular function - 'this' is a single lady, who ever grabs - gets bound to 'this'
var n = z.returnHiFunct(); //returned another function
console.log("nestedFuncs1", n.call(z));
console.log("nestedFuncs2", n());

var h = z.returnHi2;
var j = z.returnHiFunct;

//fist one works, second doesn't?
console.log(h());
console.log(j());

var testX = new x();

//should ok either way
console.log( testX.returnHi2()); //arrow function
console.log (testX.returnHiFunct());  //regular function 

var h = testX.returnHi2;
var j = testX.returnHiFunct;

//fist one works, second doesn't?
console.log(h());
console.log(j());

// params => execution
//params
//1.  IF NO PARAMS, then ()
//2.  IF 1 PARAM, then param or (param)  (parenthes optional)
//3.  IF 2+ PARAMS, then (param1, param2).....
//execution
//1.  IF 1 line, then {} optional  OR 'return' implied - but can put brackets and return if feel like it
//2.  IF 2+ lines, then {} required and return required if function is returning a value


//Discoveries
//1. IF we are declaring an object directly (no new keyword) - then the scope of this - is global.
//2.  new sets the scope of "this" to the object