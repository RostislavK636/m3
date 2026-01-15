import React from 'react'

export default function Catalog(props) {
    return(
        <>
        <h1>Каталог всех досупных досок</h1>
        <div className='catalog'>
            {props.catalog.map((board) => (
                <div className='card-board' key={board.id}>
                    <img src={'../img/' + board.img} alt={board.name}/>
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