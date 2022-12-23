import style from './modal.module.css'
import { useState } from 'react';
export const EditProductModal = ({data, methods}) => {
    const {name, tags, category, price, image1, image2} = data;
    const {closeModal, update, setData} = methods

    const [type1, setType1] = useState(false)
    const [type2, setType2] = useState(false)
    const [type4, setType4] = useState(false)
    const [type5, setType5] = useState(false)
    const [type6, setType6] = useState(false)
    const [type7, setType7] = useState(false)
    const [type8, setType8] = useState(false)


    return <div className={style.modal}>
        <div className={style.body}>

            <button onClick={()=>{closeModal()}}>Close</button>

            <h2 className={style.modalHead}>Update Product Data</h2>

            <div>
                <input type="text"  value={name} onChange={(e)=>{
                    setData({...data, name:e.target.value})
                }}/>
                <input type="text"  value={tags} onChange={(e)=>{
                    setData({...data, tags:e.target.value})
                }}/>
                <input type="text"  value={category} onChange={(e)=>{
                    setData({...data, category:e.target.value})
                }}/>
                <input type="text"  value={price} onChange={(e)=>{
                    setData({...data, price:e.target.value})
                }}/>
                <input type="text"  value={image1} onChange={(e)=>{
                    setData({...data, image1:e.target.value})
                }}/>
                <input type="text"  value={image2} onChange={(e)=>{
                    setData({...data, image2:e.target.value})
                }}/>

                <button>Update</button>
                <button onClick={closeModal}>Discard</button>
            </div>




        </div>
    </div>
}