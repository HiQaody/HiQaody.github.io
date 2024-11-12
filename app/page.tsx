'use client'
import React from "react";
import {motion} from "framer-motion";
import Title from "@/app/components/Title";
import Competence from "@/app/components/Competence";
import Projects from "@/app/components/Projects";
import {Element} from 'react-scroll';
import Contact from "@/app/components/Contact";

export default function Home() {
    return (
        <motion.div
            initial={{opacity: 0, y: 100}}
            animate={{
                opacity: 1,
                y: 0,
                transition: {duration: 0.5}
            }}
        >
            <Element name="title" id="title">
                <Title/>
            </Element>
            <Element name="competence" id="competence">
                <Competence />
            </Element>
            <Element name="projects" id="projects">
                <Projects />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </motion.div>
    );
}
