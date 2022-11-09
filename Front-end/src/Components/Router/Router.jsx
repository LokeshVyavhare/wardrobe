import {Route, Routes} from 'react-router-dom'
import {Home} from '../../Pages/Home/Home';
import { Kids } from '../Kids/Kids';
import { Mens } from '../Mens/Men';
import { Womens } from '../Womens/Womens';


export const Router = () => {
    return <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
    </Routes>
}