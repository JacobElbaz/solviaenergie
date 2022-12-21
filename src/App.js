import './App.css';
import Layout from './components/Layout'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Acceuil from './pages/Acceuil'
import About from './pages/About'
import Aides from './pages/Aides'
import Calorifugeage from './pages/Calorifugeage'
import Confidentialite from './pages/Confidentialite'
import IsoExterieur from './pages/IsoExterieur'
import PACAirAir from './pages/PACAirAir'
import PACAirEau from './pages/PACAirEau'
import Realisations from './pages/Realisations'
import Recrutement from './pages/Recrutement'

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path='/' element={<Acceuil/>} />
        <Route path='/qui-sommes-nous' element={<About/>} />
        <Route path='/aides' element={<Aides/>} />
        <Route path='/calorifugeage' element={<Calorifugeage/>} />
        <Route path='/politiques-de-confidentialite' element={<Confidentialite/>} />
        <Route path='/isolation-exterieur' element={<IsoExterieur/>} />
        <Route path='/pac-air-air' element={<PACAirAir/>} />
        <Route path='/pac-air-eau' element={<PACAirEau/>} />
        <Route path='/nos-realisations' element={<Realisations/>} />
        <Route path='/recrutement' element={<Recrutement/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
