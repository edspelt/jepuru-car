import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // Tailwind-compatible transitions
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../images/jepurucar.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-orange-500 p-4 font-poppins text-xl">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-2xl">
                    <img src={Logo} alt="Logo" className="h-16 w-auto" />
                </div>

                {/* Menu links for larger screens */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/" className="text-white hover:text-black">Inicio</Link>
                    <Link to="/servicios" className="text-white hover:text-black">Servicios</Link>
                    <Link to="/vehiculos" className="text-white hover:text-black">Vehiculos</Link>
                    <Link to="/contactanos" className="text-white hover:text-black">Contactanos</Link>
                    <Link to="/nosotros" className="text-white hover:text-black">Sobre nosotros</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar with sliding effect */}
            <Transition
                show={isOpen}
                enter="transform transition duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition duration-500"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-t from-white to-orange-500 p-6 z-50`}>
                    <button onClick={toggleSidebar} className="text-white text-right focus:outline-none mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <nav className="flex flex-col space-y-4">
                        <Link to="/" className="text-white text-lg hover:text-gray-300">Inicio</Link>
                        <Link to="/servicios" className="text-white text-lg hover:text-gray-300">Servicios</Link>
                        <Link to="/vehiculos" className="text-white text-lg hover:text-gray-300">Vehiculos</Link>
                        <Link to="/contactanos" className="text-white text-lg hover:text-gray-300">Contactanos</Link>
                        <Link to="/nosotros" className="text-white text-lg hover:text-gray-300">Sobre nosotros</Link>
                    </nav>
                </div>
            </Transition>
        </nav>
    );
};

export default Navbar;
