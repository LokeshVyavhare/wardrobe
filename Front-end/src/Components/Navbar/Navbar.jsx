//import { Box } from "@chakra-ui/react"

import './Navbar.module.css'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Portal,
    PopoverArrow,
    PopoverHeader,
    Input
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { Select, textDecoration } from '@chakra-ui/react'
import { Register } from '../Registration/Register'
import { Login } from '../Registration/Login'
import { NavLink } from 'react-router-dom'
import styles from '../Landing/MiddleSection.module.css'
import style from './Navbar.module.css'
import { Search2Icon } from '@chakra-ui/icons'
import { BsHeart, BsBagPlus } from "react-icons/bs"
import { BiLock } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { auth_signOut } from '../../Redux/Auth/actionTypes'
import { AiFillLock, AiFillUnlock, AiOutlineShoppingCart,  } from 'react-icons/ai'
import { BsPen} from 'react-icons/bs'
import {FiSearch } from 'react-icons/fi'
import { AiOutlineShop } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri'

const links = [


    { path: "/womens", title: "WOMEN", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_24_splash_W.jpg?634485886601286852" },
    { path: "/mens", title: "MENS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_23_splash_M.jpg?634485886601286852" },
    { path: "/kids", title: "KIDS", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_18_splash_K.jpg?634485886601286852" },
    { path: "/design", title: "DESIGN+ART", imgLink: "https://www.yoox.com/images/yoox80/banners/5569_16_splash_D.jpg?634485886601286852" }
];



export const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    const isAuth = useSelector(store => store.auth.data.isAuth)
    const Usertype = useSelector(store => store.auth.data.type)
    const dispatch = useDispatch();



    return (
        <Box position='sticky' top={0} zIndex='10'>
            <div style={{  width: "100%", top: "0", backgroundColor: "white", zIndex: "100" }}>

                
                <Flex className={style.upNav} w={['100%','95%','80%']} justify='space-between' p={['5px 15px','5px 20px','5px 40px']} m='auto' borderBottom='1px solid grey' >
                    <Flex className={style.upNav1} display={['none', 'flex','flex']}>
                        <Box className={style.upNav1Tab1}>
                            <Text>Country</Text>
                            <RiArrowDropDownFill size='25px'/>

                        </Box>
                        <Box className={style.upNav1Tab1}><Text>Customer Care</Text></Box>
                    </Flex>
                    <Flex className={style.upNav2} display={['flex']}>
                        <Box className={style.upNav2Tab1}>
                            {!isAuth ?
                                <BsPen ml='5px' />
                                : Usertype === 'seller' ?
                                    <AiOutlineShop ml='5px' />
                                    : <FaUserAlt ml='5px' />

                            }
                            {isAuth ? ""
                                : <NavLink to="/register"><Text>Register</Text></NavLink>
                            }
                            {isAuth && Usertype === 'seller' ?
                                <NavLink to="/admin"><Text>Seller</Text></NavLink>
                                : Usertype === 'customer' ?
                                    <Text>Customer</Text>
                                    : ""
                            }
                        </Box>
                        <Box className={style.upNav2Tab1}>

                            {isAuth ? <AiFillLock /> : <AiFillUnlock />}
                            {isAuth ?
                                <Text onClick={() => { dispatch({ type: auth_signOut }) }}>Logout</Text>
                                : <NavLink to="/login"><Text>Login</Text></NavLink>
                            }
                        </Box>
                    </Flex >
                </Flex>



                {/* middle start */}
                <Flex className={style.midNav} w={['100%','95%','80%']} p={['15px 15px','15px 20px','15px 40px']} m='auto'>
                    <Flex>
                        <NavLink to='/womens'><Text>Women</Text></NavLink>
                        <NavLink to='/mens'><Text>Men</Text></NavLink>
                        <NavLink to='/kids'><Text>kids</Text></NavLink>
                    </Flex>
                    <Flex>
                        <Image src='https://i.postimg.cc/0Nzmz4DK/logo-wrdrb.png' width='100px'/>
                    </Flex>
                    <Flex>
                        <Box>
                        <Popover>
                                    <PopoverTrigger>
                                        <FiSearch/>
                                    </PopoverTrigger>
                                    <Portal left='300px'>
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
                        </Box>
                        <Box>
                            <BsHeart/>
                        </Box>
                        <Box>
                            <AiOutlineShoppingCart/>
                        </Box>
                    </Flex>
                </Flex>







                {/* black nav */}


                <Box>

                    <Flex



                        bg={useColorModeValue('#333', 'gray.800')}
                        color={useColorModeValue('gray.600', 'white')}
                        minH={'60px'}
                        py={{ base: 2 }}
                        px={{ base: 4 }}
                        borderBottom={1}
                        borderStyle={'solid'}
                        borderColor={useColorModeValue('gray.200', 'gray.900')}
                        align={'center'}>
                        <Flex
                            flex={{ base: 1, md: 'auto' }}
                            ml={{ base: -2 }}
                            display={{ base: 'flex', md: 'none' }}>
                            <IconButton
                                onClick={onToggle}
                                icon={
                                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                                }
                                variant={'ghost'}
                                aria-label={'Toggle Navigation'}
                            />
                        </Flex>
                        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                            <Text
                                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                fontFamily={'heading'}
                                color={useColorModeValue('white', 'white')}>
                                <Box >
                                    <img width="60px" style={{ borderRadius: "10px" }} src="https://i.postimg.cc/0Nzmz4DK/logo-wrdrb.png" alt="Logo" />

                                </Box>


                            </Text>

                            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                                <DesktopNav />
                            </Flex>
                        </Flex>

                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>
                            {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button> */}
                            {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button> */}
                        </Stack>
                    </Flex>

                    <Collapse in={isOpen} animateOpacity>
                        <MobileNav />
                    </Collapse>
                </Box>
            </div>
        </Box>

    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('green', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (

        <Stack direction={'row'} spacing={2} marginLeft="105px" marginTop="8px" >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,

                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};



interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}
/*
<option value='footwear'>Footwear</option>
                            <option value='upperwear'>Upperwear</option>
                            <option value='lowerwear'>Lowerwear</option>
                            <option value='innerwear'>Innerwear</option>
                            <option value='jwellery'>Jwellery</option>
                            <option value='hats'>Hats</option>
                            <option value='tradition'>Tradition</option>
                            <option value='fullbody'>Fullbody</option>
 */

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'FOOTWERE',
        children: [
            {
                label: 'footwere',
                subLabel: 'Trending CLOTHING',
                href: `/category/footwear`,
            },
            {
                label: 'New & footwere ',
                subLabel: 'Up-and-coming Designers',
                href: `/category/footwear`,
            },
        ],
    },
    {
        label: 'UPPERWEAR',
        children: [
            {
                label: 'Upperwere',
                subLabel: 'New bangles',
                href: "/category/upperwear",
            },
            {
                label: 'Bottege veneta',
                subLabel: 'An exclusive ',
                href: '/category/upperwear',
            },
        ],
    },
    {
        label: 'LOWERWERE',
        children: [
            {
                label: 'Lower',
                subLabel: 'Find your dream lower',
                href: "/category/lowerwere",
            },
            {
                label: 'Dresses',
                subLabel: 'An exclusive list ',
                href: '/category/lowerwere',
            },
        ],
    },
    {
        label: 'INNERWERE',
        children: [
            {
                label: 'Innerwere',
                subLabel: 'Find your dream Innerwere',
                href: "/category/innerwere",
            },
            {
                label: 'Boots of inners',
                subLabel: 'An exclusive list for boot work',
                href: '/category/innerwere',
            },
        ],
    },
    {
        label: 'JWELLERY',
        children: [
            {
                label: 'Jwellery',
                subLabel: 'Find your dream design Jwellery',
                href: "/category/jwellery",
            },
            {
                label: 'Best Jewelery',
                subLabel: 'List of Jewelery',
                href: '/category/jwellery',
            },
        ],
    },
    {
        label: 'HATS',
        children: [
            {
                label: 'Hats',
                subLabel: 'Find your dream design hats',
                href: "/category/hats",
            },
            {
                label: 'Hats of Projects',
                subLabel: 'An exclusive list hats',
                href: '/category/hats',
            },
        ],
    },
    {
        label: 'TRADITION',
        children: [
            {
                label: 'Tradition',
                subLabel: 'Find Your Traditional ',
                href: "/category/tradition",
            },
            {
                label: 'Projects boots',
                subLabel: 'contract work projects',
                href: '/category/tradition',
            },
        ],
    },
    {
        label: 'FULLBODY',
        children: [
            {
                label: 'Fullbody were',
                subLabel: 'Collection of FullBody',
                href: "/category/fullbody",
            },
            {
                label: 'Montblanc',
                subLabel: 'Work Montblace',
                href: '/category/fullbody',
            },
        ],
    },
    {
        label: 'BEST DEAL',
        children: [
            {
                label: 'Clothes',
                subLabel: 'Find your dream Clothes',
                href: "#",
            },
            {
                label: 'Accessories',
                subLabel: 'An exclusive list for Accessories',
                href: '#',
            },
        ],
    },
    {
        label: 'GIFT GUIDE',
        children: [
            {
                label: 'Best Gift',
                subLabel: 'we will give gift',
                href: "/gift",
            },
            {
                label: 'Guid',
                subLabel: 'An exclusive Guid',
                href: '#',
            },
        ],
    },
];