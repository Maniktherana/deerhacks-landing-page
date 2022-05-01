import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Stack,
  GridItem,
} from "@chakra-ui/react";
export default function Wfl() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue("brand.500", "brand.300")}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color={useColorModeValue("gray.900")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              color={useColorModeValue("brand.500")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              We scraped the web
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              To find out who wins
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Using selenium and an advanced ML model, we gatherd data to predict which team will win
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="Built in python">
                We used scikit learn, jupyter notebooks, selenium to process 29 years worth of NBA data{" "}
              </Feature>
              <Feature title="Scraping the web">
                {" "}
                We scraped advanced stats and per 100 possessions stats for the winners and 
                losers of every nba playoff series between 1990-2019.{" "}
                We eneded up with 450 data points and 106 features.{" "}
              </Feature>
              <Feature title="SciKit Learn">
              We implemented a logistic regression model. The model scored 77% accurate on test data (33% of the 450 samples).
              </Feature>
              <Feature title="Processing data">
                {" "}
                Sports evolve over time so it’s important to have variance in when the data comes from.
                We shuffled, balanced and combined data to prevent overfitting.
              </Feature>
              <Feature title="Removed redundancy">
                {" "}
                It’s important to remove variables that are unimportant or redundant.
                Based off our deep love for basketball we assessed and removed 84 variables that didnt impact our results.
                {" "}
              </Feature>
              <Feature title="Simplify and Select">
                {" "}
                We simplifed the model using sklearn’s SelectKBest function with various entries for k.
                So we then used pickle to use the model for flask deployment.
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}