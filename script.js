

const apiKey = '77b2af363a60ffc1e7b00ad733873fe8';  

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const location = data.name;
            
            document.getElementById('result').innerHTML = `
                <h2>${location}</h2>
                <p>${description}</p>
                <p>${temperature}°C</p>
            `;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<p>Error fetching weather data.</p>`;
            console.error('Error:', error);
        });
}
