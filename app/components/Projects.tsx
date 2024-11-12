'use client';
import React, { useEffect } from 'react';
import { useAnimation, useInView } from "framer-motion";
import ProjectsTabs from "@/app/components/ProjectsTabs";

function Projects() {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true }); // Detect when the component is in view

    useEffect(() => {
        if (isInView) {
            controls.start("visible"); // Start animation when component is in view
        }
    }, [controls, isInView]);

    useEffect(() => {
        const particleContainer = document.querySelector(".particle-container");

        const createParticle = () => {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            particleContainer?.appendChild(particle);
            setTimeout(() => {
                particle.remove();
            }, 3000);
        };

        const interval = setInterval(createParticle, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden text-white px-8">
            {/* Particles */}
            <div className="particle-container absolute inset-0">
                {/* Static Particles */}
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>

            {/* Heading */}
            <div className="flex items-center py-4 gap-4">
                <div className="h-12 w-1.5 bg-white rounded-full mx-2"></div>
                <span className="text-5xl font-bold">Projets deployés</span>
            </div>

            {/* Description */}
            <p className="py-4 text-lg text-justify">
                J&apos;ai plus de 10 ans d&apos;expérience dans la création de logiciels pour des clients du monde entier.
                Vous trouverez ci-dessous un aperçu rapide de mes principales compétences techniques et technologies que
                j&apos;utilise. Vous souhaitez en savoir plus sur mon expérience ? Consultez mon CV en ligne et mon
                portefeuille de projets.
            </p>

            <ProjectsTabs />
        </div>
    );
}

export default Projects;
