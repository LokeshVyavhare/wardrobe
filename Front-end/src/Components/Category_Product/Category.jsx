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
                <div key={el.id} className="card">

               <CategoryCard
               key={el.id}
               src={el.image1}
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
margin-top : 200px
`;

const WrapperFilter = styled.div`
width : 300px;
`;

const WrapperProducts = styled.div`
width : 100%;
display : grid;
grid-template-columns : repeat(auto-fit, minmax(200px,max-content));
justify-content : center;
grid-gap : 10px
`;


export  {Category}