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
                    <Select placeholder='Select option' w='45%'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select placeholder='Select option' w='45%'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
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
        <button type="submit"></button>
        </Box>

    </Box>
}