//console.log(global) 
//null is primitive datatype
// typeof of null is object
/*let name = null;
console.log(name);
console.log(typeof(name));
//javascript defines that null is equal to undefined
console.log(null == undefined);*/
// number data type for integers and floating numbers
/*let num = Infinity // Number.MAX_VALUE + Number.MAX_VALUE
console.log(num);*/

// NaN indicates a not a number - it is a specific numeric value that indicates invalid number
// example a string diveded by 2
/*
let a = "adf";
console.log(a/2); // -> Nan
// Nan has two characterisics that any operation with Nan return Nan
// and ** -> NaN is not equal to any including itself
console.log(NaN == NaN); //-> return false
*/

// string
// javascript strings are immutable
// you can not channge the value of string
/*
let s = "Aryansh"
s[0] = 'a';
console.log(s) //-> output is Aryansh and not aryansh
// but you can make the new string with the existing one
s = s + " Rana"
console.log(s) // behind the scene js engine makes a new string "Aryansh Rana" and destroys "Aryansh" and " Rana"*/

// object type // comples data type
// An object is a collection of properties wher eeact property is defined in key-value pair
/*let person = {
    first : "Aryansh",
    last : "Rana",
    address : {
        building: 4556,
        street: "1st avenue",
        city: "London"
    },
    contact: {
        email : "ranaaryansh12@gmail.com",
        phone: "7060362041"
    }
};
console.log(person);
// to access obect property use -> 1) . notation 2) array notation
console.log(person.first);
console.log(person.contact);
console.log(person['last']);
console.log(person.address.building);*/

//Boolean
// you can change the any value to bollean with Boolean() function
/*let error = "Aryansh is learning"
let haserror = Boolean(error);
console.log(haserror);

let a = 5
let boola = Boolean(a);
console.log(boola);
let b = NaN;
let boolb = Boolean(b);
console.log(boolb);*/

//arrays
/*let colors = ['red','green','blue','yellow','orange']; // first way
let n_colors = Array('tangerine','purple','cyan','violet','saffron'); // second way using Array() constructor
//accesing array and get its length
console.log(colors[2]);//index 2 element
console.log(n_colors.length);*/
//push() - to add element at end
//unshift() - to add element at beginning
//pop() - to remove element at end of array
//shift() - to remove element at beginning
/*
colors.push('brown')
const color = colors.pop()
console.log(color);
console.log(colors)
n_colors.unshift('magenta');
const n_color = n_colors.shift();
console.log(n_color)
console.log(n_colors);
*/
// comparing object with valueOf() operator
/*let apple = {
    valueOf : function() {
        return 40;
    },
};
let orange = {
    valueOf : function() {
        return 30;
    },
};

console.log(apple > orange);
//logical or, logical and, logical null operator
// x||=y, x&&=y, x??=y
let x;
x||="some-value"; // it give values if x is falsy
console.log(x);
//x is truthy now
x&&="new-value"; // it gives values if x is truthy
console.log(x);
x = null
x??="latest-value"; // it gives values when x is null or undefined
console.log(x);
*/
//function returning another function - in js functions are first class citizens

function compareby(propertyname){
    return function(a,b) {
        let x = a[propertyname];
        let y = b[propertyname];

        if(x>y){
            return 1;
        }
        else if(x<y){
            return -1
        }
        else{
            return 0;
        }
    };
}
let products = [
    {name: 'iphone', price: 900},
    {name: 'Samsung A13F', price: 750},
    {name: 'Nothing', price: 800},
];
console.log('sorting according to price');
products.sort(compareby('price'));
console.table(products);


