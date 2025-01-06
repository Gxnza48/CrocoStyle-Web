import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-graffiti text-croco-400 mb-4">Acerca de CrocoStyle</h3>
            <p className="text-sm">
              En CrocoStyle, vendemos la mejor ropa de la mejor calidad para aquellos que buscan vestir como los tiempos de antes, para aquellos que quieren ir coquetos a cada rato.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-graffiti text-croco-400 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-croco-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-croco-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-croco-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-croco-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-graffiti text-croco-400 mb-4">Síguenos en Redes</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/CrocoStyle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-croco-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-croco-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-croco-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-croco-400 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
      <p>
          &copy; 2025 CrocoStyle. Todos los derechos reservados{' '}
  <span
    className="text-croco-400 cursor-pointer hover:underline"
    onClick={() => window.open('https://my-portfolio-gxnza48.onrender.com/', '_blank')}
    >
    developed by Gonzalo Bonadeo
  </span>
      </p>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
