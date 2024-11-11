'use client'
import { motion } from "framer-motion-3d";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useState, useEffect } from "react";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000); // Simule un délai de chargement
        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="loading-container">
            <Canvas>
                <motion.group
                    animate={{
                        rotateY: [0, Math.PI * 2],
                        rotateX: [0, Math.PI],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <Sphere args={[1, 32, 32]} scale={1.5}>
                        <meshStandardMaterial color="lightblue" />
                    </Sphere>
                </motion.group>
            </Canvas>
            <style jsx>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
        }
      `}</style>
        </div>
    );
};

export default Loading;
