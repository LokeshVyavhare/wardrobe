import { 
    Box,
    Flex,
    Text,
     Grid

 } from "@chakra-ui/react";
import style from './Admin.module.css';
import { useState, useEffect } from "react";
import { Product } from "./Product";
import axios from 'axios'

const postProduct = async (next, o) => {
    try {
        let req = await axios.get('https://wardrobe-server.onrender.com/admin/products?limit=16');
        next(req.data.products);
        o(req.data.count)
    } catch (err) {
        alert(err);
    }
}

export const AllProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        postProduct(setData, setCount);
    }, [])


    return <Box>
            <Grid className={style.AllproductBox} w={['90%']} p='35px 25px' gap='20px' gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}>
                {data.map((item)=><Product data={item} key={'adminProduct'+item.id}/>)}
            </Grid>
    </Box>
}