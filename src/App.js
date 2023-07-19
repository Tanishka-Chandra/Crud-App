import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
    <Route path = '/' element = {<Home />} />
     <Route path = '/all' element = {<AllUser />} />
     <Route path = '/add' element = {<AddUser />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
