import { 
    Box,
    Flex,
    Text

 } from "@chakra-ui/react";
import style from './Admin.module.css';
import { useState, useEffect } from "react";
import { Product } from "./Product";
import axios from 'axios'

const postProduct = async (next) => {
    try {
        let req = await axios.get('https://wardrobe-server.onrender.com/products/');
        next(req.data);
    } catch (err) {
        alert(err);
    }
}

export const AllProduct = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        postProduct(setData);
    }, [])


    return <Box>
        <Flex padding={'20px'} justify='space-between'>
            <Box className={style.filterBox} boxShadow='lg'>

            </Box>
            <Box className={style.AllproductBox}>
                {data.map((item)=><Product data={item} key={'adminProduct'+item.id}/>)}
            </Box>
        </Flex>
    </Box>
}