import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlankAuth from '../layout/BlankAuth';
import { Card, Form, Button } from 'react-bootstrap';
import AuthUser from '../service/AuthUser';

function SignIn() {
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

    // create token
    AuthUser.createUserAuthTokenJwt(
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
    <BlankAuth>
      <Card className="shadow-lg">
        <Card.Body className="p-5">
          <Card.Title className="fs-3 fw-bold mb-4">Sign In</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              <Form.Text className="float-end">
                <Link to="/forgotpass">비밀번호를 잊으셨나요?</Link>
              </Form.Text>
              <Form.Control
                type="password"
                name="password"
                required
                defaultValue={'test1234'}
              />
            </Form.Group>
            <div className="d-grid mt-5">
              <Button variant="secondary" size="lg" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer className="py-3 text-muted text-center">
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </Card.Footer>
      </Card>
    </BlankAuth>
  );
}

export default SignIn;
