import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Destructured import

function Footer() {
  return (
    <footer className='mt-4'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p className='mb-1'>&copy; 2022 Lura Corp Ph | All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;