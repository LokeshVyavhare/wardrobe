//Abhijeet's part

import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Square,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { FaTape } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddToCart } from "../../Redux/Cart/actions";
import { Loading } from "../Loading/Loading";
import style from "./Product.module.css";
export const Product = () => {
  const [product, setProduct] = useState({});
  const [imageuri, setImageuri] = useState("");
  const { id } = useParams();
  const { token } = useSelector((store) => store.auth.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const cartSuccess = () =>
    toast({
      title: "Success",
      description: "Item added in cart.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

  const cartFailure = () =>
    toast({
      title: "Failed",
      description: "Something went wrong.",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  const toaster = {
    cartSuccess,
    cartFailure,
  };

  const handleCart = (id) => {
    if (!token) {
      return navigate("/login");
    }
    dispatch(AddToCart(token, id, toaster));
  };

  // "_id": "636e7e01d81cbbad4a8c9bd5",
  // "name": "MM6 MAISON MARGIELA",
  // "image1": "https://www.yoox.com/images/items/50/50291958CE_14_f.jpg?impolicy=crop&width=387&height=490",
  // "image2": "https://www.yoox.com/images/items/50/50291958CE_14_f.jpg?impolicy=crop&width=387&height=490",
  // "description": "Item made in Italy, synonymous with quality and design creativity.",
  // "price": 144,
  // "category": "men",
  // "tags": "jwellery"
  // },

  useEffect(() => {
    setLoading(true);
    const getData = async (id) => {
      console.log(id);
      let { data } = await axios.get(
        `https://wardrobe-server.onrender.com/products/${id}`
      );
      setProduct(data);
      setImageuri(data.image1);
    };
    getData(id).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <div className={style.topBanner}>
        <h1 className={style.h1}>{product.name}</h1>
        <p className={style.para}>
          The great standard-bearer of 90s minimalism, Jil Sander continues to
          please its followers with streamlined, modern styles: for women, that
          means sleek and masculine tailored separates anchored by cult-hit
          shoes; and for men, everything from suiting, to sneakers, to denim –
          all with a contemporary edge... View more
        </p>
      </div>
      <Box w="60%" m="auto">
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={6} paddingY={6}>
          <VStack>
            <Image src={imageuri} height="300px" />
            <HStack gap="30px">
              <Square
                size="80px"
                border="1px"
                padding="10px"
                onClick={() => setImageuri(product.image1)}
              >
                <Image src={product.image1} />
              </Square>
              <Square
                size="80px"
                border="1px"
                padding="10px"
                onClick={() => setImageuri(product.image2)}
              >
                <Image src={product.image2} />
              </Square>
            </HStack>
          </VStack>
          <Box>
            <VStack align="start">
              <Text as="b" fontSize="25px">
                {product.name}
              </Text>
              <Text fontSize="20px" align="start">
                {product.tags}
              </Text>
              <Text py={6} fontSize="25px">
                $ {product.price}
              </Text>
              <Text border="1px" p={4}>
                Need more help? View the Size Guide
              </Text>
              <Box justifyContent="center">
                <HStack py={3}>
                  <FaTape />
                  <Text>Find your size</Text>
                </HStack>
              </Box>

              <Button
                fontWeight="light"
                w="100%"
                marginY={3}
                onClick={() => handleCart(id)}
              >
                ADD TO SHOPPING BAG
              </Button>
              <Button fontWeight="light" w="100%" marginY={3}>
                ADD TO WISHLIST
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
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
            <Image src="https://www.yoox.com/images/items/16/16176231CO_14_f.jpg?impolicy=crop&width=306&height=390" />
            <Text as="b" fontSize="20px">
              MONCLER
            </Text>
            <Text fontSize="20px">Jacket</Text>
            <Text fontSize="20px">₹ 15880</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/14/14206630GX_14_f.jpg?impolicy=crop&width=387&height=490" />
            <Text as="b" fontSize="20px">
              TORY BRUCH
            </Text>
            <Text fontSize="20px">Cardigan</Text>
            <Text fontSize="20px">₹ 18840</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/13/13919572QB_14_f.jpg?impolicy=crop&width=306&height=390" />
            <Text as="b" fontSize="20px">
              DIESEL
            </Text>
            <Text fontSize="20px">Denim pants</Text>
            <Text fontSize="20px">₹ 15730</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/16/16179483LM_14_f.jpg?impolicy=crop&width=306&height=390" />
            <Text as="b" fontSize="20px">
              NINEMINUTES
            </Text>
            <Text fontSize="20px">Biker Jacket</Text>
            <Text fontSize="20px">₹ 21954</Text>
          </VStack>
          <VStack>
            <Image src="https://www.yoox.com/images/items/50/50289777SW_14_f.jpg?impolicy=crop&width=306&height=390" />
            <Text as="b" fontSize="20px">
              SALVATORE FERRAGAMO
            </Text>
            <Text fontSize="20px">Wrist watch</Text>
            <Text fontSize="20px">₹ 50832</Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
