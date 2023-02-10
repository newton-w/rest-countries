import React, { useEffect, useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const Nav = () => {

  const [theme, setTheme] = useState('dark')
  const [mode, setMode] = useState('Light Mode')

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme])

  const Darkk = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    setMode((prev) => prev === 'Light Mode' ? 'Dark Mode' : 'Light Mode')
  }

  return (
    <nav className=' mx-auto w-screen flex items-center justify-between h-[6.25rem] px-5 shadow-md bg-VeryLightGray dark:bg-DVeryDarkBlue lg:container'>
      <div>
        <h1 className='font-Nunito font-extrabold text-LVeryDarkBlue dark:text-white'>Where in the world??</h1>
      </div>
      <div>
        <div className='flex font-Nunito font-semibold items-center gap-3 text-LVeryDarkBlue dark:text-white cursor-pointer' onClick={Darkk}>{theme === 'dark' ? < BsSun /> : <BsMoonStars />}{mode}</div>
      </div>
    </nav>

  )
}

export default Nav