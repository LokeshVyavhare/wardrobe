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
export const SignIn = (data, next, toaster, nav) =>async (dispatch) => {
    dispatch({type:auth_signIn_loading});
    const {login_success, wrong_email, wrong_password, other} = toaster;
    try{
        let req = await axios.post('https://wardrobe-server.onrender.com/users/login', data)
        if(!req.data.error){
            dispatch({type:auth_signIn_success, payload:{token:req.data.token, type:req.data.type}});
            next();
            nav();
            login_success();
        }else{
            dispatch({type:auth_signIn_error, payload:req.data.message});
            if(req.data.message==='Wrong Passwod! Please try again.'){
                wrong_password();
            }else if(req.data.message==='No such user present/Invalid email'){
                wrong_email();
            }
            
        }
    }catch(err){
        dispatch({type:auth_signIn_error, payload:err});
        other(err.message)
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
http://localhost:8080/users/signup
*/
export const SignUp = (data, next, toaster, nav) =>async (dispatch) => {

    const {signup_Success, email_used, other,} =toaster;
    dispatch({type:auth_signUp_loading});
    try{        
        let req =await axios.post('https://wardrobe-server.onrender.com/users/signup', data)
        
        if(!req.data.error){
            dispatch({type:auth_signIn_success, payload:{token:req.data.token, type:req.data.type}})
            signup_Success();
            next();
            nav();
        }else{
            dispatch({type:auth_signUp_error, payload:req.data.message});
            if(req.data.message==='Email is already linked to another account.'){
                email_used();
            }else{
                other(req.data.message);
            }
        }
    }catch(err){
        dispatch({type:auth_signUp_error, payload:err});
        other(err.message);
    }
}

export const SignOut = () => {
    return {type:auth_signOut}
}