// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
const fetchAlerts = document.getElementById("fetch-alerts")
fetchAlerts.addEventListener("click", () => {
    fetchWeatherAlerts()
    
})

function fetchWeatherAlerts() {
    const stateAbv = document.getElementById("state-input")
    const errorMessage = document.getElementById("error-message")
    
    fetch(`${weatherApi}${stateAbv.value}`)
        .then(response => response.json())
        .then(data => {
            displayAlerts(data)
            errorMessage.textContent = ""
            errorMessage.classList.add("hidden")
        })
        .catch(error => {
            console.error("Error fetching data:", error)
            errorMessage.textContent = error.message
            errorMessage.classList.remove("hidden")
        });

    stateAbv.value = ""
}

function displayAlerts(data) {
    const alertsDisplay = document.getElementById("alerts-display")
    alertsDisplay.textContent = ""

    const alert = data.features
    const alertLength = alert.length
    const alertP = document.createElement("p")
    alertP.textContent = `${data.title}: ${alertLength}`
    alertsDisplay.append(alertP)

    const newList = document.createElement("ul")

    alert.forEach((feature) => {
        const headline = feature.properties.headline
        
        const newListItem = document.createElement("li")
        newListItem.textContent = headline 
        newList.append(newListItem)
    })

    alertsDisplay.append(newList)
}