import React from 'react';
import Blank from '../layout/Blank';
import { Col } from 'react-bootstrap';

function NotFound() {
  return (
    <Blank>
      <Col xxl={8} xl={9} lg={10} md={11} className="text-center text-muted">
        <h1>404</h1>
        <h4>Page Not Found</h4>
        <p>찾고 있는 페이지가 존재하지 않거나 다른 오류가 발생했습니다.</p>
      </Col>
    </Blank>
  );
}

export default NotFound;
