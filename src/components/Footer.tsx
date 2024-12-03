import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
    // Lista de números de WhatsApp
    const whatsappNumbers = [
        "+595961590627", // Mara
        "+595974302500", // Marcelo
        "+595971951077", // Eliana
    ];

    const [currentNumberIndex, setCurrentNumberIndex] = useState(0);

    const handleWhatsAppClick = () => {
        const nextIndex = (currentNumberIndex + 1) % whatsappNumbers.length;
        setCurrentNumberIndex(nextIndex);

        const whatsappLink = `https://wa.me/${whatsappNumbers[currentNumberIndex]}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <footer className="bg-orange-500 text-white py-16">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Columna 1: Información de contacto */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-4">Contacto</h3>
                        <p className="text-sm md:text-base">Dirección: 18 de Julio C/ Félix Bogado, Asunción, Paraguay</p>
                        <p className="text-sm md:text-base">Teléfono: +595961590627</p>
                        <p className="text-sm md:text-base">Email: info@jepurucar.com.py</p>
                    </div>

                    {/* Columna 2: Redes sociales */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
                        <div className="flex space-x-8">
                            <a
                                href="https://facebook.com/jepurucar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-4xl transition transform duration-500 hover:text-orange-400 hover:scale-125"
                            >
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                            <a
                                href="https://instagram.com/jepurucar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-4xl transition transform duration-500 hover:text-orange-400 hover:scale-125"
                            >
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>

                            <a
                                href="https://www.tiktok.com/@jepururentacar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-4xl transition transform duration-500 hover:text-orange-400 hover:scale-125"
                            >
                                <FontAwesomeIcon icon={faTiktok}/>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/jepurucar-rent-a-car/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-4xl transition transform duration-500 hover:text-orange-400 hover:scale-125"
                            >
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>

                            {/* Botón de WhatsApp con rotación de números */}
                            <button
                                onClick={handleWhatsAppClick}
                                className="text-white text-4xl transition transform duration-500 hover:text-orange-400 hover:scale-125"
                                aria-label="WhatsApp"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </button>
                        </div>
                    </div>

                    {/* Columna 3: Información adicional o Mapa */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold mb-4">Visítanos</h3>
                        <p className="text-sm md:text-base">¡Estamos ubicados en una zona céntrica para tu comodidad!</p>
                        <iframe
                            className="w-full h-32 lg:h-48 border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.1042821944615!2d-57.628660101521746!3d-25.32453853439323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da9c8bfaab85d%3A0x60c34ce4bffc7629!2sJepuru%20Car%20-%20Rent%20a%20Car!5e0!3m2!1ses!2spy!4v1728776069579!5m2!1ses!2spy"
                            allowFullScreen={false} loading="lazy"></iframe>
                    </div>
                </div>
            </div>

            {/* Créditos */}
            <p className="text-center text-white text-xs md:text-sm mt-6">
                &copy; {new Date().getFullYear()} Jepuru Car - Todos los derechos reservados
            </p>
        </footer>
    );
};

export default Footer;
