import style from './modal.module.css'
import { useState } from 'react';
export const EditProductModal = ({data, methods}) => {
    const {name, tags, category, price, image1, image2} = data;
    const {closeModal, update, setData} = methods


    return <div className={style.modal}>
        <div className={style.body}>

            {/* <button onClick={()=>{closeModal()}}>Close</button> */}

            <h2 className={style.modalHead}>Update Product Data</h2>

            <div className={style.form}>
                <label> Name: 
                <input type="text"  value={name} onChange={(e)=>{
                    setData({...data, name:e.target.value})
                }}/>
                </label>
                <label> Tag: 
                <input type="text"  value={tags} onChange={(e)=>{
                    setData({...data, tags:e.target.value})
                }}/>
                </label>
                <label> Category: 
                <input type="text"  value={category} onChange={(e)=>{
                    setData({...data, category:e.target.value})
                }}/>
                </label>
                <label> Price: 
                <input type="text"  value={price} onChange={(e)=>{
                    setData({...data, price:e.target.value})
                }}/>
                </label>
                <label> Image 1: 
                <input type="text"  value={image1} onChange={(e)=>{
                    setData({...data, image1:e.target.value})
                }}/>
                </label>
                <label> Image 2: 
                <input type="text"  value={image2} onChange={(e)=>{
                    setData({...data, image2:e.target.value})
                }}/>
                </label>

                <div className={style.buttonBox}>
                <button className={style.cancle} onClick={closeModal}>Discard</button>
                <button className={style.success} >Update</button>
                </div>
            </div>




        </div>
    </div>
}