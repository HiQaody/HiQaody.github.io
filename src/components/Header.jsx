import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import Logo from '../assets/images/Logos/hiqaody.png';
import Logo1 from '../assets/images/Logos/HiQaody.png';
import {Link as ScrollLink} from 'react-scroll';
import ScrollToTop from './ScrollToTop';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="container mx-auto px-16 py-9 lg:px-[10%] md:px-[10%] sm:px-[5%]">
            <div className="bg-primary py-4 flex justify-between items-center flex-wrap  rounded-[60px]">
                {/* Logo */}
                <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
                    <Link to="/" className="mx-auto xl:px-16 sm:px-[10%] md:px-[10%] xl:flex-grow md:flex-grow-0 text-center md:text-left ml-4 xl:ml-0 lg:ml-0">
                        <img src={Logo} alt="Logo"
                             className="h-12 w-auto cursor-pointer mx-auto md:mx-0 hidden md:block sm:block"/>
                        <img src={Logo1} alt="Logo"
                             className="h-12 w-auto cursor-pointer mx-auto  md:mx-0 block md:hidden sm:hidden"/>
                    </Link>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
                    </button>
                </div>

                {/* Navigation */}
                <nav
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:flex md:space-x-6 w-full md:w-auto md:mx-auto md:justify-start mt-4 md:mt-0 flex flex-col md:flex-row`}
                >
                    <ScrollLink
                        to="category"
                        smooth={true}
                        duration={500}
                        className="text-gray-200 cursor-pointer py-2 md:py-0 text-center block md:inline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Accueil
                    </ScrollLink>
                    <ScrollLink
                        to="book"
                        smooth={true}
                        duration={500}
                        className="text-gray-200 cursor-pointer py-2 md:py-0 text-center block md:inline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projets
                    </ScrollLink>
                    <ScrollLink
                        to="videos"
                        smooth={true}
                        duration={500}
                        className="text-gray-200 cursor-pointer py-2 md:py-0 text-center block md:inline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </ScrollLink>
                </nav>

                {/* Actions (boutons de connexion et d'inscription) */}
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:flex space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0 flex flex-col md:flex-row`}
                >
                    <button
                        className="btn-color py-5 px-4 rounded-[60px] w-full md:w-auto">
                        <span className="ml-2">Contactez-moi</span>
                    </button>
                </div>
            </div>
            <ScrollToTop/>
        </header>
    )
        ;
}

export default Header;
