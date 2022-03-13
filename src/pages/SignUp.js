import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlankAuth from '../layout/BlankAuth';
import { Card, Form, Button } from 'react-bootstrap';
import AuthUser from '../service/AuthUser';

function SignUp() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // form valid
    setValidated(true);
    const $form = event.currentTarget;
    if (!$form.checkValidity()) {
      return;
    }

    // create user
    AuthUser.createUser(
      event.target.name.value,
      event.target.email.value,
      event.target.password.value
    ).then(
      () => {
        navigate('/');
        window.location.reload();
      },
      (error) => {
        const resMessage =
          error.response && error.response.data && error.response.data.message;
        const errMessage = error.message || error.toString();
        alert(resMessage || errMessage);
        setValidated(false);
      }
    );
  };

  return (
    <>
      <BlankAuth>
        <Card className="shadow-lg">
          <Card.Body className="p-5">
            <Card.Title className="fs-3 fw-bold mb-4">Sign Up</Card.Title>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="text-muted">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  minLength={3}
                  maxLength={20}
                  required
                  defaultValue={'홍길동'}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-muted">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  defaultValue={'test1234@resumer.com'}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-muted">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  minLength={3}
                  maxLength={20}
                  required
                  defaultValue={'test1234'}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-muted">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password_confirm"
                  minLength={3}
                  maxLength={20}
                  required
                  defaultValue={'test1234'}
                />
              </Form.Group>
              <div className="d-grid mt-5">
                <Button variant="secondary" size="lg" type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
          </Card.Body>
          <Card.Footer className="py-3 text-muted text-center">
            이미 계정이 있으신가요? <Link to="/signin">로그인</Link>
          </Card.Footer>
        </Card>
      </BlankAuth>
    </>
  );
}

export default SignUp;
