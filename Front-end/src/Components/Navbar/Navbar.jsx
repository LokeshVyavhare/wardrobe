import { NavLink } from "react-router-dom"
import './Navbar.module.css'

export const Navbar = () => {
    return <div className={'navbar'}>
        <NavLink to='/'>Home</NavLink>
    </div>
}