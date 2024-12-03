import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Asegúrate de instalar react-leaflet y leaflet
import "leaflet/dist/leaflet.css"; // Estilo de Leaflet

const Contactanos: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-orange-500 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
                    <p className="text-xl mb-6">Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
                </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">Envíanos un Mensaje</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Tu Nombre"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Tu Correo Electrónico"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                            Mensaje
                        </label>
                        <textarea
                            id="mensaje"
                            rows={4}
                            placeholder="Tu Mensaje"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>

            {/* Sección de Información Adicional */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-orange-500">Otras Formas de Contacto</h2>
                    <p className="mb-4">Puedes llamarnos al <strong>(123) 456-7890</strong> o escribirnos a <strong>info@ejemplo.com</strong>.</p>
                    <p className="mb-4">Estamos disponibles de lunes a viernes, de 9 AM a 6 PM.</p>
                    <p className="mb-4">También puedes encontrarnos en nuestras redes sociales:</p>
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="#" className="text-orange-500 hover:text-orange-600">Facebook</a>
                        <a href="#" className="text-orange-500 hover:text-orange-600">Instagram</a>
                        <a href="#" className="text-orange-500 hover:text-orange-600">Twitter</a>
                    </div>
                </div>
            </div>

            {/* Mapa */}
            <div className="container mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Encuéntranos Aquí</h2>
                <MapContainer center={[40.7128, -74.0060]} zoom={13} className="h-60 rounded-lg shadow-md">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[40.7128, -74.0060]}>
                        <Popup>
                            Nuestra Ubicación <br /> ¡Visítanos!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Contactanos;
