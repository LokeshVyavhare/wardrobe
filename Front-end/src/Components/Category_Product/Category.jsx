import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import { getCategory } from '../../Redux/Category/actions';
import styled from "styled-components";

const Category = () => {
const {data, error , loading }= useSelector((store) => store.category);
const dispatch = useDispatch();

React.useEffect(() => {
    dispatch(getCategory())
}, [])

  return (
    <div>
      <Wrapper>

        <WrapperFilter>

        </WrapperFilter>

        <WrapperProducts>
         {
            data.map((el) => (
                <div key={el.id}>
                 
                </div>
            ))
         }
        </WrapperProducts>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
border : 1px solid red;
display : flex;
height : auto;
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