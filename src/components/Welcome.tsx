import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  useBreakpointValue,
  IconProps,
  
} from "@chakra-ui/react";
import ipynb from "../assets/ipynb.png";

const KuttyHero = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          Find out who will win the next{" "}
          
        </chakra.h1>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, red.400,yellow.500)"
            fontWeight="extrabold"
          >
            NBA championship
          </Text>
          
        </chakra.h1>
        
        <chakra.h1
          px={{ base: "xl", lg: "2xl" }}
          mb={6}
          fontWeight="semibold"
          fontSize={{ base: "xl", md: "2xl" }}
          color={useColorModeValue("black.600", "gray.300")}
        >
          NBAPredictions is a place where you can pit teams against each other and see who would win
        </chakra.h1>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="brand"
            bgGradient="linear(to-r, red.400,yellow.500)"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
          >
            Find out more
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src={ipynb}
          alt="Jupyter Notebook"
        />
      </Box>
      {/* <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      /> */}
    </Box>
  );
};

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#707070" />
      <circle cx="244" cy="106" r="139" fill="#707070" />
      <circle cy="291" r="139" fill="#1f51bf" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#1f51bf" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#1f51bf" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#1f51bf" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#1f51bf" />
    </Icon>
  );
};

export default KuttyHero;