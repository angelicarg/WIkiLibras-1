import { Container, Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Biblioteca() {
  const [termos, setTermos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function pegarTermos() {
      const response = await axios.get(
        'https://ironrest.cyclic.app/wikilibras/'
      );

      setTermos(response.data);
    }

    pegarTermos();
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="mãe">
      <Container>
        <FloatingLabel
          controlId="floatingInput"
          label="Escreva o Termo que deseja encontrar"
          className="mb-3"
        >
          <Form.Control
            placeholder="Escreva o Termo que deseja encontrar"
            value={search}
            onChange={handleChange}
          />
        </FloatingLabel>

        {termos
          .filter(termo =>
            termo.termo.toLowerCase().includes(search.toLowerCase())
          )
          .map(termo => {
            let url = termo.linkTermo.replace('watch?v=', 'embed/');

            return (
              <div className="cards">
                <div key={termo._id}>
                  <Card>
                    <iframe
                      width="280"
                      height="150"
                      src={url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <Card.Body>
                      <Card.Text>{termo.termo}</Card.Text>
                    </Card.Body>
                    <Link to={`/PageSinal/${termo._id}`}>
                      <Button variant="outline-primary">Saiba Mais!</Button>
                    </Link>
                  </Card>
                </div>
              </div>
            );
          })}
      </Container>
    </div>
  );
}

export default Biblioteca;
