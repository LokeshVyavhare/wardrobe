import { Box, Button, Flex, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Stack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MiddleSection.module.css'
import { Search2Icon } from '@chakra-ui/icons'
import { BsHeart, BsBagPlus } from "react-icons/bs"


const links = [


    { path: "/womens", title: "WOMEN", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_24_splash_W.jpg?634485886601286852" },
    { path: "/mens", title: "MENS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_23_splash_M.jpg?634485886601286852" },
    { path: "/kids", title: "KIDS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_18_splash_K.jpg?634485886601286852" },
    { path: "/design", title: "DESIGN+ART", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_16_splash_D.jpg?634485886601286852" }
];

const MiddleSection = () => {
    return (
        <div style={{ height: "65px", width: "80%", display: "flex", justifyContent: "space-around", overflow: "hidden", position: "fixed", marginLeft: "10%", backgroundColor: "white" }}>
            <Box  w="35%">
                <Stack>
                    <div className={styles.mainPages}>
                        {links.map((link) => (
                            <NavLink

                                className={({ isActive }) => {
                                    return isActive ? styles.active : styles.default;
                                }}
                                key={link.path}
                                to={link.path}
                                end
                            >

                                <Button colorScheme='gray' variant='ghost' color="black" size='sm' >
                                    {link.title}
                                </Button>

                            </NavLink>

                        ))}




                    </div>

                </Stack>

            </Box>
            <Box  w="30%" >
                <Box className={styles.middlelogo}>
                    <img src="https://i.postimg.cc/0Nzmz4DK/logo-wrdrb.png" alt="" />

                </Box>

            </Box>

            <Box  w="30%" >
                <Box  w="70%" justifyContent="space-around" display="flex" margin="auto">
                    {/* <Stack>
                    <Popover>
                        <PopoverTrigger>

                            <Search2Icon w="30px" h="23px" color="black" marginTop="15px" cursor="pointer" />
                        </PopoverTrigger>
                        <PopoverContent w="430px"  height="70px">
                            <PopoverArrow  />
                           
                            <PopoverHeader  >
                                <Box display="flex" gap="8px">
                                    <Input w="350px" placeholder="Search News" h="50px" bg="white" fontSize="22px" />
                                    <Button marginTop="4px">Search</Button>
                                </Box>

                            </PopoverHeader>


                        </PopoverContent>
                    </Popover>
                </Stack> */}

                    <Popover>
                        <PopoverTrigger>
                            <Search2Icon w="30px" h="23px" color="black" marginTop="15px" cursor="pointer" />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent w="430px" height="70px">
                                <PopoverArrow />

                                <PopoverHeader  >
                                    <Box display="flex" gap="8px">
                                        <Input variant='filled' w="350px" placeholder="Search Products" h="50px" bg="white" fontSize="22px" />
                                        <Button marginTop="4px" colorScheme='blue'>Search</Button>
                                    </Box>

                                </PopoverHeader>


                            </PopoverContent>
                        </Portal>
                    </Popover>

                    <Box>
                        <BsHeart style={{ height: "35px", width: "75%", marginTop: "10px" }} />
                    </Box>

                    <Box>
                        <NavLink to="/cart">
                            <BsBagPlus style={{ height: "35px", width: "75%", marginTop: "10px" }} />
                        </NavLink>
                    </Box>

                </Box>




            </Box>


        </div>
    )
}

export default MiddleSection