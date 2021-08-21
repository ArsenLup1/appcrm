import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
/*import LoginFormStc from './login.stc';*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Row from 'react-bootstrap/Row';*/
import { Button, Row, Col, Label, ControlLabel, InputGroup, FloatingLabel, FormControl } from 'react-bootstrap';
/*import { FloatingLabel } from "react-bootstrap-floating-label";*/
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormRdvStc from './FormRdv.stc';
/*import { FormGroup, Input, FormText } from 'reactstrap';*/



function FormRdvFormation() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <FormRdvStc>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Nom"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Prenom"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-2">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Ville"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Adresse"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-1">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Code postale"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Téléphone 1"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Téléphone 2"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="email"
            placeholder="Email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <hr></hr>

    <div className="card-container">
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Numéro de dossier"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Nombre d'heures"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Formation"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Prix"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Numéro de sécurité sociale"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Solde"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-3">
      <Col className="lg-col-lg-4">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-custom-1">Création de compte</Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="3" active>
              Création de compte
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Oui</Dropdown.Item>
            <Dropdown.Item eventKey="2">Non</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      </Col>

      <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Solde"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      <Col className="md-4">
          
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-custom-1">Centre de formation</Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="3" active>
              Centre de formation
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">CPF CYPRES</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
          </Col>
        
  </Row>
    </div>

    <div>
      <Row>
        <Col className="md-12S">
          
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-custom-1">Centre de formation</Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="3" active>
              Centre de formation
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">CPF CYPRES</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
          </Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col >
          <span className="md-12 rappel">Date de rappel</span>
        </Col>
      </Row>
      </div>
{/*ici*/}
      <Row>
        <Col className="md-12">
      <Form.Group controlId="dob">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>
        </Col>
      </Row>


 
      <Row className="mb-12">
        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3} placeholder="Commentaire"/>
      </Form.Group>
          
        
      </Row>

      
      <Row>
        <Col className="md-col-12">
            <Button type="submit" className="rdv_btn">Rendez vous</Button>
        </Col>
      </Row>
      
    </Form>
    </FormRdvStc>
  );
}

export default   FormRdvFormation;