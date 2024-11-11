'use client';
import {Canvas} from '@react-three/fiber';
import {motion} from 'framer-motion';
import {useRef} from 'react';

function RotatingCube() {
    const meshRef = useRef();

    return (
        <mesh ref={meshRef} rotation={[1, 1, 0]}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color="orange"/>
        </mesh>
    );
}

export default function Cube() {
    return (
        <div className="flex items-center justify-center h-screen">
            <motion.div
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1, rotate: 360}}
                transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
                style={{
                    width: '400px',
                    height: '400px',
                    border: '1px solid #ddd',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    overflow: 'hidden',
                }}
            >
                <Canvas camera={{position: [0, 0, 5]}}>
                    <ambientLight/>
                    <pointLight position={[10, 10, 10]}/>
                    <RotatingCube/>
                </Canvas>
            </motion.div>
        </div>
    );
}
