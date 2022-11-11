import {
    auth_signIn_error,
    auth_signIn_loading,
    auth_signIn_success,
    auth_signOut,
    auth_signUp_error,
    auth_signUp_loading,
    auth_signUp_success

} from './actionTypes'
import axios from 'axios'


/*
 data: {
    email: "email",
    password: "password"
} 
*/
export const SignIn = (data) =>async (dispatch) => {
    dispatch({type:auth_signIn_loading});
    try{
        let req = axios.post('https://wardrobe-server.onrender.com/users/signup')
        if(!req.data.error){
            dispatch({type:auth_signIn_success, payload:{token:req.data.token, type:"customer"}})
        }else{
            dispatch({type:auth_signIn_error, payload:req.data.message});
        }
    }catch(err){
        dispatch({type:auth_signIn_error, payload:err});
    }
}


/*
{
    email:string, *
    password:string, *
    name:string, *
    age:number,
    gender:"male" or "female",
}
*/
export const SignUp = (data) =>async (dispatch) => {

    data.type="cutomer",
    dispatch({type:auth_signUp_loading});
    try{        
        let req = axios.post('https://wardrobe-server.onrender.com/users/signup')
        if(!req.data.error){
            dispatch({type:auth_signIn_success, payload:{token:req.data.token, type:"customer"}})
        }else{
            dispatch({type:auth_signIn_error, payload:req.data.message});
        }
    }catch(err){
        dispatch({type:auth_signUp_error});
    }
}

export const SignOut = () => {
    return {type:auth_signOut}
}