//  callback hell in js -- notes

//promises in js

// let promise1 = new Promise((resolve, reject) =>{
//     console.log("I am a promise");
// })


// function getData(dataId, getNextData){
//     return new Promise((resove,reject) =>{
//         setTimeout(() =>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }



function asyncFunc() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000);
    });
}

console.log("fetching data1");
let p1 = asyncFunc(); 
p1.then((res)=>{
    console.log(res);
});