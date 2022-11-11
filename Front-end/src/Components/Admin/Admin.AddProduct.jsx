import { 
    Box, Flex, Image, Select
 } from "@chakra-ui/react"
import style from './Admin.module.css'
export const AddProduct = () => {
    return <Box>
        
        <Box className={style.form}>
        <Flex className={style.sectionA} >
            <Box className={style.sectionA1}>
                <input type="text" placeholder='Enter Name of the product'/>
                <input type="text" placeholder="Enter Description"/>
                <Flex justify='space-between'>
                    <Select placeholder='Select Category' w='45%'>
                        <option value='option1'>Men</option>
                        <option value='option2'>Women</option>
                        <option value='option3'>Kids</option>
                    </Select>
                    <Select placeholder='Select SubCategory' w='45%'>
                        <option value='option1'>Footwear</option>
                        <option value='option2'>Upperwear</option>
                        <option value='option3'>Lowerwear</option>
                        <option value='option3'>Innerwear</option>
                        <option value='option3'>Jwellery</option>
                        <option value='option3'>Hats</option>
                        <option value='option3'>Tradition</option>
                        <option value='option3'>Fullbody</option>
                    </Select>
                </Flex>
                <Flex className={style.sectionAA1}>
                <label><input type="number" placeholder="Enter price"/> $</label>
                <label><input type="number" placeholder="Enter Discount"/> %</label>
                </Flex>
            </Box>
            <Box className={style.sectionA2}>
                <input type="url" placeholder='Enter image1 URL'/>
                <Box className={style.previewBox}>
                    <button>Preview</button>
                </Box>
            </Box>
            <Box className={style.sectionA2}>
                <input type="url" placeholder='Enter image1 URL'/>
                <Box className={style.previewBox}>
                <button>Preview</button>
                </Box>
            </Box>
        </Flex>
        <button type="submit">Add Product</button>
        </Box>

    </Box>
}