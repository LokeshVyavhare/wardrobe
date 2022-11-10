import {
    Heading,
    Text,
    Flex,
    Box,
    Link,
    Image,
    RadioGroup,
    Radio,
    Stack

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
    console.log(cart)
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
        <Box>
            <Heading size={'md'} p={['10px 12px']}>
                <Flex>
                    <Text mr={['25px']}>2</Text>
                    <Text mr={['25px']}>|</Text>
                    <Text mr={['25px']}> SELECT SHIPPING METHOD {1}</Text>
                </Flex>
            </Heading>

            <Box className={style.shippingList}>
                <Flex align='start' className={style.shippingOpt}>
                    <input type="radio" name="mode" className={style.shippingRadio}/>
                    <Box>
                    <Heading size={'sm'}>STANDARD - $ 9.95</Heading>
                    <Text color='grey' fontSize={'13px'}>8-10 business days</Text>
                    </Box>
                </Flex>
                <Flex align='start' className={style.shippingOpt}>
                    <input type="radio" name="mode" className={style.shippingRadio}/>
                    <Box>
                    <Heading size={'sm'}>EXPRESS -$ 14.95</Heading>
                    <Text color='grey' fontSize={'13px'}>2-3 business days</Text>
                    </Box>
                    
                </Flex>
            </Box>

        </Box>
    </div>
}