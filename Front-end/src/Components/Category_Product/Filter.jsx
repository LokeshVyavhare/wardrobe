import React from 'react';
import {Box,Stack,Button,VStack,StackDivider,Text, Image} from "@chakra-ui/react"

const Filter = () => {
  return (
    <VStack
    divider={<StackDivider borderColor='gray.200' />}
    spacing={4}
    align='stretch'
  >
    <Image src='https://www.yoox.com/images/yoox80/banners/5351_1_CalvinKlein_TY_EU.jpg?634485886869569819' />
    <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">CATEGORIES</Text>
    <Text fontSize="25px">+</Text>
    </Box>

    <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">HEEL HEIGHT</Text>
    <Text fontSize="25px">+</Text>
    </Box>

     <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">TOE SHAPE</Text>
    <Text fontSize="25px">+</Text>
    </Box>

     <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">DETAILS</Text>
    <Text fontSize="25px">+</Text>
    </Box>

     <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">DESIGNERS</Text>
    <Text fontSize="25px">+</Text>
    </Box>

   <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">PRICE RANGE</Text>
    <Text fontSize="25px">+</Text>
    </Box>

    <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">COLORS</Text>
    <Text fontSize="25px">+</Text>
    </Box>

    <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">SIZES</Text>
    <Text fontSize="25px">+</Text>
    </Box>

    <Box h='40px' bg='gray.200'  display="flex" alignItems="center" justifyContent="space-between">
    <Text fontSize="15px">PRINT</Text>
    <Text fontSize="25px">+</Text>
    </Box>

    <Image src='https://www.yoox.com/images/yoox80/banners/6965_2_teleyoox_DM_US.png?634485886869569819' alt='singles day' />
  </VStack>
  )
}

export default Filter