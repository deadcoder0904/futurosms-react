import React from "react";
import { Text, Subtitle, Box } from "./glamarous";

const Card = ({ title, text, i }) => (
  <Box key={i}>
    <Subtitle>{title}</Subtitle>
    <Text>{text}</Text>
  </Box>
);

export default Card;
