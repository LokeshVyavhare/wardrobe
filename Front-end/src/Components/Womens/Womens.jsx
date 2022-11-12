import style from './Womens.module.css'

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
import Sliderr from "./Slider"
import Sliderr2 from "./Slider2"
const wlinkp = [
    {
        path: "", title: "HUGO", subtitle: "Express yourself", imgLink: "https://www.yoox.com/images/yoox80/banners/6825_1_Hugo_Tris_W.jpg?634485886869569819#width=473&height=660"
    },
    {
        path: "", title: "MONTBLANG", subtitle: "It's gifting season!", imgLink: "https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886869569819#width=473&height=660"
    },
    {
        path: "", title: "FURLA", subtitle: "FALL/WINTER 2022 COLLECTION", imgLink: "https://www.yoox.com/images/yoox80/banners/6825_5_Furla_W_Tris.jpg?634485886869569819#width=473&height=660"
    }
]



export const Womens = () => {
    return (
        <Box bg="#FAFAFA">
            <Box
                h="100vh"
                bg=""
            >
                <Box bg='green.400' w="91%" h="10vh" margin="auto" p={4} color='white' className={style.ofheading}>
                    <h1 className={style.heading}><a href=''>SINGLES'DAY:UP TO 90% OFF</a></h1>
                    <h1 className={style.h}><a href=''>ENDS 11/11</a></h1>
                </Box>

                <Box boxSize='full'>
                    <Image src='https://www.yoox.com/images/yoox80/banners/6824_2_XmasLaunch_WM_Main.jpg?634485886869569819#width=1380&height=637' alt='The Grand' className={style.photo} />
                    <Box w="400px" h="150px" className={style.wimgb12} bg="white">
                        <Heading fontFamily="monospace" p={2}>LIGHTS ON!</Heading>
                        <Heading size="sm" p={2} fontFamily="monospace" color="blackAlpha.600">Enter to find the perfect present</Heading>
                        <Box className={style.wshopb2} gap={6}>
                            <p><a href=''>LET THE SHOW BEGIN</a></p>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={style.triImg}>
                <Flex color='white' className={style.wgrid}
                direction={['column','column','row','row']}
                
                >

                    <Box boxSize='full'>
                        <Image src='https://www.yoox.com/images/yoox80/banners/6965_2_HL_DM_US.png?634485886869569819#width=430&height=600' alt='The Grand' className={style} />
                    </Box>

                    <Box boxSize='full'>
                        <Image src='https://www.yoox.com/images/yoox80/banners/6824_1_FocusOnJacket_W_HL.jpg?634485886869569819#width=430&height=600' alt='The Grand' className={style} />
                    </Box>

                </Flex>
                <Box className={style.cbox} bg='white' w='343.5px' h="553" p={4} color='black'>
                    <OrderedList className={style.listi}>
                        <ListItem className={style.f}><h3>DESIGNERS</h3></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>DOLCE & GABBANA</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>ROBERTO CAVALLI</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>MARNI</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>STELLA MCCARTNEY</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>MAISON MARGIELA</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>CHLOE</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>VERSACE</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>PRADA</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>JIL SANDER</h2></a></ListItem>
                        <ListItem className={style.listitem}><a href=''><h2>BALENCIAGA</h2></a></ListItem>
                        <ListItem className={style.l}><a href=''><p>VIEW ALL</p></a></ListItem>

                    </OrderedList>
                </Box>

                <Flex color='white' className={style.woffer}
                direction={['column','column','row','row']}
                >

                    <Box className={style.threeimgoffer}>

                        <Heading size="lg" color="black"><a href=''>UP TO 70%,80%,&90% OFF</a></Heading>
                        <Heading size="sm" color='blackAlpha.500'><a href="">Ends November 30th</a></Heading>
                        <Button className={style.bt} color="black" border="none">SHOP NOW</Button>

                    </Box>

                    <Box className={style.threeimgoffer2}>

                        <Heading size="lg" color="black" ><a href=''>COOL COATS</a></Heading>
                        <Heading size="sm" color='blackAlpha.500'><a href="">Puffer Jackets and more to keep you warm</a></Heading>
                        <Button className={style.bt} color="black" border="none">SHOP NOW</Button>


                    </Box>

                </Flex>
            </Box>
            <Box className={style.sl1}>
                <Grid templateColumns='repeat(2, 1fr)' gap={0}>

                    <Box className={style.sl11} w='350px' h='533.66'>
                        <Box className={style.sll1}  >
                            <p>NEW ARRIVALS</p>
                            <p><a href=''>VIEW ALL</a></p>
                        </Box>

                    </Box>
                    <Box w='1035px' h='533.66' bg='' className={style.sld}>
                        <Sliderr />
                    </Box>

                </Grid>
            </Box>

            {/*threeIMG SEction*/}
            <Box >
                <div className={style.mainP}>
                    {wlinkp.map((wlinkp) => (
                        <NavLink

                            className={({ isActive }) => {
                                return isActive ? style.ac : style.de;
                            }}
                            key={wlinkp.path}
                            to={wlinkp.path}
                            end
                        >

                            <img src={wlinkp.imgLink} alt="" />
                            <div style={{ backgroundColor: "", height: "35px" }}></div>
                            <div style={{ backgroundColor: "", height: "35px", color: "black", fontWeight: "bold" }}>
                                <p > {wlinkp.title}</p>
                            </div>
                            <div style={{ backgroundColor: "", height: "55px", color: "black" }}>
                                <p > {wlinkp.subtitle}</p>
                            </div>
                        </NavLink>

                    ))}

                </div>
            </Box>

            <Box className={style.sl1}>
                <Grid templateColumns='repeat(2, 1fr)' gap={0} className={style.suraj}>

                    <Box className={style.sl11} w='350px' h='533.66'>
                        <Box className={style.sll1}  >
                            <p>ONE OF KIND</p>
                            <p><a href=''>VIEW ALL</a></p>
                        </Box>

                    </Box>
                    <Box w='1035px' h='533.66' bg='' className={style.sld}>
                        <Sliderr2 />
                    </Box>

                </Grid>
            </Box>
            <Box boxSize='full' w="60%" className={style.g3img}>
                <Box h="90vh">
                    <Image src='https://www.yoox.com/images/yoox80/banners/6833_1_8byYoox_Special_WM.png?634485886869569819#width=930&height=660' alt='The Grand' />
                    <Box w="500px" h="150px" className={style.wimgb123} bg="white">
                        <Heading fontFamily="monospace" p={2}>8 BY YOOX</Heading>
                        <Heading size="sm" p={2} fontFamily="monospace" color="blackAlpha.600">Create your look with the FW 22-23 collection</Heading>
                        <Box className={style.wshopb22} gap={6}>
                            <p><a href=''>SHOP NOW</a></p>
                            <p><a href=''>GET INSPIRED</a></p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box boxSize="full" w="90%" margin="auto" className={style.limg} >
                <Grid templateColumns='repeat(2, 1fr)'>
                    <Box boxSize='full'>
                        <Image src='https://www.yoox.com/images/yoox80/banners/6769_1_DesignArtHomedecor_WM_Bottom.png?634485886869569819#width=690&height=637' alt='The Grand' />
                        <Box w="500px" h="150px" className={style.wimgb123f1} bg="white">
                            <h1 className={style.wsk123} p={2}>THERE'S NO PLACE LIKE HOME</h1>
                            <Heading size="sm" p={2} fontFamily="monospace" color="blackAlpha.600">Discover the new selection of interior design </Heading>
                            <Box className={style.wshopb22f1} gap={6}>
                                <p><a href=''>SHOP NOW</a></p>
                            </Box>
                        </Box>
                    </Box>
                    <Box boxSize='full'>
                        <Image src='https://www.yoox.com/images/yoox80/banners/6895_2_GenZ_W_Bottom.jpg?634485886869569819#width=690&height=637' alt='The Grand' />
                        <Box w="500px" h="150px" className={style.wimgb123f2} bg="white">
                            <h1 className={style.wsk123} p={2}>SMELLS LIKE TEEN SPIRIT</h1>
                            <Heading size="sm" p={2} fontFamily="monospace" color="blackAlpha.600">90's grunge and punk-rock details</Heading>
                            <Box className={style.wshopb22f2} gap={6}>
                                <p><a href=''>EXPLORE</a></p>
                                <p><a href=''>SHOP NOW</a></p>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Box>

        </Box>





    )


}
