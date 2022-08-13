import React from "react";
import './login.css';
import Imagen from '../assets/avatar/perfil.png';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Calendar from "../time/Calendar";
import Clock from "../time/Clock";

const Login = () => {
    return (
        <div className="login">
            <div className="perfil">
                <img src={Imagen} alt="avatar" />
                <div className="settings">
                    <button ><SettingsIcon className="spinner" />Settings</button>
                </div>
                <h1>Welcome</h1>
                <div>
                    <LanguageIcon />
                    <button>EN</button>
                    <button>ES</button>
                </div>
                <div>
                    <button>SIGN OUT</button>
                </div>
                <div>
                    <Clock />
                    <Calendar/>
                </div>
            </div>
        </div>
    )
};

export default Login;