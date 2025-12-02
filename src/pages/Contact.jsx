import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <h2 className='mb-4'>Contact Us</h2>
      <p className='text-muted'>Reach out for wholesale, events, or general questions.</p>
      <Form>
        <Form.Group className='mb-3' controlId='contactName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Your name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='contactEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='contactMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={4} />
        </Form.Group>
        <Button variant='primary' type='submit'>Send Message</Button>
      </Form>
    </div>
  );
}

export default Contact;
