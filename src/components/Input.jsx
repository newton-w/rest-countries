import React, { useState, useEffect } from 'react'
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'

const Input = ({ input, setInput, data, setData }) => {
    const [active, setActive] = useState('hidden')
    const [choice, setChoice] = useState('Filter by Region')
    const [region, setRegion] = useState('')

    const AllCountries = () => {
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
             .catch(err => {
                console.log(err)
            })

            
            
    }

    const Filter = () => {
        fetch(`https://restcountries.com/v3.1/region/${region}`)
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
            .catch(err => {
                console.log('Error:', err);
              });
    }
    const HandleInput = () => {
        fetch(`https://restcountries.com/v3.1/name/${input}?fulltext=true`)
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
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        AllCountries()

    }, [])
    useEffect(() => {
        Filter()
    }, [region])
    useEffect(() => {
        HandleInput()
    }, [input])

    const HandleClick = () => {
        setActive((prev) => prev === 'flex' ? 'hidden' : 'flex')
    }

    const inputHandler = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const AllRegions = (e) => {
        setChoice('Filter by Region')
        AllCountries()
        HandleClick()
        e.preventDefault()

    }
    const America = (e) => {

        setChoice('America')
        setRegion('America')
        HandleClick()
        e.preventDefault()

    }
    const Europe = (e) => {
        setChoice('Europe')
        setRegion('Europe')
        HandleClick()
        e.preventDefault()

    }
    const Africa = (e) => {
        setChoice('Africa')
        setRegion('Africa')
        HandleClick()
        e.preventDefault()

    }

    const Asia = (e) => {
        setChoice('Asia')
        setRegion('Asia')
        HandleClick()
        e.preventDefault()
    }
    const Oceania = (e) => {
        setChoice('Oceania')
        setRegion('Oceania')
        HandleClick()
        e.preventDefault()
    }

    return (
        <>
            <div className='container mx-auto flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:justify-between lg:w-full'>
                <div className=' flex justify-center  pt-[1.875rem] pb-[3.125rem] rounded md:justify-start'>
                    <div className='flex items-center justify-center gap-8 h-[3.75rem] w-[26.563rem] shadow-lg  '>
                        <AiOutlineSearch className=' cursor-pointer text-LVeryDarkBlue dark:text-white' />
                        <input type="search" placeholder='search for a country..' className='text-LVeryDarkBlue dark:text-white bg-VeryLightGray dark:bg-DVeryDarkBlue py-3 focus:outline-none font-Nunito' onChange={inputHandler} />
                    </div>
                </div>
                <div className='gap-1 flex flex-col  '>
                    <div className='text-LVeryDarkBlue dark:text-white flex items-center justify-between  w-[15.625rem] h-[3.75rem] shadow-lg px-5 rounded cursor-pointer' onClick={HandleClick}>
                        <input type="button" value={choice} />
                        <AiOutlineDown />
                    </div>
                    <div className={`text-LVeryDarkBlue dark:text-white bg-VeryLightGray dark:bg-DVeryDarkBlue absolute ${active} flex-col justify-center w-[15.625rem] shadow-lg rounded h-44 font-Nunito pl-5 bg-white  translate-y-[4rem]`}>
                        <a href="/" onClick={AllRegions}>All Regions</a>
                        <a href="/" onClick={Africa}>Africa</a>
                        <a href="/" onClick={America}>America</a>
                        <a href="/" onClick={Asia}>Asia</a>
                        <a href="/" onClick={Europe}>Europe</a>
                        <a href="/" onClick={Oceania}>Oceania</a>


                    </div>
                </div>
            </div>

            {/* <Outlet /> */}
        </>
    )
}

export default Input