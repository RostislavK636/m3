import React from 'react'
import boardImage from './board.png';

export default function Catalog(props) {
    return(
        <>
        <h1>Каталог всех досупных досок</h1>
        <div className='catalog'>
            {props.catalog.map((board) => (
                <div className='card-board' key={board.id}>
                    <img src={boardImage} alt={board.name}/>
                    <h3>{board.name}</h3>
                    <p className='desc'>{board.desc}</p>
                    <p><b>{board.data}</b></p>
                    <button onClick={() => props.showFullBoard(board)}>Перейти</button>
                </div>
            ))}
        </div>
        </>
    )
}