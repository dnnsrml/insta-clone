import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <Flex>
        <Box>FeedPosts</Box>
        <Box>Suggested Users</Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
