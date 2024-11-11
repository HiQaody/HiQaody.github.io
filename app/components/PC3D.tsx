// PC3D.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";

// Composant PC utilisant react-three/fiber pour créer un modèle basique de PC
function PCModel() {
    return (
        <motion.group
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
        >
            {/* Écran */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[2, 1.2, 0.1]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Boîtier du PC */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1, 1, 0.3]} />
                <meshStandardMaterial color="#555" />
            </mesh>

            {/* Pied du PC */}
            <mesh position={[0, -0.2, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
                <meshStandardMaterial color="#222" />
            </mesh>
        </motion.group>
    );
}

export default function PC3D() {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            {/* Lumières */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            {/* Modèle de PC */}
            <PCModel />

            {/* Contrôles pour rotation (OrbitControls) */}
            <OrbitControls enableZoom={false} />

            {/* Texte interactif avec Framer Motion */}
            <Html position={[0, -1, 0]}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        textAlign: "center",
                        background: "rgba(0,0,0,0.5)",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.5rem",
                        color: "white",
                    }}
                >
                    Mon PC 3D
                </motion.div>
            </Html>
        </Canvas>
    );
}
