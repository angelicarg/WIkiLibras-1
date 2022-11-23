import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Erro() {
  return (
    <div>
      <h2>Error 404 Not Found</h2>
      <Link to={'/'}>
        <Button variant="secondary" size="lg" className="mb-3">
          Voltar
        </Button>
      </Link>
    </div>
  );
}

export default Erro;
