//Abhijeet's part

import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTape } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id) => {
      console.log(id);
      let { data } = await axios.get(`http://localhost:8080/products/${id}`);
      setProduct(data);
    };
    getData(id);
  }, []);
  return (
    <Box>
      <Box w="60%" m="auto">
        <Flex direction={["column", "row", "row", "row "]} gap={16}>
          <Box>
            <Image src={product.image1} />
          </Box>

          <Box>
            <VStack align="start" mt={16}>
              <Text as="b" fontSize="20px">
                {product.name}
              </Text>
              <Text fontSize="16px">{product.tag}</Text>
              <Text py={6}> ₹ {product.prize}</Text>
              <Text border="1px" py={3} px={1}>
                Need more help? View the Size Guide
              </Text>
              <Box justifyContent="center">
                <HStack py={3} px={1}>
                  <FaTape />
                  <Text>Find your size</Text>
                </HStack>
              </Box>

              <Button
                fontWeight="light"
                w="100%"
                marginY={3}
                onClick={() => {}}
              >
                ADD TO SHOPPING BAG
              </Button>
              <Button fontWeight="light" w="100%" marginY={3}>
                ADD TO WISHLIST
              </Button>
            </VStack>
          </Box>
        </Flex>
        <SimpleGrid
          my={12}
          columns={["1", "1", "1", "2", "2"]}
          borderTop="1px"
          borderBottom="1px"
          spacing={6}
          paddingY={6}
        >
          <Box align="start">
            <Text as="b" fontSize="20px">
              MADE IN ITALY
            </Text>
            <Text>
              Item made in Italy, synonymous with quality and design creativity.
            </Text>
          </Box>
          <Box align="start">
            <Text as="b" fontSize="20px">
              Details
            </Text>
            <Text>
              knitted, no appliqués, solid color, deep neckline, long sleeves,
              button closing, multipockets, heavy-weight knit
            </Text>
          </Box>
          <Box align="start">
            <Text as="b" fontSize="20px">
              COMPOSITION
            </Text>
            <Text>
              38% Mohair wool, 29% Acrylic, 22% Polyamide, 10% Wool, 1% Elastane
            </Text>
          </Box>
          <Box align="start">
            <Text as="b" fontSize="20px">
              MADE IN ITALY
            </Text>
            <Text>
              Item made in Italy, synonymous with quality and design creativity.
            </Text>
          </Box>
          <Box align="start">
            <Text as="b" fontSize="20px">
              MEASUREMENTS
            </Text>
            <Text>Length 29.64 inches</Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={["1", "1", "1", "2"]}
          borderBottom="1px"
          gap={16}
          py={6}
        >
          <Box textAlign="start">
            <Text as="b">SHIPPING</Text>
            <Text>standard ₹99</Text>
            <Text>8-10 business days</Text>
            <Text as="b">Express ₹199</Text>
            <Text>4-6 business days</Text>
          </Box>
          <Box textAlign="start">
            <Text as="b">RETURNS/EXCHANGE</Text>
            <Text>Fast and easy returns</Text>
            <Text as="b">Returns</Text>
            <Text>within 60 days</Text>
            <Text as="b">Exchange</Text>
            <Text>within 60 days</Text>
            <Text as="b"> VISIT OUR CUSTOMER CARE AREA</Text>
            <Text>for more information on returns,exchanges and refunds</Text>
          </Box>
        </SimpleGrid>
        <Text marginY={6} fontSize="40px" align="center">
          You May Also Like
        </Text>
        <SimpleGrid columns={["1", "1", "1", "5", "5"]}>
          <VStack>
            <Image src="https://www.yoox.com/images/items/14/14206630GX_14_f.jpg?impolicy=crop&width=387&height=490" />
            <Text as="b" fontSize="20px">
              Tory Bruch
            </Text>
            <Text fontSize="20px">sub</Text>
            <Text fontSize="20px">price</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/14/14206630GX_14_f.jpg?impolicy=crop&width=387&height=490" />
            <Text as="b" fontSize="20px">
              Tory Bruch
            </Text>
            <Text fontSize="20px">sub</Text>
            <Text fontSize="20px">price</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/14/14206630GX_14_f.jpg?impolicy=crop&width=387&height=490" />
            <Text as="b" fontSize="20px">
              Tory Bruch
            </Text>
            <Text fontSize="20px">sub</Text>
            <Text fontSize="20px">price</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/14/14206630GX_14_f.jpg?impolicy=crop&width=387&height=490" />
            <Text as="b" fontSize="20px">
              Tory Bruch
            </Text>
            <Text fontSize="20px">sub</Text>
            <Text fontSize="20px">price</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/14/14206630GX_14_f.jpg?impolicy=crop&width=387&height=490" />
            <Text as="b" fontSize="20px">
              Tory Bruch
            </Text>
            <Text fontSize="20px">sub</Text>
            <Text fontSize="20px">price</Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
