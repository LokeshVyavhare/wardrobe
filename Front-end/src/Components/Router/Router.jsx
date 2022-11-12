import {Route, Routes} from 'react-router-dom'
import {Landing} from '../Landing/Landing'
import { Kids } from '../Kids/Kids';
import { Mens } from '../Mens/Men';
import { Womens } from '../Womens/Womens';
import { Login } from '../Registration/Login';
import { Register } from '../Registration/Register';
import { Cart } from '../Cart/cart';
import { Category } from '../Category_Product/Category';
import { Product } from '../Product/Product';
import { Admin } from '../Admin/Admin';
import { Checkout } from '../Cart/Checkout';


export const Router = () => {
    return <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        {/* <Route path='/cart/checkout' element={<Checkout/>}></Route> */}
        <Route path='/category/:category' element={<Category/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
}