import React from 'react';
import FormularioCotizacion from './components/Formulario';
import Cotizacion from './components/ListaCotizaciones';


function App() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Generador de Cotizaciones</h1>
            <FormularioCotizacion />
            <Cotizacion />
        </div>
    );
}

export default App;
