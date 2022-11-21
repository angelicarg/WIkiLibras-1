import {Row, Col, Button} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function PageSinal() {
	const navigate = useNavigate();
	const { termoId } = useParams();

	async function handleDelete(e) {
		await axios.delete(`https://ironrest.cyclic.app/wikilibras/${termoId}`);
		navigate("/");
	}

	return (
		<div>
			<Row>
				<Col>
					<Link to={"/"}>
						<Button variant="error" size="lg" className="mb-3" onClick={handleDelete}>
							Deletar
						</Button>
					</Link>
				</Col>
				<Col>
					<Button
						variant="Primary"
						size="lg"
						className="mb-3"
						
					>
						Editar
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default PageSinal;
