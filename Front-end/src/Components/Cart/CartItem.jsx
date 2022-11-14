import {
    Box,
    Flex,
    Image,
    Text,


} from '@chakra-ui/react'
import style from './cart.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { updateCartItem, Delete_Cart_Item } from '../../Redux/Cart/actions'
import { useToast } from '@chakra-ui/react'

export const CartItem = ({data}) => {
    const {quantity, product, _id} = data
    const {id, name, image1, category, price, tags} = product;
    const dispatch = useDispatch()
    const token = useSelector(store=>store.auth.data.token);
    const toast = useToast();


    const deleted =  ()=>{
        toast({
            title: 'Deleted',
            description: "Item Removed From Cart",
            status: 'error',
            duration: 5000,
            isClosable: true,
        });

    }    

    const addCount = ()=>{
        dispatch(updateCartItem(token, _id, quantity+1))
    }

    const decCount = ()=>{
        dispatch(updateCartItem(token, _id, quantity-1))
    }
    const handleDelete = () => {
        dispatch(Delete_Cart_Item(token, _id,deleted))
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
                    <Box className={style.cartCountbuttonBox}>{quantity>=2?<button className={style.cartCountbutton} onClick={decCount}>-</button>:""}</Box>
                    <span>{quantity}</span>
                    <Box className={style.cartCountbuttonBox}>{quantity<=9?<button className={style.cartCountbutton} onClick={addCount}>+</button>:""}</Box>
                </Flex>
                <button onClick={handleDelete}>Remove</button>
            </Box>
            <Box>
                <Text fontWeight={700}>$ {price*quantity}</Text>
            </Box>
    </Flex>
}