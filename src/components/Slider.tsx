import React, { useState } from 'react';
import { Transition } from '@headlessui/react';


const slides = [
    { id: 1, image: '/src/images/Equipo/1.png', title: 'Jepuru Car', text: 'Renta los vehículos más lujosos' },
    // { id: 2, image: '/images/car2.jpg', title: 'Confort y Seguridad', text: 'Vehículos modernos y seguros' },
    // { id: 3, image: '/images/car3.jpg', title: 'Para cada ocasión', text: 'Encuentra el vehículo perfecto para tu viaje' }
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
                <Transition
                    key={slide.id}
                    show={currentSlide === index}
                    enter="transform transition duration-700"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transform transition duration-700"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    // className="absolute inset-0 w-full h-full"
                >
                    <div
                        className="h-full w-full bg-cover absolute top-0 left-0"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                            <div className="text-center text-white p-6">
                                <h2 className="text-4xl font-bold text-orange-500">{slide.title}</h2>
                                <p className="text-xl mt-4">{slide.text}</p>
                            </div>
                        </div>
                    </div>
                </Transition>
            ))}

            {/* Botones de navegación */}
            {/*<button*/}
            {/*    onClick={prevSlide}*/}
            {/*    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-700 text-white p-3 rounded-full"*/}
            {/*>*/}
            {/*    &#10094;*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    onClick={nextSlide}*/}
            {/*    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-700 text-white p-3 rounded-full"*/}
            {/*>*/}
            {/*    &#10095;*/}
            {/*</button>*/}

            {/* Indicadores */}
            {/*<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">*/}
            {/*    {slides.map((_, idx) => (*/}
            {/*        <button*/}
            {/*            key={idx}*/}
            {/*            onClick={() => setCurrentSlide(idx)}*/}
            {/*            className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-white' : 'bg-gray-300'}`}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};

export default Slider;
