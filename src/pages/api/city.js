// pages/api/city.js
export default async function handler(req, res) {
    const { id, lat, lng } = req.query;
  
    if (!lat || !lng) {
      return res.status(400).json({ error: "Latitude and longitude are required" });
    }
  
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();
  
    res.status(200).json({
      name: req.query.name,
      country: req.query.country,
      lat,
      lng,
      weather: {
        description: weatherData.current_weather.weathercode,
        temperature: weatherData.current_weather.temperature,
      },
    });
  }
  