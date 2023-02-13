import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

const Results = () => {
  const [data, setData] = useState();
  const [borderNames, setBorderNames] = useState([]);
  const location = useLocation()

  useEffect(() => {
    setData(location.state)

  }, [])

  // Converting the borders acronames i.e KEN to Kenya, ETH to Ethopia etc.
  useEffect(() => {
    if (location.state.borders && location.state.borders.length > 0) {
      const promises = location.state.borders.map((bor) =>
        fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
          .then((response) => response.json())
          .then((data) => data[0].name.common)
      );

      Promise.all(promises).then((names) => setBorderNames(names));
    } else {
      setBorderNames([]);
    }
    
  }, [location.state.borders]);



  return (
    <div className='container mx-auto mt-10'>
      <div className='container mx-auto flex flex-col items-center w-screen'>
        <div className=' flex flex-col items-start'>
          <Link to='/'>  <div className='text-LVeryDarkBlue dark:text-white flex items-center justify-center gap-2 py-5 w-36 h-8 shadow-lg px-5 rounded cursor-pointer mb-16 left-0'>
            <BiArrowBack />
            <input type="button" value="Back" className='cursor-pointer' />
          </div></Link>
          {
            data &&
            <div className='text-LVeryDarkBlue dark:text-white bg-VeryLightGray dark:bg-DVeryDarkBlue flex flex-col items-start md:justify-between lg:gap-32 lg:flex-row lg:justify-between'>
              <div className=' w-80 h-60 lg:w-[35rem] lg:h-[25rem]'>
                <img src={data.flags.png} alt="" className=' object-cover w-full h-full' />
              </div>
              <div className='flex flex-col items-start'>
                <div>
                  <h1 className=' font-Nunito font-bold text-lg pt-12 pb-7'>{data && data.name.common}</h1>
                </div>
                <div>
                  <div className='flex flex-col gap-12 pb-12 md:flex-row lg:flex-row'>
                    <div>
                      <p className=' font-Nunito' ><span className=' font-bold'>Native Name:</span> {data && data.name.common}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Population:</span> {data && data.population}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Region:</span> {data && data.region} </p>
                      <p className=' font-Nunito'><span className=' font-bold'>Sub region:</span> {data && data.subregion} </p>
                      <p className=' font-Nunito'><span className=' font-bold'>Capital:</span> {data.capital} </p>
                    </div>
                    <div>

                      <p className=' font-Nunito' ><span className=' font-bold'>Top Level domain:</span> {data.tld[0]}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Currencies:</span>
                        {data.currencies[0]}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Languages:</span></p>
                    </div>
                  </div>
                  <div>
                    <h1 className=' font-Nunito font-bold text-lg pb-6'>Border Countries:</h1>
                    <div className='grid grid-cols-3 mb-2 font-Nunito gap-2 lg:justify-between  md:grid-cols-4'>

                      {
                        borderNames && Array.isArray(borderNames) && borderNames.length > 0 ? (borderNames.map((bord, id) => {
                          return (
                            <Link to= "/results/bordercountry" state={bord} >
                            <div className='cursor-pointer flex items-center justify-center w-24 h-7 shadow-lg px-5 py-5 rounded cursor-pointer mb-16 ' key={id}>
                              {bord}
                            </div>
                            </Link>
                          )
                        })) : (<div className='flex items-center justify-center w-26 h-7 shadow-lg px-5 py-5 rounded cursor-pointer mb-16'>
                          No borders
                        </div>)

                      }

                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div >
  )
}

export default Results 