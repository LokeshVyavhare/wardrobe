import { 
    Box,
    Flex,
    Text

 } from "@chakra-ui/react";
import style from './Admin.module.css';
import dbData from '../../db.json'
import { useState, useEffect } from "react";
import { Product } from "./Product";



export const AllProduct = () => {
    const cart = dbData.products;
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(cart);
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