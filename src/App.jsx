import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigeringsBar from './Components/NavigeringsBar'
import Footer from './Components/Footer'
import Hem from './Pages/Hem'
import Tidslinje from './Pages/Tidslinje'
import Portfolio from './Pages/Portfolio'
import OmMig from './Pages/OmMig'
import Kontakt from './Pages/Kontakt'

function App() {
  return (
    <>
      <NavigeringsBar />
        <Routes>
          <Route path="/" element={<Hem />} />
          <Route path="/Cv" element={<Tidslinje />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Ommig" element={<OmMig />} />
          <Route path="/Kontakt" element={<Kontakt />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
