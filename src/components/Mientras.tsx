import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Mientras: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 font-poppins p-4">
            {/*<img src={Logo} alt="Logo" className="h-32 w-auto mb-8"/> /!* Logo *!/*/}
            <h1 className="text-4xl font-bold text-orange-500 mb-4 text-center">JEPURU CAR</h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Página en Construcción</h1>
            <p className="text-gray-600 text-lg text-center">Estamos trabajando para traerte algo genial. ¡Vuelve
                pronto!</p>
            <p className="mt-4 text-center">Mientras tanto, puedes contactarnos en:</p>

            {/* Enlace a WhatsApp */}
            <a href="https://wa.me/595986501153" target="_blank" rel="noopener noreferrer"
               className="text-orange-400 font-poppins mb-4 underline">
                <FontAwesomeIcon icon={faWhatsapp}/>
                0986 501 153
            </a>

            <a href="https://wa.me/595974302500" target="_blank" rel="noopener noreferrer"
               className="text-orange-400 font-poppins mb-4 underline">
                <FontAwesomeIcon icon={faWhatsapp}/>
                0974 302 500

            </a>

            <a href="mailto:hola@glovocreativo.com.py" className="text-orange-400 font-poppins mb-4 underline">
                hola@jepurucar.com.py
            </a>

            {/* Redes Sociales */}
            <div className="flex space-x-6 mt-4">
                <a href="https://facebook.com/jepurucar" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-orange-500 text-3xl">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="https://instagram.com/jepurucar" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-orange-500 text-3xl">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </div>
        </div>
    );
};

export default Mientras;
