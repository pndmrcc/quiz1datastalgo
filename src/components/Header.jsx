import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header>
      <Navbar variant='dark' expand='lg' className='py-4' style={{minHeight: '96px'}}>
        <Container>
          <div className='d-flex w-100 justify-content-between align-items-center'>
            <LinkContainer to='/'>
              <Navbar.Brand className='fw-bold fs-2'>PAYA ST COFFEE</Navbar.Brand>
            </LinkContainer>

            <div className='d-flex align-items-center'>
              <LinkContainer to='/menu'>
                <Nav.Link className='btn btn-outline-light rounded btn-lg px-3 header-menu-button fs-5' aria-label='Open menu'>
                  <i className='fa fa-bars me-2' aria-hidden='true'></i>Menu
                </Nav.Link>
              </LinkContainer>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;