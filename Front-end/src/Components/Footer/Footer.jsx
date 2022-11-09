import {
    Box,
    Container,
    Link,
   
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    SimpleGrid,
    Button,
   
  } from '@chakra-ui/react';
  import styles from "../Footer/Footer.module.css"
  import { ReactNode } from 'react';
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight="bold" fontSize="16px" mb={2}>
        {children}
      </Text>
    );
  };

  


function Footer() {
    return (
        <div  className={styles.foot} >
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')} w="75%"  border="1px solid black" margin="auto" h="500px" >
                <Container   border="1px solid red" maxW='100%' py={10}  marginTop="20px" h="500px">
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing="-80px"  >
                        <Stack  spacing={2}  fontSize="13px" color="#333333" marginLeft="-10px" fontFamily="Montserrat,sans-serif" fontWeight="bold" w="60%" h="300px" border="1px solid black" textAlign="center">
                            <ListHeader fontSize="12px">NEW TO YOOX</ListHeader >
                             
                            <Box   w="60px">
                                <Box  className={styles.myBox} >

                                </Box>

                            </Box>
                            <Link href={'#'}>Shopping guide</Link>
                           
                            <Link href={'#'}>iPhone/iPad/Android</Link>
                            <Link href={'#'}>Browse all Designers</Link>
                            <Link href={'#'}>Browse all Categories</Link>
                        </Stack>


                        <Stack fontSize="13px"  spacing={2} f color="#333333" marginLeft="-20px" fontFamily=" Montserrat,sans-serif" fontWeight="bold" w="60%" h="300px" border="1px solid black"  >
                            <ListHeader >  HELP</ListHeader >
                            <Box   w="60px">
                                <Box  className={styles.myBox} >

                                </Box>

                            </Box>
                            <Link href={'#'}>Shipping times & costs</Link>
                            <Link href={'#'}>Payments and web security</Link>
                            <Link href={'#'}>Product quality</Link>
                            <Link href={'#'}>Track your order</Link>
                            <Link href={'#'}>Returns & refunds</Link>
                            <Link href={'#'}>FAQs</Link>
                            <Link href={'#'}>Size Guide</Link>
                        </Stack>
                        <Stack w="150%" h="400px" border="1px solid black" marginLeft="-40px">
                       
                        </Stack>
 
                        <Stack  spacing={2}  fontSize="13px" color="#333333" fontFamily=" Montserrat,sans-serif" marginLeft="130px" fontWeight="bold"  w="60%" h="300px" border="1px solid black">
                            <ListHeader >  MYOOX</ListHeader >
                            <Box   w="60px">
                                <Box  className={styles.myBox} >

                                </Box>

                            </Box>
                            <Link href={'#'}>Login</Link>
                            <Link href={'#'}>My Orders</Link>
                            <Link href={'#'}>My Details</Link>
                            <Link href={'#'}>Dream Stack</Link>
                            <Link href={'#'}>Première</Link>
                        </Stack>

                        <Stack   spacing={2} fontSize="13px" color="#333333" marginLeft="100px" fontFamily=" Montserrat,sans-serif" fontWeight="bold" w="60%" h="300px" border="1px solid black">
                            <ListHeader > ABOUT US</ListHeader >
                            <Box   w="60px">
                                <Box  className={styles.myBox} >

                                </Box>

                            </Box>
                            <Link href={'#'}>Company Info</Link>
                            <Link href={'#'}>Press</Link>
                            <Link href={'#'}>Affiliation</Link>
                            <Link href={'#'}>Instagram</Link>
                            <Link href={'#'}>LinkedIn</Link>
                        </Stack>
                    </SimpleGrid>
                </Container>
                {/* <Stack py={10}>
                    <Flex
                        align={'center'}
                        _before={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: useColorModeValue('gray.200', 'gray.700'),
                            flexGrow: 1,
                            mr: 8,
                        }}
                        _after={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: useColorModeValue('gray.200', 'gray.700'),
                            flexGrow: 1,
                            ml: 8,
                        }}>
                        <Logo />
                    </Flex>
                    <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                        © 2022 Chakra Templates. All rights reserved
                    </Text>
                </Stack> */}
            </Box>


        </div>
    )
}



export default Footer