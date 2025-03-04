import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaCotizaciones = () => {
    const [cotizaciones, setCotizaciones] = useState([]);

    useEffect(() => {
        const fetchCotizaciones = async () => {
            try {
                const response = await axios.get('http://localhost:3500/cotizaciones');
                setCotizaciones(response.data);
            } catch (error) {
                console.error('Error obteniendo cotizaciones:', error);
            }
        };
        fetchCotizaciones();
    }, []);

    const descargarPDF = (id) => {
        window.open(`http://localhost:3500/generar-pdf/${id}`, '_blank');
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Cotizaciones Generadas</h2>
            <ul>
                {cotizaciones.map((cotizacion) => (
                    <li key={cotizacion.id} className="mb-4 p-4 border rounded">
                        <p><strong>ID:</strong> {cotizacion.id}</p>
                        <p><strong>Cliente:</strong> {cotizacion.nombre}</p>
                        <p><strong>Total:</strong> ${cotizacion.total}</p>
                        <p><strong>Fecha:</strong> {new Date(cotizacion.fecha).toLocaleString()}</p>
                        <button
                            onClick={() => descargarPDF(cotizacion.id)}
                            className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                            Descargar PDF
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaCotizaciones;