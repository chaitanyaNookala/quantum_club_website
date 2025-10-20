/**
 * Events JavaScript - Event Handling and Classes
 * Clean, organized JavaScript for event handling and ES6 classes
 */

// Event handling examples
let btn1 = document.querySelector('#btn1');

if (btn1) {
    btn1.onclick = () => {
        console.log("btn1 was clicked");
        let a = 25;
        a++;
        console.log(a);
    }
}

let div = document.querySelector("div");

if (div) {
    div.onmouseover = () => {
        console.log("you are inside the box");
        let b = 20;
        b++;
    }
}

// we can give any condition or any statement inside the function for the event 



// classes in javaScript

class Car{

    constructor(brand,mileage){
        console.log("this is a constructor");
        this.brand = brand;
        this.mileage = mileage;
    }                                               // here this is a constructor 


    start(){
        console.log("the car will start");          // this is a method of the class car
    }

    stop(){
        console.log("the car will stop");
    }


    hello(){
        console.log("hello")
    }

}



let fortuner = new Car("fortuner", 20);             // this is how you create an object by using the class

// here this object will inherit all the methods and variables of the class



// inheritance in java Script

class Audi extends Car{

    statement = console.log("this is a child class");               // this is a variable of the child class 

    stop(){
        console.log("this is the stop funciton of the child class")
    }





}

let Audi1 = new Audi();

    // here as we defined the Audi1 object of the Audi class, the car class properties and the methods will be inherited by the child class which is the Audi class 
    // and the Audi1 object will inherit all the methods and properties when we are intializing the object


                        