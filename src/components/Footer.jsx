// Footer.js
import React, { useEffect, useState } from 'react';
import LogoFooter from '../assets/images/Logos/EmiLib_empty.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getAllDomaines } from '../apiConfig/services'; // Assurez-vous d'importer la fonction

function Footer() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllDomaines();
                setCategories(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <footer className="py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-[10%]">
                <div>
                    <img src={LogoFooter} className="w-32 h-8 mb-2" alt="EmiLib Logo" />
                    <h2 className="text-xl font-bold mb-1">Contact</h2>
                    <ul>
                        <li className="mb-3 text-gray-400">Tel : +261 34 87 042 16</li>
                        <li className="mb-3 text-gray-400"> BP 1135 Andrainjato 301 Fianarantsoa Madagascar</li>
                        <li className="mb-3">renseignement@gmail.com</li>
                        <li className="flex space-x-4">
                            <a href="#test">
                                <FacebookIcon className="text-blue-300" fontSize="large"/>
                            </a>
                            <a href="#test">
                                <LinkedInIcon className="text-blue-300" fontSize="large"/>
                            </a>
                            <a href="#test">
                                <InstagramIcon className="text-blue-300" fontSize="large"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Explorer</h2>
                    <ul>
                        <li className="mb-3"><a href="#home" className="text-gray-400">Accueil</a></li>
                        <li className="mb-3"><a href="#about" className="text-gray-400">Catégories</a></li>
                        <li className="mb-3"><a href="#services" className="text-gray-400">Cours</a></li>
                        <li className="mb-3"><a href="#contact" className="text-gray-400">Parcours</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Catégories</h2>
                    <ul>
                        {categories.length > 0 ? (
                            categories.map(category => (
                                <li key={category.id_dom} className="mb-3">
                                    <a href={`#${category.nom_dom.toLowerCase()}`} className="text-gray-400">
                                        {category.nom_dom}
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-400">Aucune catégorie disponible.</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">S'abonner</h2>
                    <p className="text-gray-400 py-5">Lorem Ipsum has been them an industry printer took a gallery make
                        book.</p>
                    <input type="text" placeholder="Votre adresse mail"
                           className="border bg-gray-50 rounded-[10px] py-3 px-5 w-full mb-5"/>
                    <button className="bg-gray-800 text-white font-bold py-3 px-5 rounded-[10px]">S'abonner Maintenant</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;