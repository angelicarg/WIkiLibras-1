import { Container, Button, Card, Row, Col } from 'react-bootstrap';
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
              src="https://www.youtube.com/embed/oqBlam1dLy4?playlist=oqBlam1dLy4&loop=1;rel=0&autoplay=1&controls=0&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <Card.Body>
            <Card.Text className="titulo">
              Olá! Sejam bem-vindos a WikiLibras
            </Card.Text>
          </Card.Body>
          <Row>
            <Col>
              <h5>
                Esse é um site interativo que busca compartilhar termos em
                Libras e em Português. Qualquer pessoa, em qualquer lugar do
                país pode inserir um novo termo e ajudar a alimentar nossa
                biblioteca.
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <h6>
                Para incluir um novo sinal na biblioteca basta gravar um vídeo
                com o termo desejado, outro vídeo com o conceito, salva os dois
                vídeos no YouTube e usa a url dos vídeos para cadastrar o termo
                clicando no link abaixo.
              </h6>
            </Col>
            <Col>
              <br />
              <h6>
                Para iniciar sua pesquisa ou busca por um termo, basta clicar no
                botão abaixo e seguir para nossa biblioteca. A atualização é
                instantânia e sempre pode ter a inclusão de novos termos. A
                busca por termos específicos é feita pelo termo em português ou
                pela CM do sinal.
              </h6>
            </Col>
          </Row>
          <br />
          <div className="botões">
            <Link to={'/PageIncludeSinal'}>
              <Button variant="outline-primary">Enviar um termo</Button>
            </Link>
            <Link to={'/Biblioteca/'}>
              <Button variant="outline-secondary">Buscar por um termo</Button>
            </Link>
          </div>
          <br />
        </Card>
      </Container>
    </div>
  );
}

export default HomePage;
