import React, {useState} from 'react'
import { Nav, NavMenu, NavLink, NavButton } from "./Navbar.styled"

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false)

    return (
        <div>
            {/* Import head here later like in NextJS */}
            <Nav>
                <NavButton type="button" onClick={() => setisOpen(!isOpen)}>
                    <i className="fas fa-bars"></i>
                </NavButton>
                <p>Invoice</p>

                <NavMenu isOpen={isOpen}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/signUp">SignUp</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}
