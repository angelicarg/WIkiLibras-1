import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Libras from '../assets/sinalLibras.png';

function NavBar() {
  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <div className="navBar">
          <Navbar.Brand href="/">
            <div>
              <img
                alt=""
                src={Libras}
                width="70"
                height="70"
                className="d-inline-block align-top"
              />{' '}
            </div>
          </Navbar.Brand>
          <div>
            <br />
            <h1>WikiLibras</h1>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
