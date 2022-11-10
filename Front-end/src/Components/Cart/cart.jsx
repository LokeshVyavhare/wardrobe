import {
    Heading,
    Text,
    Flex,
    Box,
    Link,
    Image,

} from "@chakra-ui/react"
import style from './cart.module.css'
import data from '../../db.json';
import { useState } from "react";
import { useEffect } from "react";
import { CartItem } from "./CartItem";
import { RiArrowRightSLine } from 'react-icons/ri'

const cart = data.cart;

export const Cart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(cart);
    }, [])



    // promocodeStatus
    const [pmcStatus, setPmcStatus] = useState(false);

    const togglepmcStatus = () => {
        setPmcStatus(!pmcStatus);
    }

    return <div className={style.cart}>

        {/* cartpage heading */}

        <Text className={style.heading}>Shopping Bag</Text>

        {/* cart nav */}
        <Flex className={style.nav}>

            <Box className={style.link}><Link>BACK TO SHOPPING</Link></Box>

            <Flex className={style.proceedToOrder}>
                    <Text>PROCEED WITH ORDERS</Text>
                    <RiArrowRightSLine className={style.icon} />
            </Flex>

        </Flex>
            
        <Box borderBottom={['6px solid rgb(228, 228, 228)']}>

            <Heading size={'md'} p={['10px 12px']}>
                <Flex>
                    <Text mr={['25px']}>1</Text>
                    <Text mr={['25px']}>|</Text>
                    <Text mr={['25px']}>ITEMS ADDED TO YOUR SHOPPING BAG {1}</Text>
                </Flex>
            </Heading>
            {data.map((item) => <CartItem key={item.id + 'cartData'} data={item} />)}
        </Box>


        {/* shipping mode */}
        <Box borderBottom={'6px solid rgb(228, 228, 228)'} p='35px 20px'>
            <Heading size={'md'} p={['10px 12px']}>
                <Flex>
                    <Text mr={['25px']}>2</Text>
                    <Text mr={['25px']}>|</Text>
                    <Text mr={['25px']}> SELECT SHIPPING METHOD {1}</Text>
                </Flex>
            </Heading>

            <Box className={style.shippingList}>
                    <label>
                <Flex align='start' className={style.shippingOpt} cursor='pointer'>
                    <input type="radio" name="mode" className={style.shippingRadio} checked={true}/>
                    <Box>
                    <Heading size={'sm'}>STANDARD - $ 9.95</Heading>
                    <Text color='grey' fontSize={'13px'}>8-10 business days</Text>
                    </Box>
                </Flex>
                    </label>
                    <label>    
                <Flex align='start' className={style.shippingOpt} cursor='pointer'>
                    <input type="radio" name="mode" className={style.shippingRadio}/>
                    <Box>
                    <Heading size={'sm'}>EXPRESS -$ 14.95</Heading>
                    <Text color='grey' fontSize={'13px'}>2-3 business days</Text>
                    </Box>
                    
                </Flex>
                    </label>
            </Box>

            <Flex className={style.ecoBox} w={['70%']} minW='200px'>
                <Box width='80%'>
                <Heading className={style.ecoBoxHeading} size='xs' textAlign='left'>ecobox</Heading>
                <Text className={style.ecoBoxText}>YOOX's packaging is made entirely from recyclable materials and is internationally certified by RESY, FSC, PEFC and SFI for environmental, social and economic sustainability.</Text>
                </Box>
                <Box>
                    <Image src='https://www.yoox.com/media/yoox16/icons/svg/ecobox.svg'/>
                </Box>
            </Flex>  

        </Box>

        {/* Cart Prixes */}

        <Box p='45px 0px'>

            <Box className={style.promoCodeBox} p='15px 20px'>
                <Flex onClick={togglepmcStatus}>
                    <Flex>
                        <Heading size='sm' mr='15px'>WARDROBECODE</Heading>
                        {pmcStatus?"":<Text fontSize='12px'>Use your personal YOOXCODE to access exclusive promotions</Text>}
                    </Flex>
                    <Flex>
                        
                    </Flex>
                </Flex>

            </Box>

        </Box>
    </div>
}