import React, { useState, useEffect } from 'react'
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai'
const Countries = () => {
    const [active, setActive] = useState('hidden')
    const [input, setInput] = useState('')
    // const [finalinput, setFinalinput] = useState('')
    const [data, setData] = useState()
    const [filter, setFilter] = useState([])
    const [choice, setChoice] = useState('Filter by Region')
    const HandleClick = () => {
        setActive((prev) => prev === 'flex' ? 'hidden' : 'flex')
    }

    // Load all the data when the website loads
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (response.ok) {
                    return (
                        response.json()
                    )
                } else {
                    throw new Error(response.statusText)
                }
            })
            .then((data) => {
                setData(data)
            })
        data && console.log(data)
    }, [])
    useEffect(() => {
        if (input) {
            fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`)
                .then(response => {
                    if (response.ok) {
                        return (
                            response.json()
                        )
                    } else {
                        throw new Error
                    }
                })
                .then((data) => {
                    setData(data)
                })
        }

    }, [input])

    useEffect(() => {
        if (filter) {
            fetch(`https://restcountries.com/v3.1/region/${filter}`)
                .then(response => {
                    if (response.ok) {
                        return (
                            response.json()
                        )
                    } else {
                        throw new Error
                    }
                })
                .then((data) => {
                    setData(data)
                })
        }
    }, [filter])

    const inputHandler = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const AllRegions = (e) => {
        setFilter('')
        setChoice('Filter by Region')
        HandleClick()
        e.preventDefault();
    }
    const America = (e) => {
        setFilter('america')
        setChoice('America')
        HandleClick()
        e.preventDefault();
    }
    const Europe = (e) => {
        setFilter('europe')
        setChoice('Europe')
        HandleClick()
        e.preventDefault();
    }
    const Africa = (e) => {
        setFilter('Africa')
        setChoice('Africa')
        HandleClick()
        e.preventDefault();
    }
    const Asia = (e) => {
        setFilter('Asia')
        setChoice('Asia')
        HandleClick()
        e.preventDefault();
    }
    const Oceana = (e) => {
        setFilter('Oceania')
        setChoice('Oceania')
        HandleClick()
        e.preventDefault();
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='container mx-auto flex flex-col items-center'>
                <div>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:w-full'>
                        <div className='flex justify-center pt-[1.875rem] pb-[3.125rem] rounded md:justify-start'>
                            <div className='flex items-center justify-center gap-8 h-[3.75rem] w-[26.563rem] shadow-lg '>
                                <AiOutlineSearch className=' cursor-pointer' />
                                <input type="search" placeholder='search for a country..' className=' py-3 focus:outline-none font-Nunito' onChange={inputHandler} />
                            </div>
                        </div>
                        <div className=' gap-1 flex flex-col'>
                            <div className='flex items-center justify-between  w-[15.625rem] h-[3.75rem] shadow-lg px-5 rounded cursor-pointer' onClick={HandleClick}>
                                <input type="button" value={choice} />
                                <AiOutlineDown />
                            </div>
                            <div className={`absolute ${active} flex-col justify-center w-[15.625rem] shadow-lg rounded h-44 font-Nunito pl-5 bg-white  translate-y-[4rem]`}>
                                <a href="/" onClick={AllRegions}>All Regions</a>
                                <a href="/" onClick={Africa}>Africa</a>
                                <a href="/" onClick={America}>America</a>
                                <a href="/" onClick={Asia}>Asia</a>
                                <a href="/" onClick={Europe}>Europe</a>
                                <a href="/" onClick={Oceana}>Oceania</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center justify-items-center pt-3 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4'>

                        {
                            data && data.
                                // filter((data) => {
                                //     if(setFilter == 'America'){
                                //         return data
                                //     }else if(setFilter == 'Africa' ){
                                //         return data
                                //     }else if(setFilter == 'Asia'){
                                //         return data
                                //     }else if(setFilter == 'Oceania'){
                                //         return data
                                //     }
                                // filter((data) => {
                                //     if (setInput == "") {
                                //         return data
                                //     } else if (data.input.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                                //         return data
                                //     }
                                // }).
                                map((item, key) => {
                                    return (
                                        <div className='bg-white rounded-lg w-[20.375rem] h-[26.063rem]  shadow-lg lg:h-auto lg:w-[16.5rem] lg:pb-3 cursor-pointer' key={key}>
                                            <div>
                                                <img src={item.flags.png} alt="" className=' w-full h-[12.5rem] object-cover lg:[9.875rem]' />
                                            </div>
                                            <div className=' px-8'>
                                                <h1 className=' py-9 font-Nunito font-bold text-lg lg:py-[2.063rem]'>{item.name.common}</h1>
                                                <div>
                                                    <p className=' font-Nunito' ><span className=' font-bold'>Population:</span> {item.population}</p>
                                                    <p className=' font-Nunito'><span className=' font-bold'>Region:</span> {item.region}</p>
                                                    <p className=' font-Nunito'><span className=' font-bold'>Capital:</span> {item.capital} </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries