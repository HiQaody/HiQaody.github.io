import React from "react";
import {motion} from "framer-motion";

const textVariants = {
    hidden: {opacity: 0, y: 50},
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3, // Délai pour chaque mot
            duration: 0.6,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1
        }
    })
};

export default function AnimatedTitle() {
    const words = ["Développeur", "Web", "FullStack"];

    return (
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {words.map((word, index) => (
                <motion.span
                    key={word}
                    custom={index} // Prop "custom" pour passer l'index au variant
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </h1>
    );
}
