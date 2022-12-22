import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Layout() {
  return (
    <div>
      <Navbar key={'lg'} bg="light" expand={'lg'} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">SOLVIA</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">Accueil</Nav.Link>
                  <Nav.Link href="/qui-sommes-nous">Qui sommes-nous ?</Nav.Link>
                  <NavDropdown
                    title="Nos solutions"
                    id={`offcanvasNavbarDropdown-expand-${'lg'}`}
                  >
                    <NavDropdown.Item href="/pac-air-eau">Pompe à chaleur Air/Eau</NavDropdown.Item>
                    <NavDropdown.Item href="/pac-air-air">
                    Pompe à chaleur Air/Air
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/calorifugeage">
                    Calorifugeage
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/isolation-exterieur">
                    Isolation Thermique Extèrieur
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/nos-realisations">Nos réalisations</Nav.Link>
                  <Nav.Link href="/aides">Aides</Nav.Link>
                  <Nav.Link href="/recrutement">Recrutement</Nav.Link>
                </Nav>
                <Nav className='d-flex'>
                    <Nav.Link href=''><FacebookIcon/></Nav.Link>
                    <Nav.Link href=''><InstagramIcon/></Nav.Link>
                    <Nav.Link href=''><LinkedInIcon/></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}

export default Layout