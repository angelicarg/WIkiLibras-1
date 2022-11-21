import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Biblioteca from './pages/Biblioteca';
import PageSinal from './pages/PageSinal';
import PageIncludeSinal from './pages/PageIncludeSinal';
import Erro from './pages/Erro';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Biblioteca" element={<Biblioteca />} />
        <Route path="/paginadosinal" element={<PageSinal />} />
        <Route path="/PageIncludeSinal" element={<PageIncludeSinal />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </div>
  );
}

export default App;
