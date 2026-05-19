const input = document.querySelector(".searchbar");
const degree = document.querySelector(".deg1");
const humidity = document.querySelector(".humid");
const weather = document.querySelector(".weath");
const measureBtn = document.querySelector(".deg2");
let data;
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
    let location = input.value;
    console.log(location)
    getData(location);
    }
})
async function getData(location){
   const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&key=9PV6TK6G7P952E9VE7Y2S3C5V&contentType=json`);
   data = await response.json();
   console.log(data);
   degree.textContent = `Degree: ${data.days[0].temp} °F`
   humidity.textContent = `Humidity: ${data.days[0].humidity}%`
   weather.textContent = `Condition: ${data.days[0].conditions}`
}
measureBtn.addEventListener("click", () => {
    if (measureBtn.textContent === "°C" && data !== undefined){
        degree.textContent = `${((parseInt(data.days[0].temp) - 32) * 5 / 9).toFixed(1)} °C`;
        measureBtn.textContent = "°F"
    } else if (measureBtn.textContent === "°F"){
        degree.textContent = `${data.days[0].temp} °F`
        measureBtn.textContent = "°C"
    } else if (measureBtn.textContent === "°C" && data === undefined){
        return;
    }
})
