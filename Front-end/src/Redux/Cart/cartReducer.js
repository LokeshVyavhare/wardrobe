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
    total:0
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
                loading:false,
                error:true,
            })
        }
        case Cart_Get_Items_Loading:{
            return({
                ...state,
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
                loading:false,
                error:true,
            })
        }
        case Cart_Add_Items_Loading:{
            return({
                ...state,
                loading:true,
                error:false,
            })
        }
        case Cart_Update_Items_Success:{
            let {cartId, quantity} = action.payload;
            let newDat = state.data.map((item=>{
                if(item._id===cartId){
                    item.quantity=quantity
                }
                return item;
            }))

            const newTotal1 = newDat.reduce((sum, item)=>sum+item.product.price);
            return({
                ...state,
                data:newDat,
                loading:false,
                error:false,
                total:newTotal1
            })
        }
        case Cart_Update_Items_Error:{
            return({
                ...state,
                loading:false,
                error:true,
            })
        }
        case Cart_Update_Items_Loading:{
            return({
                ...state,
                loading:true,
                error:false,
            })
        }
        default:{
            return state
        }
    }
}