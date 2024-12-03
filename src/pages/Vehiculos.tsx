import React from "react";

// Ejemplo de datos de vehículos
const vehiculos = [
    {
        id: 1,
        nombre: "NEW HB20 Sedán",
        marca: "Hyundai",
        descripcion: "Un sedán compacto con un gran rendimiento de combustible. Ideal para la ciudad y viajes largos.",
        imagen: "src/images/Autos/hb20s2.jpeg",
    },
    {
        id: 2,
        nombre: "HB20 Hatchback",
        marca: "Hyundai",
        descripcion: "Un hatchback moderno y versátil con tecnología de punta. Diseño deportivo y eficiencia en un solo vehículo.",
        imagen: "src/images/Autos/hb20.jpeg",
    },
    {
        id: 3,
        nombre: "Soluto",
        marca: "KIA",
        descripcion: "Un auto compacto con un gran rendimiento de combustible. Ideal para la ciudad y viajes largos.",
        imagen: "src/images/Autos/soluto.jpeg",
    },
    {
        id: 4,
        nombre: "Coolray",
        marca: "Geely",
        descripcion: "Una SUV moderna y espaciosa con tecnología de punta. Diseño deportivo y eficiencia en un solo vehículo.",
        imagen: "src/images/Autos/coolray.jpeg",
    },
    {
        id: 5,
        nombre: "GX3",
        marca: "Geely",
        descripcion: "Un SUV compacto con un diseño elegante y tecnología de vanguardia. Para los que buscan lo mejor.",
        imagen: "src/images/Autos/gx3.jpeg",
    },
    {
        id: 6,
        nombre: "Etios",
        marca: "Toyota",
        descripcion: "Un auto compacto con un gran rendimiento de combustible. Ideal para la ciudad y viajes largos.",
        imagen: "src/images/Autos/etios.jpeg",
    },
    {
        id: 7,
        nombre: "GOl",
        marca: "Volkswagen",
        descripcion: "Un sedán moderno y eficiente con un diseño elegante. Ideal para la ciudad y carretera.",
        imagen: "src/images/Autos/gol.png",
    },
    {
        id: 8,
        nombre: "HB20X",
        marca: "Hyundai",
        descripcion: "Una SUV compacta con un diseño moderno y tecnología avanzada. Para los aventureros urbanos.",
        imagen: "src/images/Autos/hb20x.jpeg",
    },
    {
        id: 9,
        nombre: "4x4",
        marca: "JIM",
        descripcion: "Una camioneta robusta y confiable, ideal para viajes al campo y terrenos difíciles.",
        imagen: "src/images/Autos/jim.jpeg",
    },
    {
        id: 10,
        nombre: "HB20 Sedán",
        marca: "Hyundai",
        descripcion: "Un sedán compacto con un gran rendimiento de combustible. Ideal para la ciudad y viajes largos.",
        imagen: "src/images/Autos/hb20s.jpeg",
    },
    {
        id: 11,
        nombre: "Tivoli",
        marca: "SsangYong",
        descripcion: "Una SUV moderna y espaciosa con tecnología de punta. Diseño deportivo y eficiencia en un solo vehículo.",
        imagen: "src/images/Autos/hb20h.jpeg",
    },
    {
        id: 12,
        nombre: "Carnival",
        marca: "KIA",
        descripcion: "Una camioneta familiar con espacio para todos. Diseño elegante y tecnología avanzada.",
        imagen: "src/images/Autos/carnival.jpeg",
    }
];

const Vehiculos: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-orange-500 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Flota de Vehiculos</h1>
                    <p className="text-xl mb-6">Explora nuestra amplia gama de vehículos para satisfacer todas tus necesidades de transporte.</p>
                </div>
            </div>

            {/* Vehículos Disponibles */}
            <div className="container mx-auto p-6 " id="vehiculos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vehiculos.map((vehiculo) => (
                        <div key={vehiculo.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                            <img src={vehiculo.imagen} alt={vehiculo.nombre} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-orange-500">{vehiculo.nombre}</h3>
                                <h4 className="text-lg text-gray-600">{vehiculo.marca}</h4>
                                <p className="mt-2 text-gray-700">{vehiculo.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sección de Información */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-orange-500">¿Por qué Elegir Nuestros Vehículos?</h2>
                    <p className="mb-4">Todos nuestros vehículos están en excelentes condiciones y son revisados regularmente para garantizar tu seguridad.</p>
                    <p className="mb-4">Ofrecemos una variedad de modelos para diferentes necesidades, desde sedanes hasta camionetas robustas.</p>
                    <p className="mb-4">Nuestro servicio al cliente está disponible 24/7 para ayudarte en todo momento.</p>
                    <a href="/contacto" className="bg-orange-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-orange-600 transition">Contáctanos para Más Información</a>
                </div>
            </div>
        </div>
    );
};

export default Vehiculos;
