import {
    Heading,
    Text,
    Flex,
    Box,
    Link,
    Image,
    Grid

} from "@chakra-ui/react"
import style from './cart.module.css'
import data from '../../db.json';
import { useState } from "react";
import { useEffect } from "react";
import { CartItem } from "./CartItem";
import { RiArrowRightSLine } from 'react-icons/ri'
import {HiOutlinePlus} from 'react-icons/hi'
import { GetCartItems } from "../../Redux/Cart/actions";
import { useDispatch, useSelector } from "react-redux";

const cart = data.cart;

export const Cart = () => {
    const token = useSelector(store=>store.auth.data.token);
    const data = useSelector(store=>store.cart.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetCartItems(token));
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
        <Flex className={style.nav} direction={['column','column', 'row']}>

            <Box className={style.link} mb={['25px','25px', 'auto']}><Link>BACK TO SHOPPING</Link></Box>

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
        <Box borderBottom={'6px solid rgb(228, 228, 228)'} p={['35px 5px','35px 10px','35px 20px']}>
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

            <Flex className={style.ecoBox} w={['100%','90%', '80%', '70%']}>
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
                <Flex onClick={togglepmcStatus} justify={'space-between'} cursor='pointer'>
                    <Flex>
                        <Heading size='sm' mr='15px'>WARDROBECODE</Heading>
                        {pmcStatus?"":<Text fontSize='12px'>Use your personal YOOXCODE to access exclusive promotions</Text>}
                    </Flex>
                    <Flex>
                        <Box transform={pmcStatus?"rotate(45deg)":"rotate(0deg)"} transition='0.3s'><HiOutlinePlus/></Box>
                    </Flex>
                </Flex>

            </Box>

            {/* price details */}

            <Box className={style.priceList}>
                <Flex className={style.priceBox}>
                    <Heading size={'xs'}>Total For All Items</Heading>
                    <Heading size={'xs'}>$ {229.00}</Heading>
                </Flex>
                <Flex className={style.priceBox}>
                    <Heading size={'xs'}>Shipping</Heading>
                    <Heading size={'xs'}>$ {71.00}</Heading>
                </Flex>
                <Flex className={style.priceBox}>
                    <Heading size={'xs'}>Payment</Heading>
                    <Heading size={'xs'}>$ {0.00}</Heading>
                </Flex>

                <Flex className={style.orderTotal}>
                <Heading size={'sm'}>Order Total</Heading>
                    <Heading size={'sm'}>$ {1450.00}</Heading>

                </Flex>


            </Box>
{/* nav */}
            <Flex className={style.nav} direction={['column','column', 'row']}>

            <Box className={style.link} mb={['25px','25px', 'auto']}><Link>BACK TO SHOPPING</Link></Box>

            <Flex className={style.proceedToOrder} >
                    <Text>PROCEED WITH ORDERS</Text>
                    <RiArrowRightSLine className={style.icon} />
            </Flex>

        </Flex>

        </Box>
    </div>
}