"use client";
import React from "react";
import { Avatar } from "@mui/material";
import ScrollToTop from "@/app/components/ScrollToTop";

interface HeaderProps {
    title?: string;
    text?: string;
}

export default function Header({ title, text }: HeaderProps) {

    return (
        <header className="flex items-center justify-between p-4">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{text}</p>
            </div>
            <div className="flex items-center space-x-4">
                <div>
                    <Avatar src="" alt="User Avatar" />
                </div>
            </div>
            <ScrollToTop />
        </header>
    );
}
