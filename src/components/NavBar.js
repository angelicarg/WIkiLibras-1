import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Libras from '../assets/sinalLibras.png'

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={ Libras }
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
