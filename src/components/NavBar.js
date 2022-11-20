import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/assets/sinalLibras.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          WikiLibras
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
