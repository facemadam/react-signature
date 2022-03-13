import { Container, Row } from 'react-bootstrap';

function Blank({ children }) {
  return (
    <Container>
      <Row className="vh-100 justify-content-sm-center align-items-center">
        {children}
      </Row>
    </Container>
  );
}

export default Blank;
