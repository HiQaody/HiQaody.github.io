import React from 'react';
import MA from "../assets/images/Pub/photo 1.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import cv from '../assets/images/Decos/cv.png';

function Title() {
    const handleCVOpen = () => {
        window.location.href()
    };
    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-[10%] py-4">

            <div className="absolute left-8 top-1/4 space-y-14 hidden lg:block ">
                <div className="w-20 lg:w-16 xl:w-40 h-1 xl:h-2 bg-yellow-500 transform rotate-45 rounded-xl"></div>
                <div className="w-20 lg:w-16 xl:w-40 h-1 xl:h-2 bg-yellow-500 transform rotate-45 rounded-xl"></div>
                <div className="w-20 lg:w-16 xl:w-40 h-1 xl:h-2 bg-yellow-500 transform rotate-45 rounded-xl"></div>
                <div className="w-20 lg:w-16 xl:w-40 h-1 xl:h-2 bg-yellow-500 transform rotate-45 rounded-xl"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
                {/* Text and Description Section */}
                <div className="w-full lg:w-1/2 flex justify-start flex-col">
                    <span
                        className="font-bold text-[18px] xl:text-[40px] md:text-[30px] sm:text-[20px]">Développeur <br
                        className="hidden lg:block"/> Web FullStack</span>

                    <div className="md:flex md:justify-between">
                        <h1 className="font-bold text-[40px] xl:text-[80px] md:text-[60px] sm:text-[50px] py-5">Jacquinot</h1>
                    </div>

                    <div className="flex items-start">
                        {/* Barre de couleur */}
                        <span
                            className="font-bold bg-amber-500 mr-2 rounded-xl"
                            style={{height: '100%', width: '10px', flexGrow: 0}}>
                    </span>

                        {/* Texte */}
                        <span
                            className="text-justify text-sm md:text-sm lg:text-md lg:w-2/3 xl:w-full xl:text-base">
                        Mes compétences en développement full stack me permettent de jongler entre le front-end et le backend
                        afin de convertir des idées créatives en solutions solides. Je reste constamment à la pointe des dernières
                        tendances et je suis prêt à affronter de nouveaux défis et à travailler ensemble sur des projets novateurs.
                        Créons ensemble quelque chose d'exceptionnel.
                    </span>
                    </div>


                </div>

                {/* Image and Social Icons Section */}
                <div className="w-full lg:w-1/2 flex relative items-center justify-center">
                    <div className="relative">
                        <div className="flex flex-col items-center">
                            <img
                                src={cv}
                                alt="Download CV"
                                className=" mx-auto md:absolute md:-left-1/2 lg:-left-1/3 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 lg:mt-9 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 max-w-[100px] cursor-pointer md:mt-0"
                                onClick={handleCVOpen}
                            />
                            <span className="md:hidden text-[#FFBC00]">Télecharger CV</span>
                        </div>
                        {/* Image */}
                        <img
                            src={MA}
                            alt="Jacquinot"
                            className="w-full h-auto max-h-[300px] object-contain lg:max-h-[400px] z-10 relative"
                        />

                        {/* Semi-Circle Shape */}
                        <div
                            className="absolute bottom-0 left-1/3 transform -translate-x-1/2 w-[400px] h-[200px] md:w-[400px] md:h-[200px] xl:w-[400px] xl:h-[200px] 2xl:w-[500px] 2xl:h-[250px] rounded-t-full"
                            style={{
                                background: 'linear-gradient(to top right, #FFAA32 10%, #806137 20%, #00183C 90%)',
                            }}>
                        </div>
                    </div>

                    {/* Social Icons Section */}
                    <div className="flex space-x-4 z-10">
                        <ul className="flex flex-col space-y-4 md:space-y-6 text-[#FFBC00]">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FacebookRoundedIcon fontSize="large"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hiqaody@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <EmailOutlinedIcon fontSize="large"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon fontSize="large"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon fontSize="large"/>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+261340179345" target="_blank" rel="noopener noreferrer">
                                    <PhoneIcon fontSize="large"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
        ;
}

export default Title;
