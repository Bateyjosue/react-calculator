import {useState} from 'react'
import calculate from "../logic/computer"


const functionsCalc = ['AC', '+/-', '%', '÷', '7', '8','9','×','4','5','6','-','1','2','3','+' ]

const Calculator = () => {
    const [calculator, setCalculator] = useState({
        total: 0,
        next: null,
        operation: null
    })

    const handleClick = (e) => {
        const current = e.target.textContent
        const calc = calculate(calculator, current)
        setCalculator(calc)
    }
    const {total, next, operation} = calculator
  return (
    <section className='border-2 border-white m-2 h-[100%] w-full lg:w-[20%] lg:h-[70%] rounded-lg'>
        <h2 
            className="h-20 border-b-2 border-white  rounded-s-sm flex justify-end items-center text-4xl px-2">
            { next || operation || total || 0 }
        </h2>
        <ul className="grid grid-cols-4 grid-rows-5 h-[88%] lg:h-[84%] text-4xl lg:text-xl">
            {functionsCalc.map((item, index) => {
                return (
                    <li key={index} className="w-[100%]">
                        <button 
                            className="w-full h-full border border-white lg:border-none  rounded-s-sm flex justify-center items-center hover:bg-black/50"
                            onClick={handleClick}>
                            {item}
                        </button>
                    </li>
                )
            })}
            <li className="col-span-2">
                <button 
                    className="w-full h-full border border-white lg:border-none  rounded-s-sm flex justify-center items-center hover:bg-black/50"
                    onClick={handleClick}
                    >
                    0
                </button>
            </li>
            <li>
                <button 
                    className="w-full h-full border border-white lg:border-none  rounded-s-sm flex justify-center items-center hover:bg-black/50"
                    onClick={handleClick}
                    >
                    .
                </button>
            </li>
            <li>
                <button 
                    className="w-full h-full border border-white lg:border-none  rounded-s-sm flex justify-center items-center hover:bg-black/50"
                    onClick={handleClick}
                    >
                    =
                </button>
            </li>
        </ul>
    </section>
  )
}

export default Calculator