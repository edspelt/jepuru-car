import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faIdCard, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Requisitos: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-6 lg:px-16">
                <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">Requisitos para Alquilar</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    {/* Requisito 1: Tener 22 años */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-orange-100 duration-500">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-500 text-7xl mb-4 transition-transform transform hover:rotate-12 duration-500" />
                        <h3 className="text-2xl font-bold mb-4 text-orange-600">Tener 22 años</h3>
                        <p className="text-gray-700">Debes tener al menos 22 años de edad para poder alquilar un vehículo.</p>
                    </div>

                    {/* Requisito 2: Registro de conducir al día */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-orange-100 duration-500">
                        <FontAwesomeIcon icon={faIdCard} className="text-orange-500 text-7xl mb-4 transition-transform transform hover:rotate-12 duration-500" />
                        <h3 className="text-2xl font-bold mb-4 text-orange-600">Registro de conducir al día</h3>
                        <p className="text-gray-700">Es indispensable presentar un registro de conducir vigente.</p>
                    </div>

                    {/* Requisito 3: Tarjeta de crédito o depósito en efectivo */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-orange-100 duration-500">
                        <FontAwesomeIcon icon={faCreditCard} className="text-orange-500 text-7xl mb-4 transition-transform transform hover:rotate-12 duration-500" />
                        <h3 className="text-2xl font-bold mb-4 text-orange-600">Tarjeta de crédito o depósito en efectivo</h3>
                        <p className="text-gray-700">Debes contar con una tarjeta de crédito o hacer un depósito en efectivo como garantía.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requisitos;
