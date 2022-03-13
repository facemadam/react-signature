import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlankAuth from '../layout/BlankAuth';
import { Card, Form, Button } from 'react-bootstrap';

function ForgotPass() {
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

    // send link
  };

  return (
    <BlankAuth>
      <Card className="shadow-lg">
        <Card.Body className="p-5">
          <Card.Title className="fs-3 fw-bold mb-4">Forgot Password</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={'test1234@resumer.com'}
                required
              />
            </Form.Group>
            <div className="d-grid mt-5">
              <Button variant="secondary" size="lg" type="submit">
                Send Link
              </Button>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer className="py-3 text-muted text-center">
          비밀번호를 기억하셨나요? <Link to="/signin">로그인</Link>
        </Card.Footer>
      </Card>
    </BlankAuth>
  );
}

export default ForgotPass;
