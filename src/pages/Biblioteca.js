import { Container, Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Biblioteca() {
  const [termos, setTermos] = useState([]);
  const [search, setSearch] = useState('');
  let url = '';
  const imagens = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '21.jpg',
    '22.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '28.jpg',
    '32.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    '40.jpg',
    '41.jpg',
    '42.jpg',
    '43.jpg',
    '44.jpg',
    '45.jpg',
    '46.jpg',
    '47.jpg',
    '48.jpg',
    '49.jpg',
    '50.jpg',
    '51.jpg',
    '52.jpg',
    '53.jpg',
    '54.jpg',
    '55.jpg',
    '56.jpg',
    '57.jpg',
    '58.jpg',
    '60.jpg',
    '61.jpg',
    '62.jpg',
    '63.jpg',
    '64.jpg',
    '65.jpg',
    '67.jpg',
    '68.jpg',
    '69.jpg',
    '70.jpg',
    '71.jpg',
    '72.jpg',
    '73.jpg',
    '74.jpg',
    '75.jpg',
    '76.jpg',
    '77.jpg',
    '78.jpg',
  ];
  const [imagemSearch, setImagemSearch] = useState('');

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

  function handleSelect(e) {
    setImagemSearch(e.target.src);
  }

  return (
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
      <div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Buscar por Configuração de Mão
							</button>
							<div
								className="dropdown-menu overflow-auto"
								aria-labelledby="dropdownMenuButton"
								id="dropdown-basic-button"
								title="Configuração de mão"
								onSelect={handleSelect}
								name="cm"
							>
								<div className="row no-gutters">
									{imagens.map((imagem) => {
										return (
											<img
												className="dropdown-item"
												name="cm"
												value="1"
												onClick={handleSelect}
												key={imagem}
												src={`/${imagem}`}
												alt="3"
												height="80px"
												width="100px"
											/>
										);
									})}
								</div>
							</div>
						</div>
        <Button
          variant="outline-primary"
          onClick={() => {
            setImagemSearch('');
            setSearch('');
          }}
        >
          Limpar Busca
        </Button>
      

      <div className="mãe">
        {termos
          .filter(termo =>
            termo.termo.toLowerCase().includes(search.toLowerCase())
          )
          .filter(termo => termo.cm.includes(imagemSearch))
          .map(termo => {
            if (termo.linkTermo.includes('watch?v=') === true) {
              url = termo.linkTermo.replace('watch?v=', 'embed/');
            }
            if (termo.linkTermo.includes('shorts') === true) {
              url = termo.linkTermo.replace('shorts', 'embed');
            }
            return (
              <div className="cards" key={termo._id}>
                <div>
                  <div>
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
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export default Biblioteca;
