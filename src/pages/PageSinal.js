import {
	Row,
	Col,
	Button,
	Container,
	Card,
	Form,
	FloatingLabel,
	ButtonGroup,
} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player/youtube";

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

	return (
		<Container>
			<Card>
				<div key={termo._id}>
					<iframe
						width="560"
						height="315"
						src={
							termo.linkTermo && termo.linkTermo.replace("watch?v=", "embed/")
						}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<iframe
						width="560"
						height="315"
						src={
							termo.linkContexto &&
							termo.linkContexto.replace("watch?v=", "embed/")
						}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<p>{termo.termo}</p>
					<p>{termo.fraseExemplo}</p>
					<p>{termo.conceito}</p>
					<p>{termo.cm}</p>
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
						<Button variant="primary" onClick={handleShow}>
							Editar
						</Button>
					</Col>
				</Row>
			</Card>
			<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
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
						<FloatingLabel label="Configuração de Mão" className="mb-3">
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="cm"
								value={form.cm}
							/>
						</FloatingLabel>
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
						<Container  className="buttonGroup">
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
