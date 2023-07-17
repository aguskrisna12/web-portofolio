import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

function Calculator() {
    const [count, setCount] = useState("")

    const handleClick = (e) => {
        setCount(count.concat(e.target.value))
    }

    const resetClick = () => {
        setCount("")
    }

    const handleSubmit = () => {
        setCount(eval(count).toString())
    }

    const CircleCount = ({ text }) => {
        return (
            <input className={text === '0' ? 'circle-zero' : 'circle-func'} type="button" value={text} onClick={handleClick} />
        )
    }

    const ResetCount = () => {
        return (
            <input className='reset-count' type="button" value="AC" onClick={resetClick} />
        )
    }

    const CircleSubmit = () => {
        return (
            <input className='reset-count' type="button" value="=" onClick={handleSubmit} />
        )
    }

    return (
        <>
            <Link to={'/'}>
                <BiArrowBack className='icon arrow' />
            </Link>
            <div className='d-flex justify-content-center align-items-center calc'>

                <div className='box-calc'>
                    <div className='box-count'>
                        <span className='count-display'>{!count ? 0 : count}</span>
                    </div>
                    <div className='box-func d-flex justify-content-center'>
                        <ResetCount />
                        <CircleCount text="+/-" />
                        <CircleCount text="%" />
                        <CircleCount text="/" />
                    </div>
                    <div className='box-func d-flex justify-content-center'>
                        <CircleCount text="7" />
                        <CircleCount text="8" />
                        <CircleCount text="9" />
                        <CircleCount text="*" />
                    </div>
                    <div className='box-func d-flex justify-content-center'>
                        <CircleCount text="4" />
                        <CircleCount text="5" />
                        <CircleCount text="6" />
                        <CircleCount text="-" />
                    </div>
                    <div className='box-func d-flex justify-content-center'>
                        <CircleCount text="1" />
                        <CircleCount text="2" />
                        <CircleCount text="3" />
                        <CircleCount text="+" />
                    </div>
                    <div className='box-func d-flex justify-content-center'>
                        <CircleCount text="0" />
                        <CircleCount text="," />
                        <CircleSubmit />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;