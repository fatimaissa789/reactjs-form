// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  Form from 'react-bootstrap/Form';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container >

          <div className='first-div'>
            <div className='second-div'>
              <Card className='card-style'>
                <h1 className='login'>Login</h1>
                <Form style={{margin:"30px"}}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='Email '>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='Email '>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                     <a href='/#' className='link'>Mot de passe oublié</a>
                  <Button variant="primary" type="submit" className='button'>
                    Submit
                  </Button>
                  <a href='/#' style={{textDecoration:"none",fontSize:"15px"}}className='link'>Créer un compte</a>
                </Form>
              </Card>
            </div>
          </div>


        </Container>
      </header>
    </div>
  );
}

export default App;
