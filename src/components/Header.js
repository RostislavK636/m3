import React from "react";

export default function Header() {
    return(
        <>
        <div className="header">
            <div className="logo">
            <h1>BoardCool</h1>
            <img src="img/logo.png" alt="BoardCool logo" width='50px'/>
            </div>
            <div className="nav">
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Вход</li>
                </ul>
            </div>
        </div>
        </>
    )
}