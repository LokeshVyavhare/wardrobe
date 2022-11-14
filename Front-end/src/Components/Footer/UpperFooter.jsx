import {
    Box,
    Container,
    Link,
    Grid,
    Heading,

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
import styles from "./Footer.module.css"
import { ReactNode } from 'react';
import { FiMail } from "react-icons/fi"
import { ImFacebook } from "react-icons/im"
import { BsTwitter,BsInstagram,BsYoutube ,BsPinterest} from "react-icons/bs"
import {FaTiktok,FaTabletAlt} from "react-icons/fa"
import {NavLink} from 'react-router-dom'
import ButtonPopup from './ButtonPopup';

export const UpperFooter= () => {
    return <Grid w={['90%', '60%', '95%', '90%', "80%"]} m='auto' display={['none', 'grid']} gridTemplateColumns={['1fr 1fr 1fr 1fr','1fr 1fr','1fr 1fr 1fr 1fr','1fr 1fr 1.5fr 1fr 1fr']} pb='25px'>
        <Box  className={styles.upFootBox}>
            <Heading className={styles.upFootBoxHead}>NEW TO YOOX</Heading>
            <hr className={styles.upFootBoxBr}/>
            <NavLink className={styles.upFootBoxLink}>Shopping guide</NavLink>
            <NavLink className={styles.upFootBoxLink}>iPhone/iPad/Android</NavLink>
            <NavLink className={styles.upFootBoxLink}>Browse all Designers</NavLink>
            <NavLink className={styles.upFootBoxLink}>Browse all Categories</NavLink>
        </Box>
        <Box  className={styles.upFootBox}>
        <Heading className={styles.upFootBoxHead}>HELP</Heading>
        <hr className={styles.upFootBoxBr}/>
            <NavLink className={styles.upFootBoxLink}>Shipping times & costs</NavLink>
            <NavLink className={styles.upFootBoxLink}>Payments and web security</NavLink>
            <NavLink className={styles.upFootBoxLink}>Product quality</NavLink>
            <NavLink className={styles.upFootBoxLink}>Track your order</NavLink>
            <NavLink className={styles.upFootBoxLink}>Returns & refunds</NavLink>
            <NavLink className={styles.upFootBoxLink}>FAQs</NavLink>
            <NavLink className={styles.upFootBoxLink}>Size Guide</NavLink>
        </Box>
        <Box w='100%' bg='#fff' p='25px 25px' display={['none', "none", "none", "block"]}>
            <Flex direction={"column"} justify='space-around' align='center' p='15px 0'>
                <FiMail size='30px'/>
                <Heading size='md' textTransform='uppercase' fontFamily={"'Montserrat',sans-serif"}>WardRobe News</Heading>
            </Flex>
            <Text fontSize='13px' p='15px 0'>
                <Text>Sign up for the newsletter</Text>
                <Text>and discover the latest arrivals and</Text>
                <Text>promotions</Text>
            </Text>

            <Box p='15px 0' className={styles.inpMailbox}>
                <input type="text" placeholder='Enter Your mail' className={styles.inpMail}/>
            </Box>
            <Flex className={styles.radioBox}>
               <label className={styles.radio}><input type="radio" name='newGen' /> Women</label>
                <label className={styles.radio}><input type="radio" name='newGen'/> Men</label>
            </Flex>
            <ButtonPopup/>            

        </Box>
        <Box  className={styles.upFootBox}>
        <Heading className={styles.upFootBoxHead}>WardRobe</Heading>
        <hr className={styles.upFootBoxBr}/>
            <NavLink className={styles.upFootBoxLink}>Home</NavLink>
            <NavLink className={styles.upFootBoxLink}>My Orders</NavLink>
            <NavLink className={styles.upFootBoxLink}>My Details</NavLink>
            <NavLink className={styles.upFootBoxLink}>Dream Box</NavLink>
            <NavLink className={styles.upFootBoxLink}>Premiere</NavLink>
        </Box>
        <Box  className={styles.upFootBox}>
        <Heading className={styles.upFootBoxHead}>About US</Heading>
        <hr className={styles.upFootBoxBr}/>
            <NavLink className={styles.upFootBoxLink}>Company Info</NavLink>
            <NavLink className={styles.upFootBoxLink}>Press</NavLink>
            <NavLink className={styles.upFootBoxLink}>Affiliation</NavLink>
            <NavLink className={styles.upFootBoxLink}>careers</NavLink>
        </Box>

    </Grid>
}