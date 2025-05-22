const city=document.querySelector(".city");
const button=document.querySelector(".button");

async function getWeather(city) {
    const apikey= "3c486654842070d43237b78d452cfefa"
const apiurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;

const response = await fetch(apiurl); // waits here
const data = await response.json(); 
console.log(data); 
document.querySelector('.city-name-box').innerHTML=data.name;
document.querySelector('.result-box1').innerHTML=data.main.temp+"°C";
document.querySelector('.result-box2').innerHTML=data.main.humidity+"%";
}
button.addEventListener("click",()=>{
getWeather(city.value);
})
