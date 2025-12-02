import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import menuData from '../data/menuData';

function Menu() {
  return (
    <div>
      <h2 className='mb-4'>Our Menu</h2>
      <p className='text-muted'>Seasonal roasts and handcrafted drinks made fresh to order.</p>
      <Row>
        {menuData.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4} className='mb-4'>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Menu;
