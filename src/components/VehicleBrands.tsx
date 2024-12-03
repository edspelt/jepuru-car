import React from 'react';

// Suponiendo que los logos de las marcas estén en la carpeta public/images/brands
const vehicleBrands = [
    { id: 1, name: 'Toyota', logo: 'src/images/carLogos/toyota.png' },
    { id: 2, name: 'Hyundai', logo: 'src/images/carLogos/hyundai.png' },
    { id: 3, name: 'Volkswagen', logo: 'src/images/carLogos/Volkswagen.png' },
    { id: 4, name: 'Izuzu', logo: 'src/images/carLogos/izuzu.png' },
    { id: 5, name: 'Geely', logo: 'src/images/carLogos/geely.png' },
    { id: 6, name: 'Kia', logo: 'src/images/carLogos/Kia.avif' }
];

const VehicleBrands: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-center text-4xl font-bold text-orange-600 mb-12">Marcas Disponibles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {vehicleBrands.map((brand) => (
                    <div
                        key={brand.id}
                        className="group relative cursor-pointer rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-full h-32 object-contain p-6"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-400 opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                            <div className="absolute bottom-0 left-0 p-4 text-white text-lg font-semibold">
                                {brand.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VehicleBrands;
