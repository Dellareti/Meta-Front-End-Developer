import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  
  return (
    <VStack style={{backgroundColor:"white", borderRadius:"10px", alignItems:"baseline"}}>
      <Image width={"100%"} style={{borderRadius:"10px"}} src={imageSrc} alt={title}></Image>

      <div style={{padding:"10px", color: "black"}} >
        <Heading as={"h1"} size={"xs"}>{title}</Heading>
        <Text style={{ padding:"10px 0" }} >{ description }</Text>
        <HStack style={{fontSize:"sm", fontWeight:"bold" , alignItems:"center", padding: "10px 0 0 0"}}>
          <Text >See More</Text>
          <FontAwesomeIcon  icon={faArrowRight} size="1x"/> 
      </HStack>
      </div>
      
    </VStack>
  )
};

export default Card;
