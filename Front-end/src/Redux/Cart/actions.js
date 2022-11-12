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
    Empty_Cart
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

export const AddToCart = (token, productId, toaster,  quantity=1, delivered=false) => async (dispatch)=> {

    const {cartSuccess, cartFailure} = toaster
    dispatch({type:Cart_Add_Items_Loading});
    const id = token.split("-")[0];

    let data = {
        user:id,
        product:productId,
        quantity,
        delivered
    }

    try{

        let req =await  axios.post(`https://wardrobe-server.onrender.com/carts`,  data, {headers:{token:token}});
        dispatch({type:Cart_Add_Items_Success, payload:req.data});
        cartSuccess()

    }catch(err){
        dispatch({type:Cart_Add_Items_Error})
        cartFailure();
    }
}

export const updateCartItem = (token, cartId, quantity) => async (dispatch)=> {


    dispatch({type:Cart_Update_Items_Loading});
    const id = token.split("-")[0];

    let data = {
        quantity:quantity
    }

    try{
        let req =await axios.patch(`https://wardrobe-server.onrender.com/carts/${cartId}`, data, {headers:{token:token}});
        dispatch({type:Cart_Update_Items_Success, payload:{cartId, quantity}});

    }catch(err){
        dispatch({type:Cart_Update_Items_Error})
        alert(err.message)
    }
}

export const empty_Cart = () => {
    return {type: Empty_Cart}
}