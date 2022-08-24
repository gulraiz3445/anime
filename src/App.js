
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Epi from './Components/Episods/Epi';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/episodes/:id' element={<Epi/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
