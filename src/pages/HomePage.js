import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Container>
        <Card>
          <div className="video1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NpEaa2P7qZI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <Card.Body>
            <Card.Text className="titulo">
              Apresentação e regras
            </Card.Text>
          </Card.Body>
          <div className="botões">
            <Link to={'/PageIncludeSinal'}>
              <Button variant="outline-primary">Enviar um termo</Button>
            </Link>
            <Link to={'/Biblioteca/'}>
              <Button variant="outline-secondary">Buscar por um termo</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default HomePage;