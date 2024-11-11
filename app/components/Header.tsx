"use client";
import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useLibelleGroupe from "@/app/config/useLibelleGroupe";
import { useUserGroup } from "@/app/config/UserGroupContext";

interface HeaderProps {
    title?: string;
    text: string;
    isDarkMode: boolean;
}

export default function Header({ title, text, isDarkMode }: HeaderProps) {
    const { userGroup } = useUserGroup();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRegister = () => {
        setAnchorEl(null);
        router.replace("/Auth/register");
    };

    const libelleGroupe = useLibelleGroupe();

    const handleLogout = () => {
        console.log("Logging out");
        Cookies.remove("token");
        router.replace("/Auth/login");
    };


    return (
        <header className="flex items-center justify-between p-4">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{text}</p>
            </div>
            <div className="flex items-center space-x-4">
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <div>
                    <Avatar src="" alt="User Avatar" onClick={handleClick} />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {libelleGroupe === "admin" ? (
                            [
                                <p key="user-group">{userGroup}</p>,
                                <MenuItem key="profile" onClick={handleClose}>Profil</MenuItem>,
                                <MenuItem key="settings" onClick={handleRegister}>Parametres</MenuItem>,
                                <MenuItem key="logout" onClick={handleLogout}>Se deconnecter</MenuItem>
                            ]
                        ) : (
                            [
                                <MenuItem key="profile" onClick={handleClose}>Profil</MenuItem>,
                                <MenuItem key="logout" onClick={handleLogout}>Se deconnecter</MenuItem>
                            ]
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
