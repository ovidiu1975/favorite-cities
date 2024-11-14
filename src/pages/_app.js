// pages/_app.js
import { Provider } from "@/components/ui/provider";
import { Box, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link";
import "../styles/globals.css";

/*
function Navbar() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <HStack spacing={4}>
        <NextLink href="/" passHref>
          <Link>Homepage</Link>
        </NextLink>
        <NextLink href="/search" passHref>
          <Link>Search</Link>
        </NextLink>
        <NextLink href="/city" passHref>
          <Link>City Page</Link>
        </NextLink>
        <NextLink href="/favorites" passHref>
          <Link>Favorites</Link>
        </NextLink>
      </HStack>
      
    </Box>
    
  );
}
  */

function Navbar() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <HStack spacing={4}>
        <NextLink href="/" passHref>
          Homepage
        </NextLink>
        <NextLink href="/search" passHref>
          Search
        </NextLink>
        <NextLink href="/city" passHref>
          City Page
        </NextLink>
        <NextLink href="/favorites" passHref>
          Favorites
        </NextLink>
      </HStack>
      
    </Box>
    
  );
}
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
