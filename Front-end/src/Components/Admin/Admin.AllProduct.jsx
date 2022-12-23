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
import { Loading } from "../Loading/Loading";


const postProduct = async (next, loading, error) => {
    loading(true)
    try {
        let req = await axios.get('https://wardrobe-server.onrender.com/admin/products?limit=16');
        next(req.data.products);
        // o(req.data.count)
        loading(false)
        error(false)
    } catch (err) {
        alert(err);
        loading(false)
        error(true)
    }
}

export const AllProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        postProduct(setData, setLoading, setError)
    }, [])

    if(loading){
        return <Loading/>
    }
    return <Box>
            <Grid className={style.AllproductBox} w={['90%']} p='35px 25px' gap='20px' gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}>
                {data.map((item)=><Product data={item} key={'adminProduct'+item.id}/>)}
            </Grid>
    </Box>
}