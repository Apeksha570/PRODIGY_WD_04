const apiKey = "136c93a822ae7d3a9f0897a460b9a8ef"; // Replace with your actual OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value;
  if (!city) return;

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("City not found");
    
    const data = await response.json();
    
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = data.main.temp;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind').textContent = data.wind.speed;
    document.getElementById('weatherInfo').classList.remove('hidden');
  } catch (error) {
    alert("Error: " + error.message);
  }
});