'use client';
import "./globals.css";
import React, {Suspense, useEffect, useState} from "react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import Loading from "@/app/components/Loading";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulate loading (this could be replaced with actual data fetching)
        setTimeout(() => setIsLoading(false), 3000); // Simulated loading delay (3 seconds)
    }, []);


    if (isLoading) {
        return (
            <html lang="en">
            <body className="dark:text-white">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Loading />
            </div>
            </body>
            </html>
        );
    }


    return (
        <html lang="en" className="h-full">
        <body className="dark:text-white bg-gray-50 dark:bg-gray-900 h-full overflow-hidden">
        <div className="flex h-screen">
            {/* Sidebar - rétractable sur petit écran */}
            <aside className="lg:w-64 flex-shrink-0 md:z-20">
                <Sidebar/>
            </aside>

            {/* Main Content Wrapper - fixed height, non-scrollable */}
            <main className="flex-grow flex flex-col h-screen overflow-auto">
                {/* 3D Animated Background */}
                <div className="absolute inset-0 bg-animated z-0"></div>
                {/* Header - fixed position */}
                <div className="flex-shrink-0 px-4 sm:px-8 md:px-16 lg:px-[6%] py-2 lg:py-0">
                    <Header title="" text=""/>
                </div>

                {/* Zone de contenu scrollable avec padding pour éviter les chevauchements */}
                <div className="flex-grow overflow-auto px-4 sm:px-8 md:px-16 lg:px-[6%] ">
                    <div className="container mx-auto">
                        <div className="py-2">
                            <Suspense fallback={<Loading />}>
                                {children}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </body>
        </html>
    );
}
