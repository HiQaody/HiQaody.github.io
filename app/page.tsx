'use client'
import React from "react";
import {motion} from "framer-motion";
import Title from "@/app/components/Title";
import Cube from "@/app/components/Cube";
import PC3D from "@/app/components/PC3D";

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
                <Cube/>
            </div>
            <div className="flex items-center justify-center h-screen" id="mandatement">
                <h1>test</h1>
            </div>
        </motion.div>
    );
}
