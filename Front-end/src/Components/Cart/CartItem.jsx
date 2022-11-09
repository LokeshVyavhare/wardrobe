import {
    Box,
    Flex,
    Image,
    Text,


} from '@chakra-ui/react'
import style from './cart.module.css'

export const CartItem = ({data}) => {
    const {id, name, image1, category, prize, tags, count} = data;
    return <Flex justify={'space-around'} align={'center'} mb={'25px'}>
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
                    <span className={style.cartCount}>{count}</span>
                    <button className={style.cartCountbutton}>+</button>
                </Text>
            </Box>
            <Box>
                <Text fontWeight={700}>$ {prize}</Text>
            </Box>
    </Flex>
}