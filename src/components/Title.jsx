import React from 'react';
import MA from "../assets/images/Pub/photo 1.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import cv from '../assets/images/Decos/cv.png';

function Title() {
    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-[10%] py-4">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Text and Description Section */}
                <div className="w-full lg:w-2/3 flex justify-start flex-col mb-8 lg:mb-0">
                    <span className="font-bold text-[18px] xl:text-[40px] md:text-[30px] sm:text-[20px]">Développeur <br/> Web FullStack</span>

                    <div className="md:flex md:justify-between">
                        <h1 className="font-bold text-[40px] xl:text-[80px] md:text-[60px] sm:text-[50px] py-5">Jacquinot</h1>
                        <img
                            src={cv}
                            alt="Download CV"
                            className="block mx-auto mt-4 lg:absolute lg:left-1/2 lg:top-1/3 lg:mt-9 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 max-w-[100px] cursor-pointer md:mt-0"
                        />
                    </div>

                    <div className="flex">
                        <span className="font-bold bg-amber-500 w-[20px] h-[280px] xl:h-[70px] lg:h-[90px] md:h-[120px] sm:h-[180px] mr-2"></span>
                        <span className="text-justify text-sm md:text-base">
                            Mes compétences en développement full stack me permettent de jongler entre le front-end et le backend
                            afin de convertir des idées créatives en solutions solides. Je reste constamment à la pointe des dernières
                            tendances et je suis prêt à affronter de nouveaux défis et à travailler ensemble sur des projets novateurs.
                            Créons ensemble quelque chose d'exceptionnel.
                        </span>
                    </div>
                </div>

                {/* Image and Social Icons Section */}
                <div className="w-full lg:w-1/3 p-4 flex relative items-center justify-center">
                    <img
                        src={MA}
                        alt="Jacquinot"
                        className="w-full h-auto max-h-[400px] object-contain lg:max-h-[500px]"
                    />

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <ul className="flex flex-col space-y-4 md:space-y-6 text-[#FFBC00]">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FacebookRoundedIcon fontSize="large" />
                            </a>
                            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                                <EmailOutlinedIcon fontSize="large" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon fontSize="large" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon fontSize="large" />
                            </a>
                            <a href="tel:+123456789" target="_blank" rel="noopener noreferrer">
                                <PhoneIcon fontSize="large" />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;
