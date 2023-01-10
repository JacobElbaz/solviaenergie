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
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import { deepOrange, orange } from '@mui/material/colors';
import logo from './assets/logo.webp'
import { HelmetProvider } from 'react-helmet-async';

const theme = createTheme({
  palette: {
    primary: deepOrange,
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
          <div className='logo'>
            <a href="/">
              <Paper elevation={0}>
                <img src={logo} alt="logo solvia" />
              </Paper>
            </a>
          </div>
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
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
