// pages/search.js
import { useState } from "react";
import { Input, Button, Box, VStack, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <Box p={5} maxWidth="600px" margin="auto" textAlign="center">
      <Input
        placeholder="Enter city name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button mt={3} colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>

      <VStack mt={5} spacing={4}>
        {results.map((city) => (
          <NextLink
            key={city.id}
            href={{
              pathname: `/city/${city.id}`,
              query: { lat: city.la, lng: city.lo, name: city.name, country: city.country },
            }}
            passHref
          >
            
            <Link>
              <Text>{city.name}, {city.country}</Text>
            </Link>
          </NextLink>
        ))}
      </VStack>
    </Box>
  );
}
