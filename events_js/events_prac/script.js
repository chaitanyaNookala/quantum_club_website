let btn2 = document.querySelector("#btn2");
let curr_mode = "light";

btn2.addEventListener("click", () => {
    if(curr_mode === "light"){
        curr_mode = "dark";
        //document.querySelector("body").style.backgroundColor = "black";
        // or we can also us the css to add the styling 

        document.querySelector("body").classList.add("dark");

        // here we are removing the light mode from the body 
        document.querySelector("body").classList.remove("light");
    }
    else{
        curr_mode = "light"
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(curr_mode);
})



// here the only problem was that the code doesn't work after the first 2 times that's because we also have
// to remove the dark mode after we switch to the light mode and same thing with the light mode





// 