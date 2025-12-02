import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import menuData from '../data/menuData';

function Home() {
  return (
    <div>
      <section className='py-5 text-center text-white hero-cta' style={{borderRadius: '8px'}}>
        <div className='container'>
          <h1 className='display-5 fw-bold'>PAYA ST COFFEE</h1>
          <p className='lead'>EVENTS - BAZAARS - POP UP</p>
          <p>
            <Button href='#menu' variant='light' className='me-2'>See Our Menu</Button>
            <Link to='/contact' className='btn btn-outline-light'>Contact Us</Link>
          </p>
        </div>
      </section>

      <section id='menu' className='py-5'>
        <h2 className='mb-4'>Featured Drinks</h2>
        <Row>
          {menuData.slice(0,3).map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} className='mb-4'>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </section>

      {/* Packages / Inclusions / Drinks section with reservation CTA */}
      <section className='py-5'>
        <h2 className='mb-4'>Events & Packages</h2>
        <Row className='mb-4'>
          <Col md={4} className='mb-3'>
            <div className='p-4 h-100 border rounded'>
              <h5 className='mb-2'>Package</h5>
              <p className='text-muted small'>Small gathering (up to 15 pax) — Includes setup and one barista.</p>
              <p className='fw-bold'>Starting at ₱4,999</p>
            </div>
          </Col>
          <Col md={4} className='mb-3'>
            <div className='p-4 h-100 border rounded'>
              <h5 className='mb-2'>Inclusions</h5>
              <ul className='mb-2 small'>
                <li>On-site barista</li>
                <li>Choice of 3 signature drinks</li>
                <li>Disposable cups & napkins</li>
              </ul>
              <p className='text-muted small'>Custom inclusions available on request.</p>
            </div>
          </Col>
          <Col md={4} className='mb-3'>
            <div className='p-4 h-100 border rounded'>
              <h5 className='mb-2'>Drinks</h5>
              <p className='small text-muted'>Paya Espresso, House Latte, Cold Brew, Seasonal Mocha, and pastries.</p>
              <p className='mb-0'><em>Ask about our specialty brew options.</em></p>
            </div>
          </Col>
        </Row>

        <div className='text-center'>
          <a href='/contact' className='btn btn-lg btn-primary'>Reserve Now</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
