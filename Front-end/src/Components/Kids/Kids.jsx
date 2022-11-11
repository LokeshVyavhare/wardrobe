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
        path: "", title: "LIVING IN DREAMLAND", subtitle: "Homeware & Toys", imgLink: "https://www.yoox.com/images/yoox80/banners/6821_1_TOYS_Tris_K.jpg?634485886869569819#width=473&height=660"
    },
    {
        path: "", title: "SOFT & FUZZY", subtitle: "Comfert is key", imgLink: "https://www.yoox.com/images/yoox80/banners/6821_1_Newborn_Tris_K.png?634485886869569819#width=387&height=540"
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
                    <h1 className={style.mheading}><a href=''>SINGLES'DAY:UP TO 90% OFF</a></h1>
                    <h1 className={style.mh}><a href=''>ENDS 11/11</a></h1>
                </Box>

                <Box boxSize='full'>
                    <Image src='https://www.yoox.com/images/yoox80/banners/6821_2_Christmas_Main_K.jpg?634485886869569819#width=1380&height=638' alt='The Grand' className={style.mphoto} />
                </Box>
            </Box>
            <Box className={style.msl1}>
                <Grid templateColumns='repeat(2, 1fr)' gap={0}>

                    <Box className={style.msl11} w='350px' h='533.66'>
                        <Box className={style.msll1}  >
                            <p>NEW ARRIVALS</p>
                            <p><a href=''>VIEW ALL</a></p>
                        </Box>

                    </Box>
                    <Box w='1035px' h='533.66' bg='' className={style.msld}>
                        <Skliderr />
                    </Box>

                </Grid>
            </Box>
            <Box className={style.msl1}>
                <Grid templateColumns='repeat(2, 1fr)' gap={0}>

                    <Box className={style.msl11} w='350px' h='533.66'>
                        <Box className={style.msll1}  >
                            <p>ONE OF KIND</p>
                            <p><a href=''>VIEW ALL</a></p>
                        </Box>

                    </Box>
                    <Box w='1035px' h='533.66' bg='' className={style.msld}>
                        <Skliderr2 />
                    </Box>

                </Grid>
            </Box>

            {/*threeIMG SEction*/}
            <Box >
                <div className={style.mmainP}>
                    {mwlinkp.map((mwlinkp) => (
                        <NavLink

                            className={({ isActive }) => {
                                return isActive ? style.mac : style.mde;
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

            <Box boxSize="full" w="90%" margin="auto" className={style.mlimg} >
                
                    <Box boxSize='full'>
                        <Image src='https://www.yoox.com/images/yoox80/banners/6821_1_Cozy_Bottom_K.jpg?634485886869569819#width=1380&height=637' alt='The Grand' />
                    </Box>
                   
                

            </Box>

        </Box>





    )


}
