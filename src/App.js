import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/servicios' element={<ServiciosPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          {/* los distintos link */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
