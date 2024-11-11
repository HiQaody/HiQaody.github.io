'use client';
import React, { useState } from 'react';
import BtnNavLink from "@/app/components/BtnNavLink";
import Image from "next/image";
import Jacquinot from "@/app/assets/images/Pub/Group 1.png";

import {
    Home,
    Code2,
    FolderGit2,
    Contact,
    Download,
    Facebook,
    Mail,
    Github,
    Phone,
    Menu,
    X
} from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    function handleDownloadCV() {
        const link = document.createElement('a');
        link.href = '/cv/cv.pdf';
        link.download = 'Jacquinot_CV.pdf';
        link.click();
    }

    return (
        <>
            {/* Bouton hamburger pour mobile */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-4 rounded-md shadow-md"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Overlay pour mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                />
            )}

            <div
                className={`
                    fixed lg:relative
                    flex flex-col items-center 
                    h-screen w-64 
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    z-50 lg:z-auto
                    overflow-y-auto
                    sidebar
                `}
            >
                <div className="p-4 flex flex-col items-center w-full">
                    {/* Section profil */}
                    <div className="relative w-32 h-32">
                        <Image
                            src={Jacquinot}
                            alt="User Avatar"
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>

                    <h1 className="text-2xl font-bold mt-2">
                        Jacquinot
                    </h1>
                    <span className="text-sm ">Développeur FullStack</span>

                    {/* Section réseaux sociaux */}
                    <div className="mt-4 w-full">
                        <ul className="flex justify-center space-x-4 text-[#0387FF]">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                                    <Facebook className="w-5 h-5"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hiqaody@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                                    <Mail className="w-5 h-5"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                                    <Github className="w-5 h-5"/>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+261340179345" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                                    <Phone className="w-5 h-5"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="w-full px-4">
                    <hr className="border-t border-gray-200 dark:border-gray-700 my-4" />
                </div>

                {/* Navigation */}
                <div className="flex flex-col flex-grow w-full px-4">
                    <nav className="flex flex-col space-y-2">
                        <BtnNavLink
                            scrollTo="title"  // Scroll to Title section
                            icon={<Home className="w-5 h-5"/>}
                            label="Accueil"
                        />
                        <BtnNavLink
                            scrollTo="cube"  // Scroll to Cube section
                            icon={<Code2 className="w-5 h-5"/>}
                            label="Compétences"
                        />
                        <BtnNavLink
                            scrollTo="mandatement"  // Scroll to Mandatement section
                            icon={<FolderGit2 className="w-5 h-5"/>}
                            label="Projets"
                        />
                        <BtnNavLink
                            scrollTo="contacts"  // Scroll to Contacts section
                            icon={<Contact className="w-5 h-5"/>}
                            label="Contacts"
                        />
                    </nav>
                </div>

                {/* Bouton CV */}
                <div className="p-4 w-full">
                    <button
                        onClick={handleDownloadCV}
                        className="mt-8 px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        <Download className="w-5 h-5 mr-2"/>
                        Télécharger mon CV
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
