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
import {UpperFooter} from './UpperFooter'

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight="bold" fontSize="16px" mb={2}>
            {children}
        </Text>
    );
};




export function Footer() {
    return (
            <Box bg='#f3f3f3' borderTop='1px solid #e0e0e0' p={['15px 0 0']}>
                <UpperFooter />
            <Box border='2px solid #fff'>
            <Flex justify='space-evenly' direction={['column','column', 'column','row']} align='center'>
                <Flex direction={['column', 'row']} p='15px' w='fit-content'>
                    <Box><Text fontFamily={"'Montserrat',sans-serif"} fontSize='14px' p='0 15px'>CONNECT WITH US</Text></Box>
                    <Flex className={styles.mediaSection}>
                        <ImFacebook  className={styles.mediaIcon}/>
                        <BsTwitter className={styles.mediaIcon}/>
                        <BsInstagram className={styles.mediaIcon}/>
                        <BsYoutube className={styles.mediaIcon}/>
                        <BsPinterest className={styles.mediaIcon}/>
                        <FaTiktok className={styles.mediaIcon}/>
                    </Flex>
                </Flex>
                <Flex p='15px' w='fit-content'>
                    <Box>
                        <FaTabletAlt/>
                    </Box>
                    <Box>
                    <Text fontFamily={"'Montserrat',sans-serif"} fontSize='14px' p='0 15px'>DOWNLOAD THE APP FOR iOS / ANDROID</Text>
                        
                    </Box>
                </Flex>
            </Flex>
            </Box>
            <Box p="35px" bg='#000' color="#fff">
                <Text fontFamily={"'Montserrat',sans-serif"} fontSize='14px'>This is Educational Purpose School Project, Content Not Intented to use for commercial purpose.</Text>
                <Text fontFamily={"'Montserrat',sans-serif"} fontSize='15px' p='10px' color='grey'>Created By- Fixed-thread-889 Team</Text>
            </Box>
        </Box>
    )
}



export default Footer



/*
<Stack w="150%" h="400px" border="1px solid white" marginLeft="-40px" display={['none', 'none', "none", 'flex']} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" backgroundColor="white" marginTop="-10px">
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
*/