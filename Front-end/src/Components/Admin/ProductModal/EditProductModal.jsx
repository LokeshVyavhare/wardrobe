import style from './modal.module.css'
import { useState } from 'react';
export const EditProductModal = ({data, methods}) => {
    const {name, tags, category, price, image1, image2} = data;
    const {closeModal, update} = methods

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

            </div>




        </div>
    </div>
}