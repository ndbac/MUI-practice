import Box from "@mui/material/Box";
import React from "react";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
