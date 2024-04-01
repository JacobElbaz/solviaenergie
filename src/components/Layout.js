import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/logo-navbar.png'

function Layout() {
  const [navbarClass, setNavbarClass] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop === 0) {
        setNavbarClass('');
      } else {
        setNavbarClass('solid-navbar');
      }
    };

    // Ajoutez un gestionnaire d'événements pour détecter le défilement de la page
    window.addEventListener('scroll', handleScroll);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar className={navbarClass} key={'lg'} expand={'lg'} fixed="top" variant="light">
          <Container fluid>
            <Navbar.Brand href="/"><img src={logo} alt="logo solvia"  height={35} className="d-inline-block align-top" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} style={{ border: 'none' }} />
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
                    Isolation Thermique Extérieure
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/nos-realisations">Nos réalisations</Nav.Link>
                  <Nav.Link href="/notre-equipe">Notre équipe</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}

export default Layout