import React, {useState} from "react"
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Catalog from './components/Catalog.js'
import FullBoard from './components/FullBoard.js'

function App() {
  let catalog = [
    {
      id: 1,
      img: 'board.png',
      name: 'Board Rostislav',
      desc: 'Board for Rostislav where him can do honwork and praktik',
      data: '12.08.2020'
    },
    {
      id: 1,
      img: 'board.png',
      name: 'Board',
      desc: 'Board where can do honwork and praktik',
      data: '25.11.2026'
    },
    {
      id: 1,
      img: 'board.png',
      name: 'Board noRostislav',
      desc: 'Board for noRostislav where him can do honwork and praktik',
      data: '02.08.2025'
    }
  ]


  const [isFull, setIsFull] = useState(false)
  const [fullBoard, setFullBoard] = useState(null)

  const showFullBoard =(board) => {
    if(board) {
      setFullBoard(board)
      setIsFull(true)
    } else {
      setIsFull(false)
    }
  }

  return (
    <>
    <Header/>

    {isFull ? (<FullBoard catalog={catalog} board={fullBoard} showFullBoard={showFullBoard}/>) 
    : (<Catalog catalog={catalog} showFullBoard={showFullBoard}/>)}
    


    <Footer/>

    

    </>
  );
}

export default App;
