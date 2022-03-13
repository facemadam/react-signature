import React from 'react';
import { Link } from 'react-router-dom';
import Blank from '../layout/Blank';
import { Col } from 'react-bootstrap';

function BlankAuth({ children }) {
  return (
    <Blank>
      <Col xxl={4} xl={5} lg={6} md={7}>
        {children}
      </Col>
    </Blank>
  );
}

export default BlankAuth;
