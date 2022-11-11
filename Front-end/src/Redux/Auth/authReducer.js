import { getLocalStorage, setLocalStorage } from '../localStorage'
import {
    auth_signIn_error,
    auth_signIn_loading,
    auth_signIn_success,
    auth_signOut,
    auth_signUp_error,
    auth_signUp_loading,
    auth_signUp_success

} from './actionTypes'

const iniToken = getLocalStorage('token');
const iniType = getLocalStorage('typeWardRobe');

const initialData = {
    data:{
        isAuth:!!iniToken,
        token: iniToken,
        type: iniType,
    },
    loading:false,
    error:false,
    errorMessage:""
}
export const authReducer= (state=initialData, {type, payload}) => {
    switch(type){
        case auth_signIn_error:{
            return{
                ...state,
                data:{
                    isAuth:false,
                    token: null
                },
                error:true,
                loading:false,
                errorMessage:payload
            }
        }
        case auth_signIn_loading:{
            return{
                ...state,
                data:{
                    isAuth:false,
                    token: null
                },
                error:false,
                loading:true,
                errorMessage:""
            }
        }
        case auth_signIn_success:{
            setLocalStorage('token', payload.token)
            setLocalStorage('typeWardRobe', payload.type)
            return{
                ...state,
                data:{
                    isAuth:true,
                    token: payload.token,
                    type: payload.type
                },
                error:false,
                loading:false,
                errorMessage:""
            }
        }
        case auth_signUp_error:{
            return{
                ...state,
                data:{
                    isAuth:false,
                    token: null
                },
                error:true,
                loading:false,
                errorMessage:payload
            }
        }
        case auth_signUp_loading:{
            return{
                ...state,
                data:{
                    isAuth:false,
                    token: null
                },
                error:false,
                loading:true,
                errorMessage:""
            }
        }
        case auth_signUp_success:{
            setLocalStorage('token', payload.token)
            setLocalStorage('typeWardRobe', payload.type)
            return{
                ...state,
                data:{
                    isAuth:true,
                    token: payload.token,
                    type: "user"
                },
                error:false,
                loading:false,
                errorMessage:""
            }
        }
        case auth_signOut:{
            return{
                ...state,
                data:{
                    isAuth:false,
                    token: null,
                    type: null
                },
                error:false,
                loading:false
            }
        }
        default:{
            return state;
        }
    }
}