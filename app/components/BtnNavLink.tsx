'use client'
import React, {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import {Link as ScrollLink} from "react-scroll";

export interface BtnNavLinkProps {
    icon: React.ReactNode;
    label: string;
    scrollTo: string; // Optional prop for scrolling to a section
}

const BtnNavLink: React.FC<BtnNavLinkProps> = ({icon, label, scrollTo}) => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState<boolean>(pathname === scrollTo);
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        setIsActive(pathname === scrollTo);
    }, [pathname, scrollTo]);

    return (
        <div
            className={`all border border-transparent rounded-lg w-full transition-background-color duration-800 ${
                isActive ? "bg-blue-500" : "bg-transparent"
            }`}
        >
            <ScrollLink to={scrollTo} smooth={true} duration={500}>
                <div
                    className={`flex items-center border border-transparent rounded-lg p-2 cursor-pointer ${
                        isActive ? "text-white" : "text-white"
                    }`}
                >
                    {icon}
                    <span ref={labelRef} className="hidden sm:block ml-2">
                            {label}
                        </span>
                </div>
            </ScrollLink>

        </div>
    );
};

export default BtnNavLink;
