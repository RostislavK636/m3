import React from 'react'

export default function Catalog(props) {
  return (
    <div>
        <h1>Каталог доступных досок</h1>

        <div className='list'>
            {props.catalog.map(board => (
            <div className='card'>
                <h2>{board.name}</h2>
                <h4>{board.desc}</h4>
                <h3>{board.data}</h3>
                <button onClick={() => props.showBoard(board)}>Перейти</button>
            </div>
            ))}
        </div>

    </div>
  )
}
