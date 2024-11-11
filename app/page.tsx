'use client'
import React from "react";
import {motion} from "framer-motion";
import Title from "@/app/components/Title";
import Cube from "@/app/components/Cube";

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
            <div id="title">
                <Title/>
            </div>
            <div id="cube">

            </div>
            <div className="flex items-center justify-center h-screen" id="mandatement">
                <Cube />
            </div>
        </motion.div>
    );
}
