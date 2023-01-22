import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Cards from './Cards';
import Head from './Head'



function App() {
  return (
    <div className="App">
     <Navbar fixed='top' variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home"><i className='fa-solid fa-lg fa-globe'></i> WEATHER 99</Navbar.Brand>
          <Navbar.Text className='justify-content-end'><i className='fa-solid fa-rotate-right'></i> Refresh</Navbar.Text>
        </Container>
      </Navbar>
      <Head/>
      <Cards/>
      
    </div>
  );
}

export default App;
