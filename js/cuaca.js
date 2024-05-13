const apiKey = "275d70c6b6349863e5891a350cf1a065";
// Ganti dengan lokasi atau kota yang Anda inginkan
const city = "banyumas";

// Membuat permintaan HTTP GET ke API cuaca
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
)
  .then((response) => response.json())
  .then((data) => {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
                    <div class="card-body d-flex justify-content-center">
                        <div class="text-center mr-3 mb-6">
                        <i class="fas fa-sun fa-2x"></i>
                            <h3>Banyumas</h3>
                            
                            <p class="card-text">Temperature: ${data.main.temp}°C</p>
                            <p class="card-text">Humidity: ${data.main.humidity}%</p>
                            <p class="card-text">Weather: ${data.weather[0].description}</p>
                        </div>
                    </div>
     `;
  })
  .catch((error) => console.error("Error:", error));
