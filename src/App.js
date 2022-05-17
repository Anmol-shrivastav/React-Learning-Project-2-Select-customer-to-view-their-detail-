import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import CustomerList from './myComponents/customerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div><p className="header-title">Learning React</p></div>
          <div><img src={logo} className="App-logo" alt="logo" /></div>
      </header>

      <Container fluid>
        <Row>
          <CustomerList />
        </Row>
      </Container>

    </div>
  );
}

export default App;
