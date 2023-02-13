import React, { useState, useEffect } from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
const Countries = () => {
    const [input, setInput] = useState(null)
    const [data, setData] = useState()



    return (
        <>
            <Input input={input} setInput={setInput} data={data} setData={setData} />
            <div className='flex flex-col justify-center items-center'>
                <div className='container mx-auto flex flex-col items-center'>
                    <div className='flex flex-col items-center justify-center justify-items-center pt-3 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4'>

                        {
                            data && data.map((item) => {
                                return (
                                    <Link to="/results" state={item} >
                                        <div className=' bg-VeryLightGray dark:bg-DVeryDarkBlue text-LVeryDarkBlue dark:text-white rounded-lg w-[20.375rem] h-[26.063rem]  shadow-lg lg:h-auto lg:w-[16.5rem] lg:pb-3 cursor-pointer' key={item.cca3}>
                                            <div>
                                                <img src={item.flags.png} alt="" className=' w-full h-[12.5rem] object-cover lg:[9.875rem]' />
                                            </div>
                                            <div className=' px-8'>
                                                <h1 className=' py-9 font-Nunito font-bold text-lg lg:py-[2.063rem]'>{item.name.common}</h1>
                                                <div>
                                                    <p className=' font-Nunito' ><span className=' font-bold'>Population:</span> {item.population}</p>
                                                    <p className=' font-Nunito' key={uuidv4()}><span className=' font-bold'>Region:</span> {item.region}</p>
                                                    <p className=' font-Nunito'><span className=' font-bold'>Capital:</span> {item.capital} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Countries