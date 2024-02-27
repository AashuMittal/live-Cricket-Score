import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';

const LiveScore = () => {

  const [data, setdata] = useState([])
  

  
  const fetchData = async() =>{
   
    const res = await fetch("http://localhost:8080/match/live");
    const out = await res.json();
    setdata(out);
  
  }
  useEffect(() => {
    fetchData()
  }, [])


  
  return (
    < div className='container mx-auto py-10'>
    <h1 className='mb-4 text-3xl bg-black text-white rounded-md px-2 py-2 flex space-x-2   font-medium w-fit'>Live 
    <Typewriter
  options={{
    strings: ['Score', 'Cricket'],
    autoStart: true,
    loop: true,
  }}
/>
    </h1>
      <div className='grid grid-cols-3 gap-4'>
          {/* Card */}
         {data.map((e)=>{
          return <div key={e.matchId} className='max-w-md border border-gray-300 rounded-lg p-6 shadow-blue-600 shadow-md'>
          <h1 className='font-semibold text-xl'>{e.teamheading}</h1>
          <p className=' text-base py-2'>{e.matchNumberVenue}</p>
          <hr />
          <div className='flex justify-between pt-2'>
              <h1>{e.battingTeam}</h1>
              <h1 className='font-extrabold'>{e.battingTeamScore} Over</h1>
          </div>
          <h1>{e.bowlTeam}</h1>
          <p className='text-red-500 font-medium'>{
            e.textComplete ? e.textComplete : "Match is Pending"
          }</p>
              </div>
         }) }
      </div>
    </div>

  )
}

export default LiveScore
