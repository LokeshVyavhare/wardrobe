import {
    Box, Flex, Image, Select
} from "@chakra-ui/react"
import style from './Admin.module.css'
import axios from 'axios';
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const postProduct = async (data, next) => {
    try {
        await axios.post('https://wardrobe-server.onrender.com/products/', data, { headers: { token: "636e2d8a75f1a42ba27417b2-admin@1-seller-admin" } })
        alert('product addded successfully')
        next();
    } catch (err) {
        alert(err);
    }
}

export const AddProduct = () => {
    const inpName = useRef(null);
    const inpDesc = useRef(null);
    const inpPrice = useRef(null);
    const inpDiscount = useRef(null);
    const inpimage1 = useRef(null);
    const inpimage2 = useRef(null);
    const inpCat = useRef(null);
    const inpSub = useRef(null);

    const [disablity, setDis] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        if(inpimage2.current.value===""){
            inpimage2.current.value=inpimage1.current.value
        }
        let obj = {
            name: inpName.current.value,
            image1: inpimage1.current.value,
            image2: inpimage2.current.value,
            description: inpDesc.current.value,
            price: inpPrice.current.value,
            category:inpCat.current.value,
            tags: inpSub.current.value,
        }
        console.log("adding data")
        postProduct(obj, ()=>{e.target.reset()});
    }
    return <Box>

        <form className={style.form} onSubmit={handleSubmit}>
            <Flex className={style.sectionA} >
                <Box className={style.sectionA1}>
                    <input type="text" ref={inpName} required placeholder='Enter Name of the product' />
                    <input type="text" ref={inpDesc} required placeholder="Enter Description" />
                    <Flex justify='space-between'>
                        <Select placeholder='Select Category' w='45%' required ref={inpCat}>
                            <option value='men'>Men</option>
                            <option value='women'>Women</option>
                            <option value='kids'>Kids</option>
                        </Select>
                        <Select placeholder='Select SubCategory' w='45%' required ref={inpSub}>
                            <option value='footwear'>Footwear</option>
                            <option value='upperwear'>Upperwear</option>
                            <option value='lowerwear'>Lowerwear</option>
                            <option value='innerwear'>Innerwear</option>
                            <option value='jwellery'>Jwellery</option>
                            <option value='hats'>Hats</option>
                            <option value='tradition'>Tradition</option>
                            <option value='fullbody'>Fullbody</option>
                        </Select>
                    </Flex>
                    <Flex className={style.sectionAA1}>
                        <label><input type="number" ref={inpPrice} required placeholder="Enter price" /> $</label>
                        <label><input type="number" ref={inpDiscount} required placeholder="Enter Discount" /> %</label>
                    </Flex>
                </Box>
                <Box className={style.sectionA2}>
                    <input type="url" placeholder='Enter image1 URL' required ref={inpimage1} />
                    <Box className={style.previewBox}>
                        <button>Preview</button>
                    </Box>
                </Box>
                <Box className={style.sectionA2}>
                    <input type="url" placeholder='Enter image2 URL' ref={inpimage2} />
                    <Box className={style.previewBox}>
                        <button>Preview</button>
                    </Box>
                </Box>
            </Flex>
            <button type='submit' className={style.subButton}>Add Product</button>
        </form>

    </Box>
}