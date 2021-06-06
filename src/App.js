import { Container, Button } from "reactstrap";
import { Logo } from "./assets/Assets";

function App() {
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-between">
        <Logo className='py-4'/>
        <ul className="d-flex align-item-center">
          <li >Inicio</li>
          <li >Cursos</li>
          <li >Blog</li>
          <li>Compañia</li>
        </ul>
        <div className='d-flex'>
          <Button>Iniciar Sesión</Button>
          <div className='ml-3'><Button color='primary' >Registrate</Button></div>
        </div>
      </Container>
    </div>
  );
}

export default App;
