import React from "react";
import { motion } from "framer-motion";
// import TeamMember1 from "../images/team-member-1.jpg"; // Asegúrate de tener imágenes de tus miembros del equipo
// import TeamMember2 from "../images/team-member-2.jpg";
// import TeamMember3 from "../images/team-member-3.jpg";

const SobreNosotros: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-orange-500 text-white py-20">
                <div className="container mx-auto text-center">
                    <motion.h1
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Sobre Nosotros
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Descubre nuestra historia, misión y el equipo que hace todo posible.
                    </motion.p>
                </div>
            </div>

            {/* Sección de Historia */}
            <motion.div
                className="container mx-auto p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">Nuestra Historia</h2>
                <p className="mb-4">
                    Fundada en 2020, nuestra empresa se ha dedicado a ofrecer los mejores vehículos en el mercado.
                    Desde entonces, hemos crecido gracias a nuestra dedicación al servicio al cliente y a la calidad de nuestros productos.
                </p>
                <p>
                    Creemos que cada cliente merece la mejor experiencia, por lo que trabajamos incansablemente para satisfacer sus necesidades.
                </p>
            </motion.div>

            {/* Sección de Misión y Visión */}
            <motion.div
                className="bg-gray-100 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-orange-500">Nuestra Misión</h2>
                    <p className="mb-4">
                        Proporcionar vehículos de alta calidad que brinden seguridad y confort,
                        mientras mantenemos un enfoque en la satisfacción del cliente.
                    </p>
                    <h2 className="text-3xl font-bold mb-6 text-orange-500">Nuestra Visión</h2>
                    <p className="mb-4">
                        Ser la empresa líder en alquiler de vehículos, reconocida por su servicio excepcional y productos confiables.
                    </p>
                </div>
            </motion.div>

            {/* Sección de Equipo */}
            <motion.div
                className="container mx-auto p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">Nuestro Equipo</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['TeamMember1', 'TeamMember2', 'TeamMember3'].map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                        >
                            <img src={member} alt={`Miembro del equipo ${index + 1}`} className="w-full h-40 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-bold mt-2">Nombre del Miembro {index + 1}</h3>
                            <p className="text-gray-700">Cargo del Miembro {index + 1}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Sección de Valores */}
            <motion.div
                className="bg-gray-100 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-orange-500">Nuestros Valores</h2>
                    <ul className="list-disc list-inside text-left mx-auto max-w-xl">
                        <li>Compromiso con la calidad</li>
                        <li>Orientación al cliente</li>
                        <li>Trabajo en equipo</li>
                        <li>Innovación constante</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default SobreNosotros;
