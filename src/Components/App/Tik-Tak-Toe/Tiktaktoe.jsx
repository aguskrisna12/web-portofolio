import { useState } from 'react'
import './styles.css'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Tiktaktoe() {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)

    console.log(squares)


    const Square = ({ value, onSquareClick }) => {
        return (
            <button onClick={onSquareClick} className='square'>
                {value}
            </button>
        )
    }

    const handleClick = (i) => {
        console.log(calculateWinner(squares))
        if (squares[i] || calculateWinner(squares)) return;

        const newSquares = squares.slice()
        newSquares[i] = isNext ? 'X' : 'O';
        setSquares(newSquares)
        setIsNext(!isNext)
    }

    const handleReset = () => {
        return window.location.reload(false);
    }

    const winner = calculateWinner(squares)

    let status = ''
    if (winner) {
        status = 'The Winner : ' + winner
    } else {
        status = 'Next player : ' + (isNext ? 'X' : 'O')
    }


    return (
        <div className='container-tiktaktoe'>
            <Link to={'/'}>
                <BiArrowBack className='icon arrow' />
            </Link>                
            <div className='status-tiktaktoe'>
                {status}
            </div>
            <div className='container-board'>
                <div className='board-tiktaktoe'>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
            <div className='btn-reset'>
                <button className={'btn btn-' + (winner ? 'success' : 'warning')} onClick={handleReset}>Reset Game</button> 
            </div>
        </div>

    )
}

const calculateWinner = (square) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]

        if (square[a] && square[a] === square[b] && square[c]) {
            return square[a]
        }
    }

    return false
}


export default Tiktaktoe