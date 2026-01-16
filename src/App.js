import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer' 
import Catalog from './components/Catalog'
import FullBoard from './components/FullBoard'

function App() {
  const catalog = [
    {
      id: 1,
      name: 'Board 1',
      desc: 'desc for Board 1 with new Efects',
      data: '10.10.2002'
    },
    {
      id: 2,
      name: 'Board 2',
      desc: 'desc for Board 2 with new Efects',
      data: '10.10.2002'
    },
    {
      id: 3,
      name: 'Board 3',
      desc: 'desc for Board 3 with new Efects',
      data: '10.10.2002'
    }
  ]

  const [ifFull, setIsFull] = useState(false);
  const [getBoard, setGetBoard] = useState(null)

  const showBoard = (board) => {
    if(board){
      setIsFull(true);
      setGetBoard(board);
    } else {
      setIsFull(false);
      setGetBoard(null)
    }
  }

  const[active, setActive] = useState(0)

  const showActive = (index) => {
    setActive(index)
  }



  return (
    <div className="App">
      <Header showActive={showActive} active={active}/>
      {ifFull ? <FullBoard board={getBoard} showBoard={showBoard}/>: <Catalog catalog={catalog} showBoard={showBoard}/>  }
      <Footer showActive={showActive} active={active}/>
    </div>
  );
}

export default App;
