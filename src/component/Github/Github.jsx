import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/sangharsh2015413')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     setData(data)
    //   })
    // },[])
  return (
    <div className='bg-gray-600 text-center text-white m-4 p-4 text-3xl'>Github Follower :{data.followers}
    <img src={data.avatar_url} alt="Github Picture" width={200} height={200}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sangharsh2015413')
    return response.json()
}