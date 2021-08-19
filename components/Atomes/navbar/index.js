import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarStc from './navbar.stc';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { FaPowerOff } from 'react-icons/fa';



const Navb = () => {

    return ( 
            <NavbarStc>

                <Navbar expand="lg" className="w-100">
                    <div>
                        <img src="/img/Logo_CRM.png" className="rounded thumbnail" alt="logo" width="40px" />
                    </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="/test">Admin</Nav.Link>
                    <Nav.Link href="#action2">Centre Professionel de Formation</Nav.Link>
                    <Nav.Link href="#action3">Isolation</Nav.Link>
                    
                    </Nav>
                    <Form className="d-flex">
                        <div className="px-2">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-4"
                        aria-label="Search"
                    />
                    </div>
                    <Button variant="outline-danger ml-2">Search</Button>
                    <div className="sidebar__logout">
                        <FaPowerOff className="ikons" />
                        <a href="#">Log out</a>
                    </div>
                    </Form>
                </Navbar.Collapse>
                </Navbar>

</NavbarStc>
        )
}

export default Navb;