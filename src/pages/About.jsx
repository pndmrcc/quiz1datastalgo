import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <div>
      <h2 className='mb-4'>About PAYA ST COFFEE</h2>
      <Row>
        <Col md={6}>
          <p>
            PAYA ST COFFEE is a neighborhood coffee shop founded to bring responsibly sourced
            beans and a welcoming space to the community. We roast small batches and craft each
            drink with care. Our mission is to connect people over great coffee.
          </p>
          <p>
            We focus on sustainable sourcing, seasonal offerings, and supporting local artists and
            suppliers.
          </p>
        </Col>
        <Col md={6} className='text-center'>
          <Image src='/images/coffee-shop.jpg' rounded fluid alt='Coffee shop interior' />
        </Col>
      </Row>
    </div>
  );
}

export default About;
