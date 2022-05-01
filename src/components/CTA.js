import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import githubss from "../assets/githubss.png";

const CTA = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("brand.500")}
      px={8}
      py={24}
      mx="auto"
    >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color={useColorModeValue("black", "gray.900")}
          mb={6}
        >
          <chakra.span display="block">Ready to dive in?</chakra.span>
          <chakra.span
            display="block"
            color={useColorModeValue("black", "gray.900")}
          >
            Checkout our GitHub
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.800", "gray.800")}
        >
          After endless nights of learning, we're ready for you to dive in. Leave a star!
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("black")}
              bg={useColorModeValue("brand.800", "brand.800")}
              href="https://github.com/Canadiak/Deerhacks-Web-Scraping"
              _hover={{
                bg: useColorModeValue("brand.800", "brand.800"),
              }}
            >
              Check out our GitHub
            </chakra.a>
          </Box>
        </Stack>
      </Box>
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
        <Image
          w="full"
          rounded="xl"
          shadow="2xl"
          src={githubss}
          alt="GitHub Screenshot"
        />
      </Box>
    </Flex>
  );
};

export default CTA;