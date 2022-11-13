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
    Cart_Update_Items_Success,
    Cart_Empty_Items_Error,
    Cart_Empty_Items_Loading,
    Cart_Empty_Items_Success,

} from './actionTypes'

const initialData = {
    data:[],
    loading:false,
    error:false,
    getloading:false,
    geterror:false,
    count:0
}
export const cartReducer= (state=initialData, action) => {
    switch(action.type){
        case Cart_Get_Items_Success:{
            return({
                ...state,
                data:action.payload,
                getloading:false,
                geterror:false,
                count:action.payload.length
            })
        }
        case Cart_Get_Items_Error:{
            return({
                ...state,
                getloading:false,
                geterror:true,
            })
        }
        case Cart_Get_Items_Loading:{
            return({
                ...state,
                getloading:true,
                geterror:false,
            })
        }
        case Cart_Add_Items_Success:{
            return({
                ...state,
                data:[...state.data, action.payload],
                loading:false,
                error:false,
                count:state.count+1
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

            return({
                ...state,
                data:newDat,
                loading:false,
                error:false,
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
        case Cart_Delete_Items_Success:{
            const newData = state.data.filter((item)=>item._id !==action.payload)
            return({
                ...state,
                data:newData,
                loading:false,
                error:false,
                count:state.count-1
            })
        }
        case Cart_Delete_Items_Error:{
            return({
                ...state,
                loading:false,
                error:true,
            })
        }
        case Cart_Delete_Items_Loading:{
            return({
                ...state,
                loading:true,
                error:false,
            })
        }
        case Cart_Empty_Items_Success:{
            const newData = []
            return({
                ...state,
                data:newData,
                loading:false,
                error:false,
                count:0
            })
        }
        case Cart_Empty_Items_Error:{
            return({
                ...state,
                loading:false,
                error:true,
            })
        }
        case Cart_Empty_Items_Loading:{
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