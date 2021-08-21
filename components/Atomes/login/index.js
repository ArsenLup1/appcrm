import React from 'react';
import Form from 'react-bootstrap/Form'
import LoginFormStc from './login.stc';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';


const LoginForm = () => {

    return ( 
    <Row className="mx-auto h-100 rounded">
        <div className='col-lg-12 align-middle d-flex justify-content-center pt-5 loginn'>
            <img src="/img/undraw_job.png" className="rounded thumbnail monlogo" alt="logo" width="300px" />
        </div>
        <div className="col-lg-12 align-middle d-flex justify-content-center sign-in">
            <h1 className='mt-5'>Sign in</h1>
        </div>
        <Form className="mb-3">
            <Form.Group className = "mb-3" controlId = "formBasicEmail" >
            <Form.Label >  </Form.Label> 
            <Form.Control type = "email" placeholder = "login" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remmeber password" />
            </Form.Group>
            <Button variant="primary" type="submit" href="/test">
                Sign up
            </Button>
        </Form>
        
    </Row>
    )
}

export default LoginForm;