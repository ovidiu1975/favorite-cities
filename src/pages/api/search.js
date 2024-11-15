// pages/api/search.js
export default async function handler(req, res) {
    const { query } = req.query;
  
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
    );
    const data = await response.json();
  
    const results = data.results.map((result) => ({
      id: result.id,
      name: result.name,
      country: result.country,
      la: result.latitude,
      lo: result.longitude,
    }));
    //console.log("API Results:", results); // Verifică structura datelor
    res.status(200).json({ results });



  }
  