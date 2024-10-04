// Global Context (Non-Strict Mode)
console.log(this);
// In the browser, this refers to the window object

// Object Context
const person = {
    name: 'John',
    greet: function () {
        console.log('Hello, ' + this.name);
        // 'this' refers to the person object
    }
};
person.greet();
// Output: Hello, John

// Constructor Function Context
function Person(name) {
    this.name = name;
}
const john = new Person('John');
console.log(john.name);
// Output: John

// Class Context (ES6)
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        console.log('Car brand: ' + this.brand);
        // 'this' refers to the instance of the Car
    }
}
const myCar = new Car('Toyota');
myCar.showBrand();
// Output: Car brand: Toyota

// Arrow Function
const personNew = {
    name: 'John',
    greet: function () {
        const arrowFunc = () => {
            console.log('Hello, ' + this.name);
            // 'this' is inherited from the greet function
        };
        arrowFunc();
    }
};
personNew.greet();
// Output: Hello, John

// Event Handlers (DOM Context)
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
    console.log(this);
    // 'this' refers to the button element
});