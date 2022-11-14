import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import { getCategory } from '../../Redux/Category/actions';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import Filter from './Filter';
import styles from "./Category.module.css";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Loading } from "../Loading/Loading";

const Category = () => {
const {data, error , loading }= useSelector((store) => store.category);
const dispatch = useDispatch();
const { category } = useParams();

React.useEffect(() => {
    dispatch(getCategory(category))
}, []);

if(error){
  return <h1>...Error</h1>
}else if(loading){
  return <Loading />
}else

  return (
    <div>

      <div className={styles.topBanner}>
      <h1 className={styles.h1}>JIL SANDER</h1>
          <p className={styles.para}>The great standard-bearer of 90s minimalism, Jil Sander continues to please its followers with streamlined, modern styles: for women, that means sleek and masculine tailored separates anchored by cult-hit shoes; and for men, everything from suiting, to sneakers, to denim – all with a contemporary edge...
           View more</p>
      </div>

      <Wrapper>

       

        <WrapperFilter>
          <Filter />
       </WrapperFilter>

        <WrapperProducts>
         {
            data.map((el) => (
                
                <Link to={`/product/${el._id}`} key={el._id}>
               <CategoryCard
               key={el.id}
               src1={el.image1}
               src2={el.image2}
               name= {el.name}
               description = {el.description}
               price= {el.price}
               />
               </Link>
             
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
width : 300px;
margin-right: 30px
`;

const WrapperProducts = styled.div`
width : 100%;
display : grid;
grid-template-columns : repeat(auto-fit, minmax(200px,max-content));
justify-content : center;
grid-gap : 10px;
font-size : 15px
`;


export  {Category}