// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!

function fetchWeatherAlerts() {
    const stateAbv = document.getElementById("state-input")
    
    fetch(`weatherApi${stateAbv}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error))
}