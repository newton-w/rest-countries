import React, { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const Nav = () => {

  const [theme, setTheme] = useState(null)
  const [mode, setMode] = useState(null)

// Setting device preffered color scheme
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme : dark)').matches){
      document.documentElement.classList.add("dark");
      setMode('Dark Mode')
    }else{
      document.documentElement.classList.remove("dark");
      setTheme('light Mode')
    }
        
  },[])
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
     
    } else {
      document.documentElement.classList.add("dark");
     
    }
  }, [theme])

  const Darkk = () => {
    setTheme((prev) => prev === 'dark' ? '' : 'dark')
    setMode((prev) => prev === 'Dark Mode' ? 'Light Mode' : 'Dark Mode')
  }

  return (
    <nav className=' mx-auto w-screen flex items-center justify-between h-[6.25rem] px-5 drop-shadow-md bg-VeryLightGray dark:bg-DVeryDarkBlue lg:container'>
      <div className='font-Nunito font-extrabold text-LVeryDarkBlue dark:text-white'>
       Where in the world??
      </div>
      <div>
        <div className='flex font-Nunito font-semibold items-center gap-3 text-LVeryDarkBlue dark:text-white cursor-pointer' onClick={Darkk}>{theme === 'dark' ? < BsSun /> : <BsMoonStars />}{mode}</div>
      </div>
    </nav>

  )
}

export default Nav