import {
	Card,
	Container,
	Button,
	Form,
	FloatingLabel,
	Toast,
	Row, Col
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function PageIncludeSinal() {
	const [showForm, setShowForm] = useState(false);
	const navigate = useNavigate();
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
		async function pegarTermos() {
			const response = await axios.get(
				`https://ironrest.cyclic.app/wikilibras/`
			);

			setForm(response.data);
		}

		pegarTermos();
	}, [reload]);

	function handleReload() {
		setReload(!reload);
	}

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await axios.post(`https://ironrest.cyclic.app/wikilibras/`, form);
		setForm({
			termo: "",
			fraseExemplo: "",
			conceito: "",
			cm: "",
			linkTermo: "",
			linkContexto: "",
		});

		handleReload();
		<Toast>
			<Toast.Header>
				<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
				<strong className="me-auto">WikiLibras</strong>
			</Toast.Header>
			<Toast.Body>Termo incluído com sucesso!</Toast.Body>
		</Toast>;
		setShowForm(true);
		navigate("/");
	}

	return (
		<div>
			<Container>
				{showForm === false && (
					<Card className="bg-dark">
						<Form>
							<FloatingLabel
								controlId="floatingInput"
								label="Termo"
								className="mb-3"
							>
								<Form.Control
									id="basic-addon1"
									aria-label="With textarea"
									type="text"
									onChange={handleChange}
									name="name"
									value={form.termo}
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingInput"
								label="Frase de Exemplo"
								className="mb-3"
							>
								<Form.Control
									id="basic-addon1"
									aria-label="With textarea"
									type="text"
									onChange={handleChange}
									name="image"
									value={form.fraseExemplo}
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingInput"
								label="Conceito"
								className="mb-3"
							>
								<Form.Control
									id="basic-addon1"
									aria-label="With textarea"
									type="text"
									onChange={handleChange}
									name="Conceito"
									value={form.conceito}
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingInput"
								label="CM"
								className="mb-3"
							>
								<Form.Control
									id="basic-addon1"
									aria-label="With textarea"
									type="text"
									onChange={handleChange}
									name="cm"
									value={form.cm}
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingInput"
								label="Link do vídeo com o termo"
								className="mb-3"
							>
								<Form.Control
									id="basic-addon1"
									aria-label="With textarea"
									type="link"
									onChange={handleChange}
									name="linkTermo"
									value={form.linkTermo}
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingInput"
								label="Link do vídeo com o contexto"
								className="mb-3"
							>
								<Form.Control
									id="basic-addon1"
									aria-label="With textarea"
									type="link"
									onChange={handleChange}
									name="linkConceito"
									value={form.linkConceito}
								/>
							</FloatingLabel>
							<Row>
                <Col>
								<Link to={"/"}>
									<Button variant="secondary" size="lg" className="mb-3">
										Voltar
									</Button>
								</Link>
                </Col>
                <Col>
								<Button
									variant="success"
									size="lg"
									className="mb-3"
									onClick={handleSubmit}
								>
									Salvar
								</Button>
                </Col>
							</Row>
						</Form>
					</Card>
				)}
			</Container>
		</div>
	);
}

export default PageIncludeSinal;
