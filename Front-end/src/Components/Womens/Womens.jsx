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

} from "@chakra-ui/react"

export const Womens = () => {
    return (
        <Box bg="#FAFAFA">
            <Box
                h="100vh"
                bg=""
            >
                <Box bg='green.400' w='91%' h="10vh" margin="auto" p={4} color='white'>
                    <h1 className={style.heading}><a href=''>SINGLES'DAY:UP TO 90% OFF</a></h1>
                    <h1 className={style.h}><a href=''>ENDS 11/11</a></h1>
                </Box>

                <Box boxSize='full'>
                    <Image src='https://www.yoox.com/images/yoox80/banners/6824_2_XmasLaunch_WM_Main.jpg?634485886869569819#width=1380&height=637' alt='The Grand' className={style.photo} />
                </Box>
            </Box>
            <Box className={style.triImg}>
                <Flex color='white' className={style.wgrid}>

                    <Box boxSize='full'>
                        <Image src='https://www.yoox.com/images/yoox80/banners/6965_2_HL_DM_US.png?634485886869569819#width=430&height=600' alt='The Grand' className={style} />
                    </Box>

                    <Box boxSize='full'>
                        <Image src='https://www.yoox.com/images/yoox80/banners/6824_1_FocusOnJacket_W_HL.jpg?634485886869569819#width=430&height=600' alt='The Grand' className={style} />
                    </Box>

                </Flex>
                <Box className={style.cbox} bg='white' w='343.5px' h="553" p={4} color='black' margin="auto">
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

                <Flex color='white' className={style.wgrid}>

                    <Box boxSize='full'>

                        <Heading color="black"><a href=''>UP TO 70%,80%,&90% OFF</a></Heading>
                        <Heading size="sm" color='blackAlpha.500'><a href="">Ends November 30th</a></Heading>
                        <Button color="black" border="none">SHOP NOW</Button>

                    </Box>

                    <Box boxSize='full'>

                        <Heading color="black"><a href=''>COOL COATS</a></Heading>
                        <Heading size="sm" color='blackAlpha.500'><a href="">Puffer Jackets and more to keep you warm</a></Heading>
                        <Button color="black" border="none">SHOP NOW</Button>


                    </Box>

                </Flex>
            </Box>

            <Grid templateColumns='repeat(2, 1fr)' gap={6}>

                <Box w='350px' h='533.66' bg='' border="2px">

                <p>NEW ARRIVALS</p>
                <p>VIEW ALL</p>
                
                </Box>
                <Box w='1035px' h='533.66' bg='' border="2px">
                
                </Box>

            </Grid>

        </Box>




    )


}
