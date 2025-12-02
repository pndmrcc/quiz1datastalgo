import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import teamData from '../data/teamData';

function Team() {
  return (
    <div>
      <h2 className='mb-4'>Meet The Team</h2>
      <Row>
        {teamData.map(member => (
          <Col key={member.id} sm={12} md={6} lg={4} className='mb-4'>
            <Card>
              <Card.Img variant='top' src={member.photo} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text className='text-muted'>{member.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Team;
