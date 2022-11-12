import {
    Box,
    Flex,
    Image,
    Text,


} from '@chakra-ui/react'
import style from './cart.module.css'
import {useDispatch} from 'react-redux'

export const CartItem = ({data}) => {
    const {quantity, product} = data
    const {id, name, image1, category, price, tags} = product;
    const dispatch = useDispatch()


    return <Flex justify={'space-around'} align={'center'}  direction={['column', 'column', 'row']} mb={['35px', '35px', '25px']}>
            <Box>
                <Image src={image1} width='100px'/>
            </Box>
            <Box>
                <Text fontWeight={700}>{name}</Text>
                <Text>{tags}</Text>
            </Box>
            <Box>
                <Text>{category}</Text>
            </Box>
            <Box>
                <Text bg={''} p={'5px'}>
                    <button className={style.cartCountbutton}>-</button>
                    <span className={style.cartCount}>{quantity}</span>
                    <button className={style.cartCountbutton}>+</button>
                </Text>
            </Box>
            <Box>
                <Text fontWeight={700}>$ {price}</Text>
            </Box>
    </Flex>
}