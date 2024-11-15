// pages/city/[id].js
import { useRouter } from "next/router";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CityPage() {
  const router = useRouter();
  const { id, lat, lng, name, country } = router.query;
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    if (id && lat && lng) {
      const fetchCityData = async () => {
        const response = await fetch(`/api/city?id=${id}&lat=${lat}&lng=${lng}`);
        const data = await response.json();
        setCityData(data);
      };
      fetchCityData();
    }
  }, [id, lat, lng]);

  if (!cityData) return <Text>Loading...</Text>;

  return (
    <Box p={5} textAlign="center">
      <Heading>{name}, {country}</Heading>
      <Text>Coordinates: {lat}, {lng}</Text>
      <Text>Current Weather: {cityData.weather.description}</Text>
      <Text>Temperature: {cityData.weather.temperature}°C</Text>
    </Box>
  );
}
