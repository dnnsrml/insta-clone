import { Image } from "@chakra-ui/image";
import { Box, Container, Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"100%"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
          {/* left hand side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="auth.png" alt="Phone Image" h={600} />
          </Box>

          {/* right hand side */}
          <VStack>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="playstore.png" alt="Playstore Logo" h={10} />
              <Image src="microsoft.png" alt="Microsoft Logo" h={10} />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
