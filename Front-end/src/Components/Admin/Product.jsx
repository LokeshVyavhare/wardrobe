import {
    Flex, Box, Text, Heading, Image, Button
} from '@chakra-ui/react'
import style from './Admin.module.css'
import {RiDeleteBin5Line} from 'react-icons/ri'

export const Product = ({data}) => {
    const {image1,image2, name, tags, category, price} = data;
    return <Flex bg='#fff' h='250px' borderRadius='25px' shadow={'lg '} p='15px' direction='column' justify='space-between'>
        <Flex justify='space-around' align='center'>
        <Box>
           <Image src={image1} alt='image' w='100px' h="100px" 
           onMouseEnter={(e)=>{e.target.src=image2}}
           onMouseLeave={(e)=>{e.target.src=image1}}
           />
        </Box>
        <Flex direction={'column'}>
            <Box>Price: ${price}</Box>
            <Box>For Whom: {category}</Box>
        </Flex>
        </Flex>
        <Box>
            <Flex justify='center'><Text>Name :</Text><Text>{name}</Text></Flex>
            <Box>Category: {tags}</Box>
        </Box>
        <Flex justify='center' align='baseline' justifySelf={'end'} m='0 auto' w='fit-content' cursor='pointer'>
            <RiDeleteBin5Line size='30px'/>
        </Flex>
    </Flex>
}