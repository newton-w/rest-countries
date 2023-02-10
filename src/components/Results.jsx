import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Results = ({ input }) => {
  const[data, setData] = useState();
  const lowercaseInput = input.toLowerCase();
  // const[curr, setCurr] = useState([]);
  // const[lang, setLang] = useState([]);
  // const[native, setNative] = useState([]);
  // const[neighbours, setNeighbours] = useState([]);
  useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${lowercaseInput}`)
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
                setData(data[0])
            })
    data && console.log(data)

}, [])

  // const GetItems=()=>{
  //   setCurr(data.currencies[0])
  //   setLang(data.languages)
  //   setNative(data.nativeName)
  //   setNeighbours(data.borders)
  // }
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
            <div className='text-LVeryDarkBlue dark:text-white bg-VeryLightGray dark:bg-DVeryDarkBlue flex flex-col items-start lg:gap-32 lg:flex-row lg:justify-between'>
              <div className=' w-80 h-60 lg:w-[35rem] lg:h-[25rem]'>
                <img src={data.flags.png} alt="" className=' object-cover w-full h-full' />
              </div>
              <div className='flex flex-col items-start'>
                <div>
                  <h1 className=' font-Nunito font-bold text-lg pt-12 pb-7'>{data && data.name.official}</h1>
                </div>
                <div>
                  <div className='flex flex-col gap-12 pb-12 lg:flex-row'>
                    <div>
                      <p className=' font-Nunito' ><span className=' font-bold'>Native Name:</span> {data && data.name.common}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Population:</span> {data && data.population}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Region:</span> {data && data.region} </p>
                      <p className=' font-Nunito'><span className=' font-bold'>Sub region:</span> {data.subregion} </p>
                      <p className=' font-Nunito'><span className=' font-bold'>Capital:</span> {data.capital[0]} </p>
                    </div>
                    <div>
                      <p className=' font-Nunito' ><span className=' font-bold'>Top Level domain:</span> {data && data.tld[0]}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Currencies:</span> {data && data.currencies[0]}</p>
                      <p className=' font-Nunito'><span className=' font-bold'>Languages:</span> Berlin </p>
                    </div>
                  </div>
                  <div>
                    <h1 className=' font-Nunito font-bold text-lg pb-6'>Border Countries:</h1>
                    <div className=' flex font-Nunito gap-2 lg:justify-between'>
                      <div className='flex items-center justify-center w-24 h-7 shadow-lg px-5 py-5 rounded cursor-pointer mb-16'>
                        France
                      </div>
                      <div className='flex items-center justify-center w-24 h-7 shadow-lg px-5 py-5 rounded cursor-pointer mb-16'>
                        Germany
                      </div>
                      <div className='flex items-center justify-center w-24 h-7 shadow-lg px-5 py-5 rounded cursor-pointer mb-16'>
                        Netherlands
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Results 