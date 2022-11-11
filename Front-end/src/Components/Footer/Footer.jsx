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
    Input,
    RadioGroup,
    HStack,
    Radio,
    Checkbox,
    border,

} from '@chakra-ui/react';
import styles from "../Footer/Footer.module.css"
import { ReactNode } from 'react';
import { FiMail } from "react-icons/fi"
import { ImFacebook } from "react-icons/im"
import { BsTwitter,BsInstagram,BsYoutube ,BsPinterest} from "react-icons/bs"
import {FaTiktok,FaTabletAlt} from "react-icons/fa"

import ButtonPopup from './ButtonPopup';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight="bold" fontSize="16px" mb={2}>
            {children}
        </Text>
    );
};




export function Footer() {
    return (
        <div style={{backgroundColor:"#F7F5F5",height:"auto"}}>
            <div className={styles.foot} >
                <Box
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    color={useColorModeValue('gray.700', 'gray.200')} w="75%" margin="auto" h="450px" backgroundColor="#F7F5F5" >
                    <Container  maxW='100%' py={10} h="500px">
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing="-80px"  >
                            <Stack spacing={2} fontSize="13px" color="#333333" marginLeft="-10px" fontFamily="Montserrat,sans-serif"  w="60%" h="300px" textAlign="center">
                                <ListHeader fontSize="12px">NEW TO YOOX</ListHeader >

                                <Box w="60px">
                                    <Box className={styles.myBox} >

                                    </Box>

                                </Box>
                                <Link href={'#'}>Shopping guide</Link>

                                <Link href={'#'}>iPhone/iPad/Android</Link>
                                <Link href={'#'}>Browse all Designers</Link>
                                <Link href={'#'}>Browse all Categories</Link>
                            </Stack>


                            <Stack fontSize="13px" spacing={2} f color="#333333" marginLeft="-20px" fontFamily=" Montserrat,sans-serif"  w="60%" h="300px"   >
                                <ListHeader >  HELP</ListHeader >
                                <Box w="60px">
                                    <Box className={styles.myBox} >

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
                            <Stack w="150%" h="400px" border="1px solid white" marginLeft="-40px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" backgroundColor="white" marginTop="-10px">
                                <FiMail style={{ height: "40px", width: "20%", marginLeft: "129px", marginTop: "20px" }} />
                                <Box>
                                    <p>YOOX NEWS</p>
                                    <p style={{ fontSize: "13px" }}>Sign up for the newsletter</p>
                                    <p style={{ fontSize: "13px" }}>and discover the latest arrivals and</p>
                                    <p style={{ fontSize: "13px" }}>promotions</p>


                                </Box>
                                <Box style={{ marginTop: "15px" }}>
                                    <Input variant='filled' placeholder='Enter Your Email' w="80%" />

                                </Box>

                                <Box style={{ marginTop: "15px" }}  display="flex" justifyContent="center" >
                                    <RadioGroup defaultValue='Itachi' >
                                        <HStack spacing='49px' >
                                            <Radio value='Sasuke'>Women</Radio>
                                            <Radio value='Nagato'>Mens</Radio>

                                        </HStack>
                                    </RadioGroup>
                                </Box>

                                <Box style={{ display: "flex", border: "1px solid white", width: "75%", margin: "auto", marginTop: "5px" }}>
                                    <Checkbox defaultChecked size='lg' colorScheme="blackAlpha"></Checkbox>
                                    <Box style={{ marginLeft: "16px" }}>
                                        <p style={{ fontSize: "11px", marginLeft: "-25px" }}>I consent to receive YOOX </p>
                                        <p style={{ fontSize: "11px" }}>newsletters via email. For further</p>
                                        <p style={{ fontSize: "11px", marginLeft: "-11px" }}>information, please consult the</p>
                                        <p style={{ fontSize: "11px", marginLeft: "-91px" }}> Privacy Policy.</p>

                                    </Box>
                                    <p style={{ fontSize: "13px" }}>  </p>

                                </Box>

                                <Box>
                                    <ButtonPopup />

                                </Box>

                            </Stack>


                            <Stack spacing={2} fontSize="13px" color="#333333" fontFamily=" Montserrat,sans-serif" marginLeft="130px"  w="60%" h="300px" >
                                <ListHeader >  MYOOX</ListHeader >
                                <Box w="60px">
                                    <Box className={styles.myBox} >

                                    </Box>

                                </Box>
                                <Link href={'#'}>Login</Link>
                                <Link href={'#'}>My Orders</Link>
                                <Link href={'#'}>My Details</Link>
                                <Link href={'#'}>Dream Stack</Link>
                                <Link href={'#'}>Première</Link>
                            </Stack>

                            <Stack spacing={2} fontSize="13px" color="#333333" marginLeft="100px" fontFamily=" Montserrat,sans-serif"  w="60%" h="300px" >
                                <ListHeader > ABOUT US</ListHeader >
                                <Box w="60px">
                                    <Box className={styles.myBox} >

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
                   
                </Box>


            </div>
            <div  style={{backgroundColor:"#F7F5F5"}}>
            <Stack   marginTop="20px" width="80%" h="40px" margin="auto">
                    <Flex >
                        <Stack>
                        <p style={{marginTop:"9px",fontFamily:"sans-serif",fontSize:"13px",marginLeft:"10px",fontWeight:"bold"}}>CONNECT WITH US</p>

                        </Stack>

                        <Box style={{display:"flex",justifyContent:"space-around",width:"20%",marginTop:"4px"}} >
                            <ImFacebook style={{ height: "20px", width: "75%",marginTop:"5px"}}/>
                            <BsTwitter  style={{ height: "20px", width: "75%",marginTop:"5px"}}/>
                            <BsInstagram  style={{ height: "20px", width: "75%",marginTop:"5px"}}/>
                            <BsYoutube  style={{ height: "20px", width: "75%",marginTop:"5px"}}/>
                            <BsPinterest style={{ height: "20px", width: "75%",marginTop:"5px"}}/>
                            <FaTiktok style={{ height: "20px", width: "75%",marginTop:"5px"}}/>

                        </Box>

                        <Box   style={{display:"flex",width:"25%",marginLeft:"490px"}}>
                         <FaTabletAlt style={{ height: "45px", width: "20%",marginTop:"-5px"}}/>
                         <Stack>
                         <p style={{marginTop:"12px",fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold"}}>DOWNLOAD THE APP FOR iOS / ANDROID</p>


                         </Stack>

                        </Box>
                        
                       
                        
                    </Flex>
                  
                </Stack>

            </div>
            <div  className={styles.lastpart}>
                <Box h='130px'border="1px solid black" bg="#333333" margin="auto">
                    <Box w="80%" margin="auto" marginTop="45px">
                        <p style={{color:"white",fontSize:"12px" ,fontFamily:" Montserrat,sans-serif"}}>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</p>
                         <p style={{color:"white",fontSize:"12px",fontFamily:" Montserrat,sans-serif"}}>LEGAL AREA / PRIVACY POLICY</p>
                    </Box>

                </Box>

            </div>
            
        </div>
    )
}



export default Footer