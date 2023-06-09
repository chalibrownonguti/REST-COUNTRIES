// Selectin DOM elements
const countriesElem = document.querySelector(".countries")
// const dropDown = document.querySelector(".dropDown dropDown")
// const dropElem = document.querySelector(".drop")
const region = document.querySelectorAll(".region")
const search = document.querySelector(".search")
const toggle = document.querySelector(".toggle")
const moon = document.querySelector(".moon")
// Fetching data from the API
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
// Function to display country information
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

// Filtering countries by region
const regionName = document.getElementsByClassName("regionName")
const countryName = document.getElementsByClassName("countryName")
region.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element)
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerText)
            if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid"
            } else {
                elem.parentElement.parentElement.style.display = "none"
            }
        });
    });
});
// searching for countries by name
search.addEventListener("input", () => {
    console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid"
        } else {
            elem.parentElement.parentElement.style.display = "none"
        }
    });
})

// Toggling dark mode
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})

// Functio to display country detail modal
const countryModal = document.querySelector(".countryModal");
function showCountryDetail(data) {
    countryModal.classList.toggle("show")
    countryModal.innerHTML = `<button class="back">Back</button>
    <div class="modal">
        <div class="leftModal">
            <img src="${data.flags.png}" alt="">
        </div>
        <div class="rightModal">
            <h2>${data.name.map(elem=>elem.common.official)}</h2>
           <div class="modelInfo">
            <div class="innerLeft inner">
                <p><strong>Native Name:</strong> ${data.name.common}</p>
                <p><strong>Population:</strong> ${data.population}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Sub-region:</strong> ${data.subregion}</p>
        </div>
        <div class="innerRight inner">
                <p><strong>Capital:</strong> ${data.capital}</p>
                <p><strong>Top Level Domain:</strong> ${data.topLevelDomain.map(elem => elem)}</p>
                <p><strong>Currencies:</strong> ${data.currencies.map(elem => elem.name)}</p>
                <p><strong>Languages:</strong> ${data.language.map(elem => elem.name)}</p>
         </div>
        </div>
    </div>
</div>`
    
}

// Backling back modal
const back = countryModal.querySelector(".back")
    back.addEventListener("click", () => {
        countryModal.classList.toggle("show")
    })

// Fetching countries from the API
async function getCountriesByRegion(region) {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await response.json();
  return data;
}

