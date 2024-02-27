import React, { useEffect, useState } from 'react'

const AllMatch = () => {
  const [data, setdata] = useState([])
  const fetchData=async()=>{
    const res=await fetch("http://localhost:8080/match/update")
    const data = await res.json();
    setdata(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)
  
  return (
    <div className='container mx-auto'>
    <h1 className='my-10 text-3xl bg-black text-white rounded-md px-2 py-2  font-medium w-fit'>All Match</h1>
    {data.map((e)=>{
     return (
     <>
    <div className='pb-10 space-y-3'>
    <h2 className='font-bold text-lg shrink-0 p-4 bg-slate-200 shadow-md shadow-zinc-500'>{new Date(e.date).toLocaleString()}</h2>
    <div className='grid grid-cols-3 bg-slate-200 shadow-md shadow-zinc-500'>
<h2 className='font-bold text-md shrink-0 p-4'>{e.matchNumberVenue}</h2>
  <h2 className='font-bold text-md shrink-0 p-4 ml-32'>{e.teamheading}</h2>
  <h3 className='font-bold text-lg shrink-0 p-4'>{new Date(e.date).toLocaleString()}</h3>
  
</div>
    </div>
     </>
     )
    })}
      
    </div>
  )
}

export default AllMatch
