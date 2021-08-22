import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarStc from './navbar.stc';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { FaPowerOff } from 'react-icons/fa';
import Link from 'next/link';



const Navb = () => {

    return ( 
            <NavbarStc>

                <Navbar expand="lg" className="w-100">
                    <Nav.Link href="/">
                        <div>
                            <img src="/img/Logo_CRM.png" className="rounded thumbnail" alt="logo" width="40px" />
                        </div>
                    </Nav.Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mx-auto my-2 my-lg-12"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="/test">Admin</Nav.Link>
                    <Nav.Link href="/rendezvous">Centre Professionel de Formation</Nav.Link>
                    <Nav.Link href="/rendezvous">Isolation</Nav.Link>
                    
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
                        <Link href="/">Log out</Link>
                    </div>
                    </Form>
                </Navbar.Collapse>
                </Navbar>

</NavbarStc>
        )
}

export default Navb;