import {
    Box,
    Flex,
    Image,
    Text,


} from '@chakra-ui/react'
import style from './cart.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { updateCartItem } from '../../Redux/Cart/actions'

export const CartItem = ({data}) => {
    const {quantity, product, _id} = data
    const {id, name, image1, category, price, tags} = product;
    const dispatch = useDispatch()
    const token = useSelector(store=>store.auth.data.token);

    const addCount = ()=>{
        dispatch(updateCartItem(token, _id, quantity+1))
    }

    const decCount = ()=>{
        dispatch(updateCartItem(token, _id, quantity-1))
    }


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
                <Flex className={style.cartCount}>
                    {quantity>=2?<button className={style.cartCountbutton} onClick={decCount}>-</button>:""}
                    <span>{quantity}</span>
                    {quantity<=9?<button className={style.cartCountbutton} onClick={addCount}>+</button>:""}
                </Flex>
            </Box>
            <Box>
                <Text fontWeight={700}>$ {price}</Text>
            </Box>
    </Flex>
}