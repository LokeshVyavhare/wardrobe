import {
    Flex, Box, Text, Heading, Image, Button
} from '@chakra-ui/react'
import style from './Admin.module.css'
import {RiDeleteBin5Line} from 'react-icons/ri'

export const Product = ({data}) => {
    const {image1, name, tags, category, prize} = data;
    return <Flex justify={'space-around'} boxShadow='lg' className={style.productBox} align={'center'}  direction={['column', 'column', 'row']} mb={['35px', '35px', '25px']}>
    <Box>
        <Image src={image1} width='75px'/>
    </Box>
    <Box width='20%'>
        <Text fontWeight={700}>{name}</Text>
        <Text>{tags}</Text>
    </Box>
    <Box>
        <Text>{category}</Text>
    </Box>
    <Box>
        <Text fontWeight={700}>$ {prize}</Text>
    </Box>
    <Box>
        <button className={style.productRemoveButton}> <RiDeleteBin5Line/></button>
    </Box>
    </Flex>
}