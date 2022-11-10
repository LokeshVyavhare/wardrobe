import axios from "axios";
import { CATEGORY_ERROR, CATEGORY_LOADING, CATEGORY_SUCCESS } from "./actionTypes";

export const getCategory = () => async (dispatch) => {
    dispatch({type : CATEGORY_LOADING});
    try {
        let response = await axios.get("http://localhost:8100/products");
        dispatch({type:CATEGORY_SUCCESS , payload : response.data});
        console.log(response.data)
        return response.data;
    } catch (error) {
        dispatch({type: CATEGORY_ERROR , payload : error.message})
    }
}