import { React, useState } from 'react';
import Form from 'react-bootstrap/Form';
/*import LoginFormStc from './login.stc';*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Row from 'react-bootstrap/Row';*/
import { Button, Row, Col, Label, ControlLabel, InputGroup, FloatingLabel, FormControl } from 'react-bootstrap';
/*import { FloatingLabel } from "react-bootstrap-floating-label";*/
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormRdvIsoStc from './formIso.stc';
/*import { FormGroup, Input, FormText } from 'reactstrap';*/



function FormRdvIso() {
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
    <FormRdvIsoStc>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-1">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Control
                    required
                    type="text"
                    placeholder="Numéro fiscal *"
                />
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-1">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Control
                    required
                    type="text"
                    placeholder="Référence de l'avis *"
                />
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="xs-col-xs-8 pb-5 pt-2 mx-auto w-50">
        <Col className="md-col-10 mb-2">
            <Button type="submit" className="rdv_btn btn btn-danger">Valider</Button>
        </Col>
      </Row>

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

    <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Rue"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Date de naissance"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="email"
            placeholder="Code Postal"
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
            placeholder="Nombre d'avis d'imposition"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Nombre de personnes foyer fiscal"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Déclarent 1"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Réference de l'avis"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Revenu fiscal"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Col className="lg-col-lg-4">
            <div class="form-group">
                <select class="form-control" id="sel1">
                    <option>Maison</option>
                    <option>Plain pied</option>
                    <option>A étages</option>
                </select>
            </div>
      </Col>
    </Row>

    <Row className="mb-3">
      <Col className="lg-col-lg-4">
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle id="dropdown-custom-1">Chauffage</Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="3" active>
              Chauffage
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Electricité</Dropdown.Item>
            <Dropdown.Item eventKey="4">Fuel</Dropdown.Item>
            <Dropdown.Item eventKey="5">Gaz de ville</Dropdown.Item>
            <Dropdown.Item eventKey="6">Gaz prop but</Dropdown.Item>
            <Dropdown.Item eventKey="7">Bois</Dropdown.Item>
            <Dropdown.Item eventKey="8">PAC</Dropdown.Item>
            <Dropdown.Item eventKey="9">Geothérmie</Dropdown.Item>
            <Dropdown.Item eventKey="10">Autre</Dropdown.Item>
          
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
          <Dropdown.Toggle id="dropdown-custom-1">GPCI</Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="3" active>
              Precaire
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Grand Precaire</Dropdown.Item>
            <Dropdown.Item eventKey="4">Classique</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
          </Col>
        
  </Row>
    </div>

    <div>
      <Row className="xs-col-10 w-80 mb-2 mx-auto">
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">Isolation</Button>
        </Col>
          <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">Chaudiere</Button>
        </Col>
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">VMC</Button>
        </Col>
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">PAC</Button>
        </Col>
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">ITE</Button>
        </Col>
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">PAC 1€</Button>
        </Col>
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">Douche</Button>
        </Col>
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">Rénovation</Button>
        </Col>
        <Col className="md-col">
            <Button type="submit" className="rdv_btn btn btn-danger">CESI</Button>
        </Col>
      </Row>
    </div>

{/*ici*/}
      
      
      <Row>
        <Col className="md-col-12">
            <Button type="submit" className="rdv_btn btn btn-danger">Rendez vous</Button>
        </Col>
      </Row>
      
    </Form>
    </FormRdvIsoStc>
  );
}

export default   FormRdvIso;