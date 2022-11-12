import React from 'react'

const CategoryCard = ({src , alt , name , description,price}) => {
  return (
    <div>
    <div style={{ margin: "5px"}}>
      <div>
        <img src={src} alt={alt} width="180px" height="100px" />
      </div>
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div>${price}</div>
      </div>
    </div>
    </div>
  )
}

export default CategoryCard