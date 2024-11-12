'use client';
import React from 'react';
import {Phone} from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 ">
            {/* Heading */}
            <div className="flex items-center py-4 gap-4">
                <div className="h-12 w-1.5 bg-white rounded-full mx-2"></div>
                <span className="text-5xl font-bold">Contact détails</span>
            </div>

            {/* Description */}
            <p className="py-4 text-lg text-justify">
                J&apos;ai plus de 10 ans d&apos;expérience dans la création de logiciels pour des clients du monde
                entier.
            </p>

            <div
                className="flex flex-col md:flex-row items-center justify-between p-8 rounded-lg shadow-lg">
                {/* Barre verticale et contact téléphonique */}
                <div className="flex items-center flex-row md:flex-col md:items-start mb-6 md:mb-0">
                    <div className="w-1 h-20 bg-blue-600 dark:bg-blue-400 mr-4 md:mr-0 md:mb-4"></div>
                    <div className="flex items-center">
                        <Phone className="text-blue-600 dark:text-blue-400 mr-2"/>
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">Telephone</span>
                            <span className="text-lg font-semibold">+261 34 017 9345</span>
                        </div>

                    </div>
                    <div className="w-1 h-20 bg-blue-600 dark:bg-blue-400 mr-4 md:mr-0 md:mb-4"></div>
                    <div className="flex items-center">
                        <Phone className="text-blue-600 dark:text-blue-400 mr-2"/>
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">Telephone</span>
                            <span className="text-lg font-semibold">+261 34 017 9345</span>
                        </div>
                    </div>
                    <div className="w-1 h-20 bg-blue-600 dark:bg-blue-400 mr-4 md:mr-0 md:mb-4"></div>

                    <div className="flex items-center">
                        <Phone className="text-blue-600 dark:text-blue-400 mr-2"/>
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">Telephone</span>
                            <span className="text-lg font-semibold">+261 34 017 9345</span>
                        </div>
                    </div>
                </div>

                {/* Formulaire de contact */}
                <div className="w-full md:w-1/2 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Votre adresse email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Votre message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
