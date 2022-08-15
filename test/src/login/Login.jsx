import React from "react";
import './login.css';
import Imagen from '../assets/avatar/perfil.png';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Clock from "../time/Clock";
import { useTranslation } from "react-i18next";

const Login = () => {
    
    const [t, i18n] = useTranslation("global");
    return (
        <div className="login">
            <div className="perfil">
                {/* Profile img */}
                <img src={Imagen} alt="avatar" />
                <div className="settings">
                    {/* Settings section */}
                    <button ><SettingsIcon className="spinner" />{t("app.settings")}</button>
                </div>
                <div>
                    <h1 className="welcome">{t("app.welcome")}</h1>
                </div>
                <div className="languaje">
                    {/* language change section */}
                    <LanguageIcon />
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                </div>
                <div className="loguot">
                    <button>{t("app.logout")}</button>
                </div>
                <div className="time">
                    {/* Time section */}
                    <Clock />
                </div>
            </div>
        </div>
    )
};

export default Login;