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
import {useSelector} from 'react-redux';


export const AddToCart = (id) => async (dispatch) => {
    const token = useSelector(store=>store.auth.data.token);

    dispatch({type:Cart_Add_Items_Loading})
    if(!token){

    }else{
        try{
            let req =await axios.post(`https://wardrobe-server.onrender.com/carts/`, {token})
            

        }catch(err){
            dispatch({type:Cart_Add_Items_Loading, payload:err})
        }
    }

}