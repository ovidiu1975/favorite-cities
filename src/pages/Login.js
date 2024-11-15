// pages/login.js
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {
  Box,
  Input,
  Button,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (!result.error) {
      router.push("search");
    }
  };

  return (
    <Box p={5} maxWidth="400px" margin="auto" textAlign="center">
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
