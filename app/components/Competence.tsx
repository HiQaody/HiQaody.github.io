'use client';
import React, { useEffect } from 'react';
import CardCompetence from "@/app/components/CardCompetence";
import { FaReact, FaDocker, FaJenkins, FaGithub } from "react-icons/fa";
import { SiJquery, SiNextdotjs, SiNestjs, SiSpringboot} from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";

function Competence() {
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

    const competences = [
        { icon: <SiJquery className="text-blue-600 text-3xl" />, description: "Création d'interfaces dynamiques avec jQuery et gestion des appels AJAX pour des applications réactives." },
        { icon: <FaReact className="text-blue-500 text-3xl" />, description: "Conception d'interfaces utilisateur dynamiques et réactives avec React, en se concentrant sur l'expérience utilisateur." },
        { icon: <SiNextdotjs className="text-gray-700 text-3xl" />, description: "Développement d'applications web performantes et optimisées pour le SEO avec le framework Next.js." },
        { icon: <SiNestjs className="text-red-600 text-3xl" />, description: "Développement d'API backend robustes et scalables avec NestJS, utilisant TypeScript et l'architecture modulaire." },
        { icon: <SiSpringboot className="text-green-700 text-3xl" />, description: "Création de services backend robustes et sécurisés avec Spring Boot pour des applications d'entreprise évolutives." },
        { icon: <FaJenkins className="text-blue-700 text-3xl" />, description: "Automatisation des pipelines de déploiement et intégration continue avec Jenkins pour des livraisons rapides." },
        { icon: <FaGithub className="text-gray-600 text-3xl" />, description: "Gestion de code source, collaboration et intégration avec GitHub pour des workflows de développement efficaces." },
        { icon: <FaDocker className="text-blue-600 text-3xl" />, description: "Containerisation des applications avec Docker pour un déploiement rapide et une gestion des dépendances simplifiée." },
    ];

    return (
        <div className="relative overflow-hidden  px-8">
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
            <div className="flex items-center py-4">
                <div className="h-12 w-1.5 dark:bg-white bg-blue-400 rounded-full mx-2"></div>
                <span className="text-5xl font-bold ">Ce que je fais</span>
            </div>

            {/* Description */}
            <p className="py-8 text-lg text-justify dark:text-slate-400">
                J&apos;ai plus de 10 ans d&apos;expérience dans la création de logiciels pour des clients du monde entier.
                Vous trouverez ci-dessous un aperçu rapide de mes principales compétences techniques et technologies que
                j&apos;utilise. Vous souhaitez en savoir plus sur mon expérience ? Consultez mon CV en ligne et mon
                portefeuille de projets.
            </p>

            {/* Competence Cards - Grid Layout with Scrolling Animation */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
            >
                {competences.map((competence, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <CardCompetence icon={competence.icon} description={competence.description} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Competence;
