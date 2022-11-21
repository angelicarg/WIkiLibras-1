import {
	Card,
	Container,
	Button,
	Form,
	FloatingLabel,
	Row,
	Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

function PageIncludeSinal() {
	const navigate = useNavigate();
	
	const [form, setForm] = useState({
		termo: "",
		fraseExemplo: "",
		conceito: "",
		cm: "",
		linkTermo: "",
		linkContexto: "",
	});

	
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
		
		navigate("/");
		toast.sucess("Termo incluído!");
	}

	return (
		<div>
			<Container>
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
								name="termo"
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
								name="fraseExemplo"
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
								name="conceito"
								value={form.conceito}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Configuração de Mão"
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
								type="text"
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
								type="text"
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
									Incluir
								</Button>
							</Col>
						</Row>
					</Form>
				</Card>
			</Container>
		</div>
	);
}

export default PageIncludeSinal;
