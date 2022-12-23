import {
    Flex, Box, Text, Heading, Image, Button
} from '@chakra-ui/react'
import style from './Admin.module.css'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { EditProductModal } from "./ProductModal/EditProductModal";
import { useState } from 'react';

export const Product = ({data}) => {
    const {image1,image2, name, tags, category, price} = data;
    const [editModalDis, setEditModalDis ] = useState(false);
    const [modalData, setModalData] = useState({});

    const closeModal = () => {
        setEditModalDis(false);
    }

    const updateModal = ()=>{
        console.log('send patch req with data', modalData);
    }

    const handleEdit = () => {
        let obj={name, tags, category, price, image1, image2};
        setModalData(obj);
        setEditModalDis(true);
    }
    return <Flex bg='#fff' h='250px' borderRadius='25px' shadow={'lg '} p='15px' direction='column' justify='space-between'>
        <Flex justify='space-around' align='center'>
        {editModalDis?<EditProductModal data={modalData} methods={{closeModal, updateModal, setData:setModalData}}/>:""}
        <Box>
           <Image src={image1} alt='image' w='100px' h="100px" 
           onMouseEnter={(e)=>{e.target.src=image2}}
           onMouseLeave={(e)=>{e.target.src=image1}}
           />
        </Box>
        <Flex direction={'column'}>
            <Box><b>Price:</b> ${price}</Box>
            <Box style={{textTransform:"capitalize"}}>{category}</Box>
        </Flex>
        </Flex>
        <Box>
            <Flex justify='left' mb='10px'><Text><b>Name</b>: </Text><Text textTransform={'capitalize'} ml='10px'> {' '+ name}</Text></Flex>
            <Flex justify='left'><Text><b>Category: </b></Text><Text textTransform={'capitalize'} ml='10px'> {' '+ tags}</Text></Flex>
        </Box>
        <Flex justify='space-around' align='baseline' justifySelf={'end'} m='0 auto' w='100%' cursor='pointer'>
            <p>Delete</p>
            <p onClick={handleEdit}>Edit</p>
        </Flex>
    </Flex>
}