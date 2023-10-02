// import React from 'react'


const functionsCalc = ['AC', '+/-', '%', ':', '7', '8','9','x','4','5','6','-','1','2','3','+' ]

const Calculator = () => {
  return (
    <section className='border-2 border-white m-2 h-[100%] w-full rounded-lg'>
        <h2 
            className="h-20 border-b-2 border-white rounded-s-sm flex justify-end items-center text-4xl px-2">
            0
        </h2>
        <ul className="grid grid-cols-4 grid-rows-5 h-[88%] text-4xl">
            {functionsCalc.map((item, index) => {
                return (
                    <li key={index} className="w-[100%]">
                        <button 
                            className="w-full h-full border border-white  rounded-s-sm flex justify-center items-center"
                            onClick={() => console.log(item)}>
                            {item}
                        </button>
                    </li>
                )
            })}
            <li className="col-span-2">
                <button className="w-full h-full border border-white  rounded-s-sm flex justify-center items-center">
                    0
                </button>
            </li>
            <li>
                <button className="w-full h-full border border-white  rounded-s-sm flex justify-center items-center">
                    .
                </button>
            </li>
            <li>
                <button className="w-full h-full border border-white  rounded-s-sm flex justify-center items-center">
                    +
                </button>
            </li>
        </ul>
    </section>
  )
}

export default Calculator