'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Project = {
    id: number;
    name: string;
    technologies: string[];
    type: 'Web App' | 'Frontend' | 'Backend';
    link: string;
};

const projects: Project[] = [
    {
        id: 1,
        name: "Portfolio",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        type: "Frontend",
        link: "https://hiqaody.vercel.app/",
    },
    {
        id: 2,
        name: "API Gestion",
        technologies: ["Node.js", "Express", "MongoDB"],
        type: "Backend",
        link: "https://mockapi.io/",
    },
    {
        id: 3,
        name: "E-commerce App",
        technologies: ["Vue.js", "Firebase", "Vuetify"],
        type: "Web App",
        link: "https://ecommerce-demo.firebaseapp.com/",
    },
    {
        id: 4,
        name: "Weather Dashboard",
        technologies: ["React", "OpenWeather API", "Bootstrap"],
        type: "Frontend",
        link: "https://weatherapp.netlify.app/",
    },
    {
        id: 5,
        name: "Task Manager API",
        technologies: ["NestJS", "PostgreSQL", "TypeORM"],
        type: "Backend",
        link: "https://taskmanagerapi.com/", // URL fictive, remplacer par une réelle si disponible
    },
    {
        id: 6,
        name: "Personal Blog",
        technologies: ["Gatsby", "GraphQL", "Contentful"],
        type: "Frontend",
        link: "https://personalblog.com/", // URL fictive, remplacer par une réelle
    },
    {
        id: 7,
        name: "Dockerized Application",
        technologies: ["Docker", "Nginx", "Redis"],
        type: "Backend",
        link: "https://dockerapp.com/", // URL fictive, remplacer par une réelle
    },
    {
        id: 8,
        name: "Real Estate Platform",
        technologies: ["Angular", "Firebase", "Material UI"],
        type: "Web App",
        link: "https://realestateplatform.com/", // URL fictive, remplacer par une réelle
    },
    {
        id: 9,
        name: "Streaming Service",
        technologies: ["React", "Node.js", "AWS S3"],
        type: "Web App",
        link: "https://streamingapp.com/", // URL fictive, remplacer par une réelle
    },
    {
        id: 10,
        name: "CI/CD Pipeline",
        technologies: ["Jenkins", "Docker", "Kubernetes"],
        type: "Backend",
        link: "https://cicdpipeline.com/", // URL fictive, remplacer par une réelle
    },
];

const ProjectTabs = () => {
    const [selectedTab, setSelectedTab] = useState<'Tous' | 'Web App' | 'Frontend' | 'Backend'>('Tous');

    const filteredProjects = selectedTab === 'Tous'
        ? projects
        : projects.filter(project => project.type === selectedTab);

    const getPreviewUrl = (url: string) =>
        `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`;

    // Variante de couleur par type de projet
    const getTypeColor = (type: string) => {
        switch(type) {
            case 'Web App':
                return 'bg-purple-500/20 text-purple-400';
            case 'Frontend':
                return 'bg-blue-500/20 text-blue-400';
            case 'Backend':
                return 'bg-green-500/20 text-green-400';
            default:
                return 'bg-blue-500/20 text-blue-400';
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white px-8 py-4 overflow-auto">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['Tous', 'Web App', 'Frontend', 'Backend'].map(tab => (
                    <button
                        key={tab}
                        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 
                        ${selectedTab === tab
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-800 hover:bg-gray-700'}`}
                        onClick={() => setSelectedTab(tab as 'Tous' | 'Web App' | 'Frontend' | 'Backend')}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={getPreviewUrl(project.link)}
                                        alt={`Aperçu de ${project.name}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content Container */}
                                <div className="p-6">
                                    {/* Project Type Badge */}
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getTypeColor(project.type)}`}>
                                        {project.type}
                                    </span>


                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Name & Link */}
                                    <div className="flex justify-between items-center ">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {project.name}
                                        </h3>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                            aria-label={`Visiter ${project.name}`}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectTabs;