const countriesElem = document.querySelector(".countries")
// const dropDown = document.querySelector(".dropDown dropDown")
// const dropElem = document.querySelector(".drop")
const region = document.querySelectorAll(".region")
const search = document.querySelector(".search")
const toggle = document.querySelector(".toggle")
const moon = document.querySelector(".moon")

async function getCountry() {
    try{
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    res.forEach(element => {
        showCountry(element);
        console.log();
        });
        // Do something with the data
    }catch(err){
        console.error(err);
    }
}

