import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition duration-300"
                >
                    <ExpandLessIcon />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
