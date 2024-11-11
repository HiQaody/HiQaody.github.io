import React from "react";
import { motion } from "framer-motion";

const AppLoading = () => {
    // Variantes d'animation pour les éléments
    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const blockVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const barVariants = {
        animate: {
            scaleX: [0, 1],
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
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
            <motion.div
                className="flex flex-col items-center"
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                {/* Logo Block */}
                <motion.div
                    variants={blockVariants}
                    className="mb-8"
                >
                    <div
                        className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl shadow-xl flex items-center justify-center">
                        <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    variants={blockVariants}
                    className="text-gray-800 dark:text-gray-200 text-xl font-medium mb-6"
                >
                    Chargement de l&apos;application
                </motion.div>

                {/* Loading Bar Container */}
                <motion.div
                    variants={blockVariants}
                    className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                >
                    {/* Animated Bar */}
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                        variants={barVariants}
                        animate="animate"
                        style={{originX: 0}}
                    />
                </motion.div>

                {/* Loading Status */}
                <motion.div
                    variants={blockVariants}
                    className="mt-4 text-sm text-gray-600 dark:text-gray-400"
                >
                    Préparation de votre espace de travail...
                </motion.div>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full -translate-x-1/2 -translate-y-1/2"/>
                <div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full translate-x-1/2 translate-y-1/2"/>
            </div>
        </div>
    );
};

export default AppLoading;