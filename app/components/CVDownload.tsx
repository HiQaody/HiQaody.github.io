import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const buttonVariants = {
    hover: {
        scale: 1.05,
        y: -5,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 10
        }
    },
    tap: {
        scale: 0.95,
        y: 0,
        transition: {
            duration: 0.2
        }
    }
};

interface CVDownloadButtonProps {
    onClick: () => void;
}

const CVDownloadButton = ({ onClick }: CVDownloadButtonProps) => {
    return (
        <div className="w-full flex">
            <motion.button
                onClick={onClick}
                type="button"
                className=" flex mt-8 px-6 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                <Download className="w-5 h-5 mr-2" />
                Télécharger mon CV
            </motion.button>
        </div>
    );
};

export default CVDownloadButton;