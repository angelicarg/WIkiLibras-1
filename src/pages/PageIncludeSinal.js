import {
	Card,
	Container,
	Button,
	Form,
	FloatingLabel,
	Row,
	Col,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import teste from "../assets/50x50.png";

function PageIncludeSinal() {
	const navigate = useNavigate();
	const [value, setValue] = useState("");

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

	function handleSelect(e) {
		form.cm = e;
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (
			!form.termo ||
			!form.fraseExemplo ||
			!form.conceito ||
			!form.cm ||
			!form.linkTermo ||
			!form.linkContexto
		) {
			toast.error("Preencha todos os campos");
			return;
		}

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
		toast("Termo incluído com sucesso!", {
			icon: "👏",
			style: {
				borderRadius: "10px",
			},
			duration: 2000,
		});
	}

	return (
		<div>
			<Container>
				<Card className="bg-dark">
					<Form>
						<FloatingLabel label="Termo" className="mb-3">
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="termo"
								value={form.termo}
								placeholder="Termo"
							/>
						</FloatingLabel>
						<FloatingLabel label="Frase de Exemplo" className="mb-3">
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="fraseExemplo"
								value={form.fraseExemplo}
								placeholder="Frase de Exemplo"
							/>
						</FloatingLabel>
						<FloatingLabel label="Conceito" className="mb-3">
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="conceito"
								value={form.conceito}
								placeholder="Conceito"
							/>
						</FloatingLabel>
						<DropdownButton
							id="dropdown-basic-button"
							title="Configuração de mão"
							onSelect={handleSelect}
							name="cm"
						>
							<Dropdown.Item eventKey="1" name="cm" value="1">
								<img src={teste} alt="1" />
							</Dropdown.Item>
							<Dropdown.Item eventKey="2">
								<img src={teste} alt="2" />
							</Dropdown.Item>
							<Dropdown.Item eventKey="3">
								<img src={teste} alt="3" />
							</Dropdown.Item>
						</DropdownButton>
						<FloatingLabel label="Link do vídeo com o termo" className="mb-3">
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="linkTermo"
								value={form.linkTermo}
								placeholder="Link do vídeo com o termo"
							/>
						</FloatingLabel>
						<FloatingLabel
							label="Link do vídeo com o contexto"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="linkContexto"
								value={form.linkContexto}
								placeholder="Link do vídeo com o contexto"
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
