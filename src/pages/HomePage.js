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
              <h6 class="lead">
                Esse é um site interativo que busca compartilhar termos em
                Libras e em Português. Qualquer pessoa, em qualquer lugar do
                país pode inserir um novo termo e ajudar a alimentar nossa
                biblioteca.
              </h6>
            </Col>
          </Row>
        </Card>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Como Enviar um termo?</h5>
                <p class="card-text">
                  Para incluir um novo sinal na biblioteca basta gravar um vídeo
                  com o termo desejado, outro vídeo com o conceito, salva os
                  dois vídeos no YouTube e usa a url dos vídeos para cadastrar o
                  termo clicando no link abaixo.
                </p>

                <Link to={'/PageIncludeSinal'}>
                  <Button variant="outline-primary">Enviar um termo</Button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Como Buscar por um termo?</h5>
                <p class="card-text">
                  Para iniciar sua busca por um termo, basta clicar no botão
                  abaixo e seguir para nossa biblioteca. Sempre a inclusão de
                  novos termos. A busca por termos específicos é feita pelo
                  termo em português ou pela CM do sinal.
                </p>
                <Link to={'/Biblioteca/'}>
                  <Button variant="outline-secondary">
                    Buscar por um termo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
