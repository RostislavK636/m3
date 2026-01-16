import React from 'react'

export default function Header(props) {
    return(
        <div className='header-div'>
        
        <div className="logo-div">
            <h2>LikeBoard</h2>
            <img src="https://img.icons8.com/?size=100&id=dAEM1oOHoOl7&format=png&color=000000" alt='logo'/>
        </div>

        <ul className='nav'>
            <li className={props.active === 0 ? 'active' : 'null'} onClick={() => {props.showActive(0)}}>Главная</li>
            <li className={props.active === 1 ? 'active' : 'null'} onClick={() => {props.showActive(1)}}>О нас</li>
            <li className={props.active === 2 ? 'active' : 'null'} onClick={() => {props.showActive(2)}}>Войти</li>
        </ul>

        </div>
    )
}