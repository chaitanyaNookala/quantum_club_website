// java-script notes 


let a = 10;
let b = String(a);
console.log(b, typeof b);

let c = "10" - 10;
console.log(c);

// OBJECTS IN JAVASCRIPT 

const student = {
    fullName : "Chaitanya",
    age : 20,
    marks : 8.9,
    isPass : true
};

console.log(student);


// for loop in js

for(let i = 0; i <= 5; i++){
    console.log(i + " ");
}


// while loop

let a1 = 12;

while(a1>=1){
    console.log(a1);
    a1 = a1 - 1;
}

// do while will also be the same as while loop except that the do statement will be done first and then the conditions will be executed as well as the loop will also be executed afterwards

let a2 = 2;
do{
    console.log("welcome!");
    a2 = a2 - 1;
}
while(a2>0){
    console.log(a2);
}

console.log(" /n");

// here the do statement gets printed first and then the while loop will be executed.


// arrays in java script are a special type of objects in js. basically object are stored in key value pairs but the arrays are stored in index = value pairs 

let arr1 = ["chaitanya","vedanth","ram","ved","luke"];

// the above is an array in js and to print this :

for(let i = 0; i <= arr1.length; i++){
    console.log(arr1[i]);
}




// functions in java script 

function myFunction(){
    console.log("Welcome");
    console.log("This is my first javascript code")
}



// practice questions

function countVow(str) {

    let count = 0;
    let vowels = ['a','e','i','o','u'];
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;

}


// forEach function in java script 

let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val){
    val = val + 1;
    console.log(val);
})

// basically the forEach loop in arrays can apply a property or something for each and every element in the array.

// array methods 
// MAP method

let arr2 = [1,2,3,4,5,6,7,8,9,10];

let newArr = arr2.map(function printValue(val){
    console.log(val+2);
})

console.log(newArr);

// here the map function will also act like the forEach loop but the map funciton will create a new separate array 
// as shown above if we store the map funciton in the new variable we can call it whenever we want to 


let newArr2 = arr2.filter(function evenNum(val){
    return val%2 == 0;
})
console.log(newArr2);





