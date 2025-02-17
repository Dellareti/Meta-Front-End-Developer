import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Yasir Khattak!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">
      
<VStack spacing={4} align="center">
      <Avatar name="Yasir Khattak" size="2xl" src="https://i.pravatar.cc/150?img=7" />
      <Heading as="h1" size="sm" color="white">
        {greeting}
      </Heading>
      <Heading as="h1" size="xl" color="white">
        {bio1}
      </Heading>
      <Heading as="h1" size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
