import style from './Kids.module.css'
import {
    Box, Image, Flex, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Heading,
    Button,
    Grid,
    GridItem,
    Center,
} from "@chakra-ui/react"

import { NavLink } from 'react-router-dom'
import Skliderr from "./Kslider"
import Skliderr2 from "./Kslider2"
const mwlinkp = [
    {
        path: "", title: "SOFT & FUZZY", subtitle: "Comfert is key", imgLink: "https://www.yoox.com/images/yoox80/banners/6821_1_Newborn_Tris_K.png?634485886869569819#width=387&height=540"
    },
    {
        path: "", title: "LIVING IN DREAMLAND", subtitle: "Homeware & Toys", imgLink: "https://www.yoox.com/images/yoox80/banners/6821_1_TOYS_Tris_K.jpg?634485886869569819#width=473&height=660"
    },
    {
        path: "", title: "STELLA MCCARTNEY", subtitle: "Fun patterns and looks for Fw22", imgLink: "https://www.yoox.com/images/yoox80/banners/6821_7_StellaMcKids_Tris_K.jpg?634485886869569819#width=387&height=540"
    }
]

export const Kids = () => {
    return (
        <Box bg="#FAFAFA">
            <Box
                h="100vh"
                bg=""
            >
                <Box bg='pink.400' w='91%' h="10vh" margin="auto" p={4} color='white'>
                    <Heading className={style.kheading} size="sm"><a href=''>NEW REDUCTIONS:UP TO 65% OFF</a></Heading>
                    <p className={style.kh}>Tones of newly marked-down items</p>
                </Box>

                <Box boxSize='full'>
                    <Image src='https://www.yoox.com/images/yoox80/banners/6821_2_Christmas_Main_K.jpg?634485886869569819#width=1380&height=638' alt='The Grand' className={style.kphoto} />
                    <Box w="500px" h="150px" className={style.imgb1} bg="white">
                        <Heading fontFamily="monospace">THE GRAND & MARVELOUS HOLIDAY FAIR</Heading>
                        <Heading size="sm" fontFamily="monospace" color="blackAlpha.600">Fun finds for the little ones</Heading>
                        <Box className={style.shopb} gap={6}>
                            <p><a href=''>SHOP GIRLS</a></p>
                            <p><a href=''>SHOP BOYS</a></p>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={style.ksl1}>
                <Grid templateColumns='repeat(2, 1fr)' gap={0}>

                    <Box className={style.ksl11} w='350px' h='533.66'>
                        <Box className={style.ksll1}  >
                            <p>NEW ARRIVALS GIRLS</p>
                            <p><a href=''>VIEW ALL</a></p>
                        </Box>

                    </Box>
                    <Box w='1035px' h='533.66' bg='' className={style.ksld}>
                        <Skliderr />
                    </Box>

                </Grid>
            </Box>
            <Box className={style.ksl1}>
                <Grid templateColumns='repeat(2, 1fr)' gap={0}>

                    <Box className={style.ksl11} w='350px' h='533.66'>
                        <Box className={style.ksll1}  >
                            <p>NEW ARRIVALS BOYS</p>
                            <p><a href=''>VIEW ALL</a></p>
                        </Box>

                    </Box>
                    <Box w='1035px' h='533.66' bg='' className={style.ksld}>
                        <Skliderr2 />
                    </Box>

                </Grid>
            </Box>

            {/*threeIMG SEction*/}
            <Box >
                <div className={style.kmainP}>
                    {mwlinkp.map((mwlinkp) => (
                        <NavLink

                            className={({ isActive }) => {
                                return isActive ? style.kac : style.kde;
                            }}
                            key={mwlinkp.path}
                            to={mwlinkp.path}
                            end
                        >

                            <img src={mwlinkp.imgLink} alt="" />
                            <div style={{ backgroundColor: "", height: "35px" }}></div>
                            <div style={{ backgroundColor: "", height: "35px", color: "black", fontWeight: "bold" }}>
                                <p > {mwlinkp.title}</p>
                            </div>
                            <div style={{ backgroundColor: "", height: "55px", color: "black" }}>
                                <p > {mwlinkp.subtitle}</p>
                            </div>
                        </NavLink>

                    ))}

                </div>
            </Box>

            <Box boxSize="full" w="90%" margin="auto" className={style.klimg} >

                <Box boxSize='full'>
                    <Image src='https://www.yoox.com/images/yoox80/banners/6821_1_Cozy_Bottom_K.jpg?634485886869569819#width=1380&height=637' alt='The Grand' />

                    <Box w="420px" h="150px" className={style.imgb2} bg="white">
                        <Heading fontFamily="monospace">BUNDLES OF JOY</Heading>
                        <Heading size="sm" fontFamily="monospace" color="blackAlpha.600">All wrapped up and ready for anything</Heading>
                        <Box className={style.shopb1} gap={6}>
                            <p><a href=''>SHOP GIRLS</a></p>
                            <p><a href=''>SHOP BOYS</a></p>
                        </Box>
                    </Box>
                </Box>



            </Box>

        </Box>





    )


}