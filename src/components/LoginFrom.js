import React, { useState } from "react";
import "./LoginForm.css";
import signpic from "../images/Signup.jpeg";
import { Form, Alert, Button, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>You got an error, details do not match!</Alert.Heading>
      </Alert>
    );
  }
  return (
    <Button variant="danger" onClick={() => setShow(true)}>
      Show Alert
    </Button>
  );
}

function LoginFrom({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <Router>
    <Container className="center">
      <Form className="form-comp" onSubmit={submitHandler}>
        {error != "" ? <AlertDismissibleExample /> : ""}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='center-label'>UserId</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter UserId"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
          <Form.Label className='center-label'>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='center-label'>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check for admin User" />
        </Form.Group> */}
        <div  className='center-label'>
        <Button variant="primary" value="LOGIN" type="submit">
          Login
        </Button>
        </div>
        {"     "}
        <Form.Label className='center-label'>Dont have any account
         <Link className="login-register" to='/'>&nbsp;Register</Link>
        
        </Form.Label>
      </Form>
    </Container>
    </Router>
  );
}

export default LoginFrom;
