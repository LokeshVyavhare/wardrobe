import {
    Button,
    Box,
    Text,
    Heading,
    Select,
    Alert,
    AlertIcon

} from "@chakra-ui/react"
import style from './Regi.module.css'
import { ImFacebook } from 'react-icons/im'
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SignUp } from "../../Redux/Auth/actions";
import { useNavigate } from "react-router-dom"
import { useToast } from '@chakra-ui/react'

export const Register = () => {
    
    const toast = useToast();
    const name = useRef({current:{value:null}});
    const email = useRef({current:{value:null}});
    const password = useRef({current:{value:null}});
    const age = useRef({current:{value:null}});
    const gender = useRef({current:{value:null}});
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const [alert, setAlert] = useState(false);
    const nav = () => {
       return navigator('/womens')
    }

    const signup_Success =  ()=>{
        toast({
            title: 'Account Created',
            description: "You Have Successfully Created Account and Logged in!",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

    }
    const email_used =  ()=>{
        toast({
            title: 'Email Invalid',
            description: "Email is invalid or bind to another account, try different email.",
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    }
    
    const other =  (str)=>{
        toast({
            title: 'Error',
            description: `${str}`,
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    }
    const toaster = {
        signup_Success,
        email_used,
        other,
    }


    const handleSubmit =(e) => {
        e.preventDefault();
        let obj = {
            email:email.current.value,
            password:password.current.value,
            name:name.current.value,
            age:age.current.value,
            gender:gender.current.value
        }
        dispatch(SignUp(obj, ()=>{e.target.reset()},toaster, nav), setAlert)
        
    }
    return (
        <div className={style.registerPage}>

            {alert? 
            <Alert status='error'>
            <AlertIcon />
            There was an error processing your request
          </Alert>
            :""}


            {/* banner */}
            <Box bg="#f3f3f3" p='35px' className={style.banner}>
                <Heading className={style.bannerTitle}>WardRobe</Heading>
                <Text className={style.bannerSubTitle}>Registration</Text>
                <Text className={style.bannertext}>Take advantage of a faster checkout and enjoy promotions for registered customers only</Text>
            </Box>


            {/* media */}
            <Box className={style.media}>
                <Text className={style.bannerSubTitle}>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</Text>

                <button className={style.fbButton}>
                    <ImFacebook className={style.Mediaimage} size={'25px'} />
                    <Text className={style.mediaButText}>Register With Facebook</Text>
                </button>

                <button className={style.googleButton}>
                    <img src="https://img.icons8.com/color/2x/google-logo.png" className={style.Mediaimage} />
                    <Text className={style.mediaButText}>Register With Google</Text>
                </button>
            </Box>


            {/* form */}

            <Box w={['95%', "80%", "50%","40%", "35%"]} m='auto'>
                <form className={style.regiForm} onSubmit={handleSubmit}>

                    <Text className={style.title}>OR WITH YOUR EMAIL</Text>

                    <input type="text" placeholder="Enter Your Name *" required ref={name}/>
                    <input type="text" placeholder="Enter Email Address *" required ref={email}/>
                    <input type="password" placeholder="Enter Password *" required ref={password}/>
                    <input type="text" placeholder="Enter Age" ref={age}/>
                    <Select placeholder='Personalize Your Search' w='100' ref={gender}>
                        <option value='male'>Men</option>
                        <option value='female'>Women</option>
                    </Select>


                    <button type="submit" className={style.subButton}>Register</button>


                </form>
            </Box>
        </div>

    )
}