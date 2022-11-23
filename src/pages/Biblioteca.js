import { Container, Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Biblioteca() {
	const [termos, setTermos] = useState([]);
	const [search, setSearch] = useState("");
	let url = "";

	useEffect(() => {
		async function pegarTermos() {
			const response = await axios.get(
				"https://ironrest.cyclic.app/wikilibras/"
			);

			setTermos(response.data);
		}

		pegarTermos();
	}, []);

	function handleChange(e) {
		setSearch(e.target.value);
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
			<div className="mãe">
				{termos
					.filter((termo) =>
						termo.termo.toLowerCase().includes(search.toLowerCase())
					)
					.map((termo) => {
						if (termo.linkTermo.includes("watch?v=") === true) {
							url = termo.linkTermo.replace("watch?v=", "embed/");
						}
						if (termo.linkTermo.includes("shorts") === true) {
							url = termo.linkTermo.replace("shorts", "embed");
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
