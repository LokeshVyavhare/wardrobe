import {
    Cart_Add_Items_Error,
    Cart_Add_Items_Loading,
    Cart_Add_Items_Success,
    Cart_Delete_Items_Error,
    Cart_Delete_Items_Loading,
    Cart_Delete_Items_Success,
    Cart_Get_Items_Error,
    Cart_Get_Items_Loading,
    Cart_Get_Items_Success,
    Cart_Update_Items_Error,
    Cart_Update_Items_Loading,
    Cart_Update_Items_Success
} from './actionTypes'

const initialData = {
    data:[],
    loading:false,
    error:false,
}
export const cartReducer= (state=initialData, action) => {
    switch(action.type){
        case Cart_Get_Items_Success:{
            return({
                ...state,
                data:action.payload,
                loading:false,
                error:false,
            })
        }
        case Cart_Get_Items_Error:{
            return({
                ...state,
                data:[],
                loading:false,
                error:true,
            })
        }
        case Cart_Get_Items_Loading:{
            return({
                ...state,
                data:[],
                loading:true,
                error:false,
            })
        }
        case Cart_Add_Items_Success:{
            return({
                ...state,
                data:[...state.data, action.payload],
                loading:false,
                error:false,
            })
        }
        case Cart_Add_Items_Error:{
            return({
                ...state,
                data:[],
                loading:false,
                error:true,
            })
        }
        case Cart_Add_Items_Loading:{
            return({
                ...state,
                data:[],
                loading:true,
                error:false,
            })
        }
        default:{
            return state
        }
    }
}