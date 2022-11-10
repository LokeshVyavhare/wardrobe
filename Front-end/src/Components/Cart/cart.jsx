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
        <Text className={style.heading}>Shopping Bag</Text>


        <Flex className={style.payment}>
            <Box className={style.link}><Link>BACK TO SHOPPING</Link></Box>

            <Flex className={style.paymentOpt}>
                <Flex className={style.paypalBox}>
                    <Image src='https://www.yoox.com/media/yoox16/logos/paypal_logo_txt.png?v=1'></Image>
                    <Text>CHECK OUT</Text>
                </Flex>

                <Flex className={style.proceedToOrder}>
                    <Text>PROCEED WITH ORDERS</Text>
                    <RiArrowRightSLine className={style.icon} />
                </Flex>

            </Flex>
        </Flex>

        <Box className={style.cartList} borderBottom={['6px solid rgb(228, 228, 228)']}>
            <Heading size={'md'} p={['10px 12px']}>
                <Flex>
                    <Text mr={['25px']}>1</Text>
                    <Text mr={['25px']}>|</Text>
                    <Text mr={['25px']}>ITEMS ADDED TO YOUR SHOPPING BAG {1}</Text>
                </Flex>
            </Heading>
            {data.map((item) => <CartItem key={item.id + 'cartData'} data={item} />)}
        </Box>
        <Box className={style.cartList}>
            <Heading size={'md'} p={['10px 12px']}>
                <Flex>
                    <Text mr={['25px']}>2</Text>
                    <Text mr={['25px']}>|</Text>
                    <Text mr={['25px']}> SELECT SHIPPING METHOD {1}</Text>
                </Flex>
            </Heading>

            <Box >
                <Flex>
                    <input type="radio" name="mode"/>
                    <Box>
                    <Heading size={'sm'}>STANDARD - $ 9.95</Heading>
                    <Text color='grey' fontSize={'13px'}>8-10 business days</Text>
                    </Box>
                </Flex>
                <Flex>
                    <input type="radio" name="mode"/>
                    <Box>
                    <Heading size={'sm'}>EXPRESS -$ 14.95</Heading>
                    <Text color='grey' fontSize={'13px'}>2-3 business days</Text>
                    </Box>
                    
                </Flex>
            </Box>

        </Box>
    </div>
}