import { Container, Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Biblioteca() {
  const [termos, setTermos] = useState([]);

  useEffect(() => {
    async function pegarTermos() {
      const response = await axios.get(
        'https://ironrest.cyclic.app/wikilibras/'
      );

      setTermos(response.data);
    }

    pegarTermos();
  }, []);
  console.log(termos);
  return (
    <div>
      <Container>
        {termos.map(termo => {
          let url = termo.linkTermo.replace('watch?v=', 'embed/');

          return (
            <Card>
              <iframe
                width="560"
                height="315"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Text>{termo.name}</Card.Text>
              </Card.Body>
              <Link to={`/paginadosinal/${termo._id}`}>
                <Button variant="outline-primary">Saiba Mais!</Button>
              </Link>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default Biblioteca;
