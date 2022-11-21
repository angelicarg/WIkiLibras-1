import { Container, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Biblioteca() {
	const [termos, setTermos] = useState([]);

	useEffect(() => {
		async function pegarTermos() {
			const response = await axios.get(
				"https://ironrest.cyclic.app/wikilibras/"
			);
			setTermos(response.data);
		}

		pegarTermos();
	}, []);

	return <Container>{termos.map((termo) => {})}</Container>;
}
export default Biblioteca;
