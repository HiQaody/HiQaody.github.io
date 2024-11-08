import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logos/hiqaody.png';
import Logo1 from '../assets/images/Logos/HiQaody.png';
import { Link as ScrollLink } from 'react-scroll';
import ScrollToTop from './ScrollToTop';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-[10%] py-9">
            <div className="bg-primary py-4 flex justify-between items-center flex-wrap rounded-[60px] relative">
                {/* Logo */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/" className="mx-auto xl:px-16 sm:px-[10%] md:px-[10%] xl:flex-grow md:flex-grow-0 text-center md:text-left ml-4 xl:ml-0 lg:ml-0">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-12 w-auto cursor-pointer mx-auto md:mx-0 hidden md:block sm:block"
                        />
                        <img
                            src={Logo1}
                            alt="Logo"
                            className="h-12 w-auto cursor-pointer mx-auto md:mx-0 block md:hidden sm:hidden"
                        />
                    </Link>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                    </button>
                </div>

                {/* Menu Mobile / Tablette (side menu) */}
                <div
                    className={`${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed top-0 left-0 h-full w-3/4 bg-primary bg-opacity-90 flex flex-col justify-start items-center p-6 transition-transform duration-300 ease-in-out md:hidden z-20`}
                >
                    <div className="flex justify-between w-full items-center">
                        <button
                            className="text-white text-2xl"
                            onClick={toggleMenu}
                        >
                            <CloseIcon fontSize="large" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-6 mt-8">
                        <ScrollLink
                            to="category"
                            smooth={true}
                            duration={500}
                            className="text-gray-200 cursor-pointer text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Accueil
                        </ScrollLink>
                        <ScrollLink
                            to="book"
                            smooth={true}
                            duration={500}
                            className="text-gray-200 cursor-pointer text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projets
                        </ScrollLink>
                        <ScrollLink
                            to="videos"
                            smooth={true}
                            duration={500}
                            className="text-gray-200 cursor-pointer text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </ScrollLink>
                    </nav>

                    <button
                        className="btn-color py-3 px-6 rounded-[60px] w-full mt-8"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className="ml-2">Contactez-moi</span>
                    </button>
                </div>

                {/* Overlay when the menu is open */}
                {isMenuOpen && (
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={toggleMenu}
                    ></div>
                )}

                {/* Menu Desktop */}
                <nav
                    className="hidden md:flex md:space-x-6 w-full md:w-auto md:mx-auto md:justify-start mt-4 md:mt-0 flex-row"
                >
                    <ScrollLink
                        to="category"
                        smooth={true}
                        duration={500}
                        className="text-gray-200 cursor-pointer py-2 md:py-0 text-center block md:inline"
                    >
                        Accueil
                    </ScrollLink>
                    <ScrollLink
                        to="book"
                        smooth={true}
                        duration={500}
                        className="text-gray-200 cursor-pointer py-2 md:py-0 text-center block md:inline"
                    >
                        Projets
                    </ScrollLink>
                    <ScrollLink
                        to="videos"
                        smooth={true}
                        duration={500}
                        className="text-gray-200 cursor-pointer py-2 md:py-0 text-center block md:inline"
                    >
                        Blog
                    </ScrollLink>
                </nav>

                {/* Actions (Contact Button for Desktop) */}
                <div className="hidden md:flex space-x-4 justify-center md:justify-end mt-4 md:mt-0">
                    <button className="btn-color py-3 px-6 rounded-[60px]">
                        <span className="ml-2">Contactez-moi</span>
                    </button>
                </div>
            </div>
            <ScrollToTop />
        </header>
    );
}

export default Header;
