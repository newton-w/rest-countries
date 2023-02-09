import React from 'react';
import { BsMoonStars } from 'react-icons/bs';

const Nav = () => {

  // const [theme, setTheme] = useState('light')

  // useEffect(() => {
  //   if(theme === "dark"){
  //     document.documentElement.classList.remove("dark");
  //   }else{
  //     document.documentElement.classList.add("dark");
  //   }
  // },[theme])

  return (
    <nav className=' mx-auto w-screen flex items-center justify-between h-[6.25rem] px-5 shadow-md lg:container bg-white'>
      <div>
        <h1 className=' font-Nunito font-extrabold'>Where in the world??</h1>
      </div>
      <div>

        <div className='flex font-Nunito font-semibold items-center gap-3'>< BsMoonStars className=' cursor-pointer' />Dark Mode</div>
      </div>
    </nav>
  )
}

export default Nav