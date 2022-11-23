import {
	Row,
	Col,
	Button,
	Container,
	Card,
	Form,
	FloatingLabel,
	ButtonGroup,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Modal from "react-bootstrap/Modal";
import teste from "../assets/50x50.png";

function PageSinal() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [termo, setTermo] = useState({});
	const [reload, setReload] = useState(false);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [form, setForm] = useState({
		termo: "",
		fraseExemplo: "",
		conceito: "",
		cm: "",
		linkTermo: "",
		linkContexto: "",
	});
	let urlTermo = form.linkTermo;
	let urlContexto = form.linkContexto;

	useEffect(() => {
		async function fetchTermo() {
			const response = await axios.get(
				`https://ironrest.cyclic.app/wikilibras/${id}`
			);
			setTermo(response.data);

			setForm(response.data);
		}

		fetchTermo();
	}, [reload]);

	function handleReload() {
		setReload(!reload);
	}

	function handleSelect(e) {
		form.cm = e;
	}

	async function handleDelete() {
		await axios.delete(`https://ironrest.cyclic.app/wikilibras/${id}`);
		navigate("/");
		toast.error("Termo excluído!", {
			style: {
				borderRadius: "10px",
			},
			duration: 2000,
		});
	}
	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const clone = { ...form };
			delete clone._id;
			await axios.put(`https://ironrest.cyclic.app/wikilibras/${id}`, clone);
			setReload(!reload);
			setShow(false);
		} catch (error) {
			console.log(error);
		}

		handleReload();
		toast.success("Termo editado!");
		setShow(false);
	}

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	//código tratando shorts e watch
	if (urlTermo.includes("watch?v=") === true) {
		urlTermo = termo.linkTermo.replace("watch?v=", "embed/");
	}
	if (urlTermo.includes("shorts") === true) {
		urlTermo = termo.linkTermo.replace("shorts", "embed");
	}
	if (urlContexto.includes("watch?v=") === true) {
		urlContexto = termo.linkContexto.replace("watch?v=", "embed/");
	}
	if (urlContexto.includes("shorts") === true) {
		urlContexto = termo.linkContexto.replace("shorts", "embed");
	}

	return (
		<Container>
			<Card>
				<div key={termo._id}>
					<Row>
						<Col>
							<iframe
								width="300"
								height="200"
								src={urlTermo}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</Col>
						<Col>
							<iframe
								width="300"
								height="200"
								src={urlContexto}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</Col>
					</Row>
					<Row>
						<Col>
							<h4>Termo</h4>
							<h5>{termo.termo}</h5>
						</Col>

						<Col>
							<h4>Conceito</h4>
							<h5>{termo.conceito}</h5>
						</Col>
					</Row>
					<Row>
						<Col>
							<h5>Frase de Exemplo</h5>
							<h6>{termo.fraseExemplo}</h6>
						</Col>
						<Row>
							<Col>
								<h6>Configuração de Mão</h6>
								<p>{termo.cm}</p>
							</Col>
						</Row>
					</Row>
				</div>
				<Row>
					<Col>
						<Link to={"/Biblioteca/"}>
							<Button variant="secondary" size="lg" className="mb-3">
								Voltar
							</Button>
						</Link>
					</Col>
					<Col>
						<Button
							variant="primary"
							size="lg"
							className="mb-3"
							onClick={handleShow}
						>
							Editar
						</Button>
					</Col>
				</Row>
			</Card>
			<Modal
				show={show}
				onHide={handleClose}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton className="bg-warning">
					<Modal.Title>Editar Termo</Modal.Title>
				</Modal.Header>
				<Card className="bg-dark">
					<Form className="mx-3">
						<FloatingLabel label="Termo" className="my-3">
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="termo"
								value={form.termo}
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
							/>
						</FloatingLabel>
						<Container className="buttonGroup">
							<ButtonGroup>
								<Button
									variant="secondary"
									size="lg"
									className="mb-3"
									onClick={handleClose}
								>
									Voltar
								</Button>
								<Button
									variant="danger"
									size="lg"
									className="mb-3"
									onClick={handleDelete}
								>
									Excluir termo
								</Button>
								<Button
									variant="success"
									size="lg"
									className="mb-3"
									onClick={handleSubmit}
								>
									Salvar alterações
								</Button>
							</ButtonGroup>
						</Container>
					</Form>
				</Card>
			</Modal>
		</Container>
	);
}

export default PageSinal;
