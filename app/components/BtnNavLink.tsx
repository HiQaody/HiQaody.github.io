'use client'
import React, {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

export interface BtnNavLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const BtnNavLink: React.FC<BtnNavLinkProps> = ({href, icon, label}) => {

    const pathname = usePathname();
    const [isActive, setIsActive] = useState<boolean>(pathname === href);
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        setIsActive(pathname === href);
    }, [pathname, href]);

    return (
        <div className="all border border-transparent rounded-lg" style={{
            width: `100%`,
            transition: "background-color 0.8s",
            backgroundColor: isActive ? "rgb(0, 141, 108)" : "transparent",
        }}>
            <Link href={href} passHref>
                <div
                    className={`flex items-center border border-transparent rounded-lg p-2 cursor-pointer ${
                        isActive ? "text-white" : ""
                    }`}
                >
                    {icon}
                    <span ref={labelRef} className="btn-nav-link-label ml-2">
            {label}
          </span>
                </div>
            </Link>
        </div>
    );
};

export default BtnNavLink;
