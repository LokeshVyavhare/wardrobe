import {
    Button,
    Box,
    Text,
    Heading,
    Select
} from "@chakra-ui/react"
import style from './Regi.module.css'
import { ImFacebook } from 'react-icons/im'
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { SignIn } from "../../Redux/Auth/actions"
import {useNavigate} from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


export const Login = () => {
    
    
    const toast = useToast();
    const email = useRef({ current: { value: null } });
    const password = useRef({ current: { value: null } });
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const nav = () => {
        console.log('vav')
       return navigator('/womens')
    }


    const login_success =  ()=>{
        toast({
            title: 'Logged In',
            description: "You are successfully logged in!",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

    }
    const wrong_password =  ()=>{
        toast({
            title: 'Wrong Password',
            description: "Password Didn't match Email",
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    }
    const wrong_email =  ()=>{
        toast({
            title: 'Wrong email',
            description: "No User With This Email",
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
        login_success,
        wrong_email,
        wrong_password,
        other,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            email: email.current.value,
            password: password.current.value,
        }
        dispatch(SignIn(obj, ()=>{e.target.reset()}, toaster, nav))

    }

    return (
        <div className={style.registerPage}>


            {/* banner */}
            <Box bg="#f3f3f3" p='35px' className={style.banner}>
                <Heading className={style.bannerTitle}>WardRobe</Heading>
                <Text className={style.bannerSubTitle}>Signin</Text>
                <Text className={style.bannertext}>Take advantage of a faster checkout and enjoy promotions for registered customers only</Text>
            </Box>




            {/* form */}

            <Box w={['95%', "80%", "50%", "40%", "35%"]} m='35px auto'>
                <form className={style.regiForm} onSubmit={handleSubmit}>


                    <input type="text" placeholder="Enter Email Address *" required ref={email} />
                    <input type="password" placeholder="Enter Password *" required ref={password} />

                    <button type="submit" className={style.subButton}>Login</button>

                    <Text className={style.title}>OR WITH</Text>

                {/* media */}
                <Box className={style.media}>
                    <Text className={style.bannerSubTitle}>SIGNIN WITH YOUR SOCIAL MEDIA ACCOUNT</Text>

                    <button className={style.fbButton}>
                        <ImFacebook className={style.Mediaimage} size={'25px'} />
                        <Text className={style.mediaButText}>Register With Facebook</Text>
                    </button>

                    <button className={style.googleButton}>
                        <img src="https://img.icons8.com/color/2x/google-logo.png" className={style.Mediaimage} />
                        <Text className={style.mediaButText}>Register With Google</Text>
                    </button>
                </Box>
                </form>
            </Box>
        </div>


    )
}