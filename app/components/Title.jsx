'use client';
import React, {useEffect} from 'react';
import MA from "../assets/images/Pub/photo 1.png";
import Image from "next/image";
import CVDownload from "./CVDownload";

function Title() {
    useEffect(() => {
        const particleContainer = document.querySelector(".particle-container");

        const createParticle = () => {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Append the particle to the container
            particleContainer?.appendChild(particle);

            // Remove the particle after animation
            setTimeout(() => {
                particle.remove();
            }, 3000); // match the duration of the animation
        };

        // Create particles at intervals
        const interval = setInterval(createParticle, 200);

        // Cleanup particles after component unmounts
        return () => clearInterval(interval);
    }, []);

    function handleDownloadCV() {
        const link = document.createElement('a');
        link.href = '/cv/cv.pdf';
        link.download = 'Jacquinot_CV.pdf';
        link.click();
    }

    return (
        <div className="flex-grow flex items-center h-screen relative overflow-hidden">
            {/* Particle effect container */}
            <div className="particle-container">
                {/* Static Particles */}
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full relative z-10">
                {/* Text and Description Section */}
                <div className="w-full lg:w-1/2 flex flex-col ">
                    <div className="space-y-6 lg:space-y-12">
                        {/* Introduction */}
                        <span className="text-lg text-gray-600 dark:text-gray-300">
                            Salut, je suis
                        </span>

                        {/* Title */}
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Développeur
                            Web FullStack</h1>


                        {/* Description */}
                        <div className="">
                            <p className="text-sm sm:text-base lg:text-sm xl:text-lg text-justify text-gray-700 dark:text-gray-300">
                                Mes compétences en développement full stack me permettent de jongler entre le front-end
                                et le backend
                                afin de convertir des idées créatives en solutions solides. Je reste constamment à la
                                pointe des dernières
                                tendances et je suis prêt à affronter de nouveaux défis et à travailler ensemble sur des
                                projets novateurs.
                                Créons ensemble quelque chose d&apos;exceptionnel.
                            </p>
                        </div>
                        {/* Bouton CV */}
                        <CVDownload onClick={handleDownloadCV} />
                    </div>
                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-16 lg:mt-20 xl:mt-24">
                        {/* Years of Experience */}
                        <div className="flex items-center gap-4">
                            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">03</span>
                            <div className="h-12 w-1.5 bg-white rounded-full mx-2"></div>
                            <span className="text-sm sm:text-base lg:text-lg whitespace-nowrap">
                                Années d&apos;expérience
                            </span>
                        </div>

                        {/* Deployed Projects */}
                        <div className="flex items-center gap-4">
                            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">03</span>
                            <div className="h-12 w-1.5 bg-white rounded-full mx-2"></div>
                            <span className="text-sm sm:text-base lg:text-lg whitespace-nowrap">
                                Projets déployés
                            </span>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="relative w-full max-w-md lg:max-w-lg lg:-mt-44 xl:-mt-18 2xl:-mt-40">
                        {/* Background shape */}
                        <div
                            className="absolute inset-0 bg-primary transform rotate-6 rounded-lg lg:h-[350px] xl:h-[400px]"
                            style={{
                                width: '100%',
                                zIndex: 0
                            }}
                        ></div>

                        {/* Image container */}
                        <div
                            className="relative bg-white p-2 rounded-lg transform transition-transform hover:scale-105 ">
                            <Image
                                src={MA}
                                alt="Jacquinot"
                                className="w-full h-[300px] sm:h-[400px] lg:h-[350px] xl:h-[400px] object-contain rounded"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;
