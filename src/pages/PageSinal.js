import { Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

function PageSinal() {
	const navigate = useNavigate();
	const termoId = useParams();
	const [termo, setTermo] = useState({});
	const [reload, setReload] = useState(false);

	const [form, setForm] = useState({
		termo: "",
		fraseExemplo: "",
		conceito: "",
		cm: "",
		linkTermo: "",
		linkContexto: "",
	});

	useEffect(() => {
		async function fetchTermo() {
			const response = await axios.get(
				`https://ironrest.cyclic.app/wikilibras/${termoId.id}`
			);
			setTermo(response.data);

			setForm(response.data);
		}

		fetchTermo();
	}, [reload]);

	function handleReload() {
		setReload(!reload);
	}

	async function handleDelete() {
		await axios.delete(`https://ironrest.cyclic.app/wikilibras/${termoId.id}`);
		navigate("/");
		toast.error("Termo excluído!", {
			style: {
				borderRadius: "10px",
			},
			duration: 2000,
		});
	}

	return (
		<Container>
			<Row>
				<Col>
					<Link to={"/"}>
						<Button
							variant="danger"
							size="lg"
							className="mb-3"
							onClick={handleDelete}
						>
							Excluir
						</Button>
					</Link>
				</Col>
				<Col>
					<Button variant="primary" size="lg" className="mb-3">
						Editar
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default PageSinal;
