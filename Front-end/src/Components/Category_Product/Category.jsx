import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import { getCategory } from '../../Redux/Category/actions';

const Category = () => {
const {data, error , loading }= useSelector((store) => store.category);
const dispatch = useDispatch();

React.useEffect(() => {
    dispatch(getCategory())
}, [])

  return (
    <div className='category'>
      
    </div>
  )
}

export  {Category}