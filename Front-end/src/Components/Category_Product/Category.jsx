import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import { getCategory } from '../../Redux/Category/actions';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import Filter from './Filter';

const Category = () => {
const {data, error , loading }= useSelector((store) => store.category);
const dispatch = useDispatch();

React.useEffect(() => {
    dispatch(getCategory())
}, []);

if(error){
  return <h1>...Error</h1>
}else if(loading){
  return <h1>...Loading</h1>
}else

  return (
    <div>
      <Wrapper>

        <WrapperFilter>

         <Filter />



        </WrapperFilter>

        <WrapperProducts>
         {
            data.map((el) => (
                <div key={el.id}>

               <CategoryCard
               key={el.id}
               src={el.image2}
               name= {el.name}
               description = {el.description}
               price= {el.prize}
               />
               </div>





            ))
         }
        </WrapperProducts>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`

display : flex;
height : auto;
width : 70%;
margin : auto;
`;

const WrapperFilter = styled.div`
width : 200px;
border : 1px solid black;
`;

const WrapperProducts = styled.div`
width : 100%;
border: 1px solid blue;

display : grid;
grid-template-columns : repeat(auto-fit, minmax(200px,max-content));
justify-content : center;
grid-gap : 10px
`;

export  {Category}