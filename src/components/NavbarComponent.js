import React from 'react'
import { Navbar,Container, Button } from 'react-bootstrap';
import logo from '../logo.png';

function NavbarComponent() {
  return (
    <>
        <div class="container" >
            <div class="logo">
                <img src={logo} alt="" width="150"/>
            </div>
            <nav>
                <ul>
                    <li>CATEGORY</li>
                    <li>FAQs</li>
                    <li>MY CART</li>
                    <li><Button size='lg'>Login</Button></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default NavbarComponent