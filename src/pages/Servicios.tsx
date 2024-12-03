import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMapMarkerAlt, faHandHoldingUsd, faGasPump } from '@fortawesome/free-solid-svg-icons';

const Servicios: React.FC = () => {
    return (
        <div>
            {/* Hero */}
            <section className="bg-orange-500 py-16 text-white text-center">
                <div className="container mx-auto px-6 lg:px-16">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">Servicios de Alquiler de Vehículos</h1>
                    <p className="text-xl">Encuentra el vehículo perfecto para tu viaje, ya sea de negocios o placer</p>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

                        {/* Servicio 1: Alquiler de vehículos */}
                        <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                            <FontAwesomeIcon icon={faCar} className="text-orange-500 text-6xl mb-4" />
                            <h3 className="text-xl font-bold mb-4">Alquiler de Vehículos</h3>
                            <p className="text-gray-600">Ofrecemos una amplia gama de vehículos en perfecto estado, desde autos compactos hasta SUVs.</p>
                        </div>

                        {/* Servicio 2: Alquiler por días o semanas */}
                        <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 text-6xl mb-4" />
                            <h3 className="text-xl font-bold mb-4">Alquiler por Días o Semanas</h3>
                            <p className="text-gray-600">Flexibilidad para alquilar vehículos por el tiempo que necesites, ya sea por un día, una semana o más.</p>
                        </div>

                        {/* Servicio 3: Seguro de cobertura total */}
                        <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                            <FontAwesomeIcon icon={faHandHoldingUsd} className="text-orange-500 text-6xl mb-4" />
                            <h3 className="text-xl font-bold mb-4">Seguro de Cobertura Total</h3>
                            <p className="text-gray-600">Viaja con tranquilidad con nuestro seguro de cobertura total, protegiéndote en cualquier circunstancia.</p>
                        </div>

                        {/* Servicio 4: Gasolina incluida */}
                        <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                            <FontAwesomeIcon icon={faGasPump} className="text-orange-500 text-6xl mb-4" />
                            <h3 className="text-xl font-bold mb-4">Gasolina Incluida</h3>
                            <p className="text-gray-600">Algunos de nuestros vehículos vienen con gasolina incluida para que comiences tu viaje sin preocupaciones.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tipos de Vehículos */}
            <section className="py-16 bg-orange-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Tipos de Vehículos Disponibles</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Compactos */}
                        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-500">
                            <img src="/src/images/Autos/hb20.jpeg" alt="Compacto" className="mb-4 w-full h-64 object-cover rounded-md" />
                            <h3 className="text-xl font-bold mb-2">Autos Compactos</h3>
                            <p className="text-gray-600">Ideales para la ciudad, con excelente rendimiento de combustible y fácil estacionamiento.</p>
                        </div>

                        {/* SUVs */}
                        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-500">
                            <img src="/src/images/Autos/coolray.jpeg" alt="SUV" className="mb-4 w-full h-64 object-cover rounded-md" />
                            <h3 className="text-xl font-bold mb-2">SUVs</h3>
                            <p className="text-gray-600">Perfectos para aventuras fuera de la ciudad, con amplio espacio y tecnología avanzada.</p>
                        </div>

                        {/* Camionetas */}
                        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-shadow duration-500">
                            <img src="/src/images/Autos/jim.jpeg" alt="camionetas" className="mb-4 w-full h-64 object-cover rounded-md" />
                            <h3 className="text-xl font-bold mb-2">Camionetas</h3>
                            <p className="text-gray-600">Para viajes al interior tenemos las mejores opciones de camionetas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="py-16 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonio 1 */}
                        <div className="p-6 bg-orange-800 rounded-lg shadow-lg">
                            <p className="italic">"El servicio fue excelente, y el vehículo estaba en perfectas condiciones. Definitivamente volveré a alquilar con ellos."</p>
                            <p className="mt-4 font-bold">- Juan Pérez</p>
                        </div>

                        {/* Testimonio 2 */}
                        <div className="p-6 bg-orange-800 rounded-lg shadow-lg">
                            <p className="italic">"Me encantó la flexibilidad que ofrecen en la duración del alquiler. Además, la atención al cliente es de primera."</p>
                            <p className="mt-4 font-bold">- María Gómez</p>
                        </div>

                        {/* Testimonio 3 */}
                        <div className="p-6 bg-orange-800 rounded-lg shadow-lg">
                            <p className="italic">"Gran variedad de vehículos y excelentes precios. El proceso de reserva fue rápido y sencillo."</p>
                            <p className="mt-4 font-bold">- Carlos Fernández</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Llamada a la Acción */}
            <section className="py-16 bg-gray-100 text-center">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6">¿Listo para reservar?</h2>
                    <p className="text-xl mb-8">Explora nuestra flota y elige el vehículo perfecto para tu próxima aventura.</p>
                    <a href="/reservar" className="bg-orange-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">Reservar Ahora</a>
                </div>
            </section>
        </div>
    );
};

export default Servicios;
