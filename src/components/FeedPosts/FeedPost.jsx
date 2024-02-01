import React from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt="user profile pic" />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
