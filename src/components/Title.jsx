import React from 'react';
import MA from "../assets/images/Pub/photo 1.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {FacebookRounded} from "@mui/icons-material";

function Title() {
    return (
        <div className="container mx-auto px-16 py-2 lg:px-[10%] md:px-[10%] sm:px-[5%]">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3 flex justify-start flex-col ">
                    <span className="font-bold text-[18px] xl:text-[40px] md:text-[30px] sm:text-[20px]">Développeur <br/> Web FullStack</span>

                    <h1 className="font-bold text-[40px] xl:text-[80px] md:text-[60px] sm:text-[60px] py-9">Jacquinot</h1>

                    <div className="flex">
                        <span className="font-bold bg-amber-500 w-[20px] h-[280px] md:h-[120px] sm:h-[180px] mr-2"></span>
                        <span className="text-justify">Mes compétences en développement full stack me permettent de jongler entre le front-end et le backend
                        afin de convertir des idées créatives en solutions solides. Je reste constamment à la pointe des dernières
                        tendances et je suis prêt à affronter de nouveaux défis et à travailler ensemble sur des projets novateurs.
                        Créons ensemble quelque chose d'exceptionne</span>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 p-4 flex">
                    <img src={MA} alt="Jacquinot" className="w-full h-auto max-h-[500px] object-contain"/>
                    <div>
                        <li className="flex flex-col space-y-4">
                            <a href="">
                                <FacebookRounded className="text-color" fontSize="large"/>
                            </a>
                            <a href="">
                                <LinkedInIcon className="text-color rounded-3xl" fontSize="large"/>
                            </a>
                            <a href="">
                                <InstagramIcon className="text-color rounded-3xl" fontSize="large"/>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;
