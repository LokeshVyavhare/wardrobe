import React from 'react'
import style from './Category.module.css'

const CategoryCard = ({src1, src2 , alt , name , description,price}) => {
  return (
    <div>
    <div style={{ margin: "5px"}}>
      <div>
        <img src={src1} alt={alt} width="180px" height="100px" onMouseEnter={(e)=>{e.target.src=src2}} onMouseLeave={(e)=>{e.target.src=src1}} />
      </div>
      <div>
        <div className={style.name}>{name}</div>
        <div className={style.desc}>{description}</div>
        <div><b>Price: </b>$ {price}</div>
      </div>
    </div>
    </div>
  )
}

export default CategoryCard