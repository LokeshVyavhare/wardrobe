import {
    auth_signIn_error,
    auth_signIn_loading,
    auth_signIn_success,
    auth_signOut,
    auth_signUp_error,
    auth_signUp_loading,
    auth_signUp_success

} from './actionTypes'


/*
 data: {
    email: "email",
    password: "password"
} 
*/
export const SignIn = (data) =>async (dispatch) => {
    dispatch({type:auth_signIn_loading});
    try{
        dispatch({type:auth_signIn_success, payload:{token:"token", type:"user/admin"}})
    }catch(err){
        dispatch({type:auth_signIn_error});
    }
}

export const SignUp = (data) =>async (dispatch) => {
    dispatch({type:auth_signUp_loading});
    try{
        dispatch({type:auth_signUp_success, payload:"token"})
    }catch(err){
        dispatch({type:auth_signUp_error});
    }
}

export const SignOut = () => {
    return {type:auth_signOut}
}