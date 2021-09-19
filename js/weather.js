const API_KEY = "82e030e5a5ad9ab00d8fc4a35776ee45"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude; 
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector(".weather span:first-child")
        weather.innerText = data.weather[0].main;
    
    });
}
function onGeoError() {
    alert("Can't find you.")
}

//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)