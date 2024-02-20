import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Contacts from './components/Contacts'
import './App.css'

function App() {

  return (
    <>
    <nav id="navBar">
        <Link className="links" to=""><h1>Kalvium💖</h1></Link>
      <div id="contactsAbout">
        <Link className="links" to="/Contacts"><h3>Contacts</h3></Link>
        <Link className="links" to="/Form"><h3>RegistrartionForm</h3></Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App