import {
    auth_signIn_error,
    auth_signIn_loading,
    auth_signIn_success,
    auth_signOut,
    auth_signUp_error,
    auth_signUp_loading,
    auth_signUp_success

} from './actionTypes'

const initialData = {
    data:{
        isAuth:false,
        token: null,
        type: null,
    },
    loading:false,
    error:false,
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
                loading:false
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
                loading:true
            }
        }
        case auth_signIn_success:{
            return{
                ...state,
                data:{
                    isAuth:true,
                    token: payload.token,
                    type: payload.type
                },
                error:false,
                loading:false
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
                loading:false
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
                loading:true
            }
        }
        case auth_signUp_success:{
            return{
                ...state,
                data:{
                    isAuth:true,
                    token: payload.token,
                    type: "user"
                },
                error:false,
                loading:false
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