import React from "react";
import { motion } from "framer-motion";

type CardCompetenceProps = {
    icon: React.ReactNode; // Icône à afficher en haut à gauche
    description: string;   // Texte de description au centre
};

const CardCompetence: React.FC<CardCompetenceProps> = ({ icon, description }) => {
    return (
        <motion.div
            className="w-64 h-64 bg-white dark:bg-slate-800 shadow-lg rounded-xl p-4 flex flex-col justify-between"
            style={{
                perspective: "1000px", // Nécessaire pour l'effet 3D
            }}
            whileHover={{
                rotateY: 10,          // Rotation 3D au survol
                rotateX: -10,
                scale: 1.05,          // Agrandissement au survol
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
            }}
        >
            {/* Icone en haut à gauche */}
            <div className="flex items-start justify-start mb-4">
                {icon}
            </div>

            {/* Description centrée */}
            <div className="flex-1 flex items-center justify-center text-center text-gray-700 dark:text-slate-400 font-medium">
                {description}
            </div>
        </motion.div>
    );
};

export default CardCompetence;
