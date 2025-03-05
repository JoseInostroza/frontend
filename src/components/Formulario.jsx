import React, { useState } from 'react';
import axios from 'axios';

const FormularioCotizacion = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        producto: '',
        cantidad: '',
        observaciones: ''
    });

    const [errors, setErrors] = useState({}); // Para manejar errores de validación
    const [successMessage, setSuccessMessage] = useState(''); // Mensaje de éxito

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones
        const newErrors = {};
        if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio';
        if (!formData.email) newErrors.email = 'El correo electrónico es obligatorio';
        if (!formData.telefono) newErrors.telefono = 'El teléfono es obligatorio';
        if (!formData.producto) newErrors.producto = 'Debes seleccionar un servicio/producto';
        if (!formData.cantidad) newErrors.cantidad = 'La cantidad es obligatoria';
        if (!formData.precio) newErrors.precio = 'El precio es obligatorio';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3500/generar', formData);
            alert(`Cotización generada con ID: ${response.data.id}`);
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                producto: '',
                cantidad: '',
                precio: '',
                observaciones: ''
            });
        } catch (error) {
            console.error('Error generando la cotización:', error);
            alert('Hubo un error al generar la cotización');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded mb-4">
            <h2 className="text-2xl font-bold mb-4">Generar Cotización</h2>

            {/* Campo: Nombre */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nombre del cliente:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
            </div>
            
            {/* Campo: Rut */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Rut del cliente:</label>
                <input
                    type="text"
                    name="Rut"
                    value={formData.rut}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.Rut && <p className="text-red-500 text-sm">{errors.Rut}</p>}
            </div>

            {/* Campo: Correo electrónico */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Correo electrónico:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Campo: Teléfono */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Teléfono:</label>
                <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
            </div>

            {/* Campo: Producto (menú desplegable) */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Producto:</label>
                <select
                    name="producto"
                    value={formData.producto}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Selecciona un producto</option>
                    <option value="land vip 1">LAND VIP 1</option>
                    <option value="land vip 2">LAND VIP 2</option>
                    <option value="land 1">LAND 1</option>
                    <option value="land 2">LAND 2</option>
                    <option value="land 3">LAND 3</option>
                    <option value="land 4">LAND 4</option>
                    <option value="land 5">LAND 5</option>
                </select>
                {errors.producto && <p className="text-red-500 text-sm">{errors.producto}</p>}
            </div>

            {/* Campo: Cantidad */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Cantidad:</label>
                <input
                    type="number"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.cantidad && <p className="text-red-500 text-sm">{errors.cantidad}</p>}
            </div>

            {/* Campo: Precio unitario */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Precio unitario UF:</label>
                <input
                    type="number"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                {errors.precio && <p className="text-red-500 text-sm">{errors.precio}</p>}
            </div>

            {/* Campo: Observaciones */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Observaciones:</label>
                <textarea
                    name="observaciones"
                    value={formData.observaciones}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* Mensaje de éxito o error */}
            {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
            {errors.submit && <p className="text-red-500 text-sm mb-4">{errors.submit}</p>}

            {/* Botón de enviar */}
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Generar Cotización
            </button>
        </form>
    );
};

export default FormularioCotizacion;