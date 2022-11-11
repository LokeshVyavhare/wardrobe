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
import axios from 'axios';


export const GetCartItems = (token) => async (dispatch)=> {
    dispatch({type:Cart_Get_Items_Loading});
    const id = token.split("-")[0];

    try{
        let req =await axios.get(`https://wardrobe-server.onrender.com/carts/${id}`, {headers:{token:token}});
        console.log(req.data)
        dispatch({type:Cart_Get_Items_Success, payload:req.data});

    }catch(err){
        dispatch({type:Cart_Get_Items_Error})
    }
}

export const AddToCart = (token, productId, quantity=1, delivered=false) => async (dispatch)=> {
    dispatch({type:Cart_Add_Items_Loading});
    const id = token.split("-")[0];

    let data = {
        user:id,
        product:productId,
        quantity,
        delivered
    }

    try{
        let req =await axios.post(`https://wardrobe-server.onrender.com/carts/${id}`, data, {headers:{token:token}});
        dispatch({type:Cart_Add_Items_Success, payload:req.data});

    }catch(err){
        dispatch({type:Cart_Add_Items_Error})
    }
}