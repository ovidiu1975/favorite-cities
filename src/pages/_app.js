// pages/_app.js
import { Provider } from "@/components/ui/provider";
import { AbsoluteCenter, Box, Center, HStack, Link } from "@chakra-ui/react"
import NextLink from "next/link";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function Navbar() {
  return (
    
    <Box bg="blue.500" p={4} color="white">
      <Center >
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
      </Center>  
    </Box>
    
  );
}
function MyApp({ Component, pageProps: { session, ...pageProps }  }) {
  return (
    <SessionProvider session={session}>
      <Provider>
        <Navbar />
        <AbsoluteCenter>
          <Component {...pageProps} />
        </AbsoluteCenter>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
