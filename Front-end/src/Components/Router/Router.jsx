import {Route, Routes} from 'react-router-dom'
import {Landing} from '../Landing/Landing'
import { Kids } from '../Kids/Kids';
import { Mens } from '../Mens/Men';
import { Womens } from '../Womens/Womens';
import { Login } from '../Registration/Login';
import { Register } from '../Registration/Register';


export const Router = () => {
    return <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
    </Routes>
}