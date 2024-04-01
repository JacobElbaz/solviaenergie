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
import { createTheme, ThemeProvider } from '@mui/material';
import { deepOrange, orange } from '@mui/material/colors';
import { HelmetProvider } from 'react-helmet-async';
import Equipe from './pages/Equipe';

const theme = createTheme({
  palette: {
    primary:{
      main: '#fa7268',
    }, 
    secondary: orange
  },
  typography: {
    fontFamily: [
      'Questrial',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      'sans-serif',].join(','),
  }
}
)

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout />
          <Routes>
            <Route path='/' element={<Acceuil />} />
            <Route path='/qui-sommes-nous' element={<About />} />
            <Route path='/aides' element={<Aides />} />
            <Route path='/calorifugeage' element={<Calorifugeage />} />
            <Route path='/politiques-de-confidentialite' element={<Confidentialite />} />
            <Route path='/isolation-exterieur' element={<IsoExterieur />} />
            <Route path='/pac-air-air' element={<PACAirAir />} />
            <Route path='/pac-air-eau' element={<PACAirEau />} />
            <Route path='/nos-realisations' element={<Realisations />} />
            <Route path='/recrutement' element={<Recrutement />} />
            <Route path='/politiques' element={<Confidentialite />} />
            <Route path='/notre-equipe' element={<Equipe />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
