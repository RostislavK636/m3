import React from "react";
import boardImage from './board.png';

export default function FullBoard(props) {
    return(
        <>
        <div className="full-board">
            <div className="canvas">
                <div className="board">

                </div>
            </div>
            <div className="info">       
                <div className='card-board' key={props.board.id}>
                    <img src={boardImage} alt={props.board.name}/>
                    <h3>{props.board.name}</h3>
                    <p className='desc'>{props.board.desc}</p>
                    <p><b>{props.board.data}</b></p>
                    <button onClick={() => props.showFullBoard(null)}>Назад</button>
                </div>

            </div>
        </div>
        </>
    )
}