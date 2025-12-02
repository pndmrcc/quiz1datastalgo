import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ item }) {
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={item.image} alt={item.name} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className='text-muted'>{item.description}</Card.Text>
        <div className='mt-auto d-flex justify-content-between align-items-center'>
          <strong className='text-primary'>
            {item.priceMin && item.priceMax ? (
              `₱${item.priceMin} - ₱${item.priceMax}`
            ) : item.price ? (
              `₱${Number(item.price).toFixed(0)}`
            ) : null}
          </strong>
          <Button variant='outline-primary' size='sm'>Order</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
