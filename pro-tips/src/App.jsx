import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Contacts from './components/Contacts';
import './App.css';

function App() {

  return (
    <>
    <nav id="navigation">
        <Link className="nav-links" to=""><h1>Kalvium🌟</h1></Link>
      <div id="linkContainer">
        <Link className="nav-links" to="/Contacts"><h3>Contact Us</h3></Link>
        <Link className="nav-links" to="/Form"><h3>Register</h3></Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
    </Routes>
    </>
  );
}

export default App;
