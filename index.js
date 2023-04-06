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
getCountry()
function showCountry(data) {
    const country = document.createElement("div");
    country.classList.add("country")
    country.innerHTML = `  <div class="country-img">
    <img src="${data.flags.png}"alt="">
</div>
<div class="country-info">
    <h5 class="countryName">${data.name.common}</h5>
    <p><strong>Population:</strong> ${data.population}</p>
    <p class="regionName"><strong>Region:</strong> ${data.region}</p>
    <p><strong>Capital:</strong> ${data.capital}</p>
    <p><strong>Time:</strong> ${data.timezones}</p>
    <p><strong>Days:</strong> ${data.startOfWeek}</p>
</div>`;
    countriesElem.appendChild(country)
    country.addEventListener("click", () => {
        showCountryDetail(data)
    })
}

// dropDown.addEventListener("click", () => {
//     dropElem.classList.toggle("showDropDown")
    
//     // console.log("dropDown")
// })


