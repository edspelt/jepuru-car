import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ajusta la ruta según tu estructura de carpetas
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Vehiculos from './pages/Vehiculos';
import Contactanos from './pages/Contactanos';
import SobreNosotros from './pages/SobreNosotros';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/vehiculos" element={<Vehiculos />} />
                <Route path="/contactanos" element={<Contactanos />} />
                <Route path="/nosotros" element={<SobreNosotros />} />
            </Routes>
        </div>
    );
};

export default App;
