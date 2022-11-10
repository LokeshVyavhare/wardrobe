import { CATEGORY_ERROR, CATEGORY_LOADING, CATEGORY_SUCCESS } from "./actionTypes"

const initialData = {
    data:[],
    loading:false,
    error:false,
}
export const categoryReducer= (state=initialData, {type,payload}) => {
    switch(type){
        case CATEGORY_LOADING : {
            return {
                ...state,
                error : false,
                loading : true,
            }
        }
        case CATEGORY_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                data : payload,
            }
        }
        case CATEGORY_ERROR : {
            return {
                ...state,
                error : true,
                loading : false,
            }
        }
        default : return state
    }
    
}