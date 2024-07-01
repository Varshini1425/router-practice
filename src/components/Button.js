import React from 'react'
import Login from '../components/Login'

import {useNavigate} from 'react-router-dom'


const Button = () => {

// flex items-center justify-center  rounded-md p-1 m-1 text-pretty text-white font-semibold transition-colors'
    const navigate = useNavigate();

    const message=()=>{
        alert("successfully submitted")

        navigate('/home')
      }
  return (
    <div>
        <div className='flex items-center justify-center min-h-screen bg-[#836FFF] p-6 py-64 m-8 my-60 rounded-lg'>
        <Login/>
        <button className='bg-[#92C7CF] p-2 mt-4 rounded-md' disabled={Login!='' ? false: true} type='submit' onClick={(e)=>{e.preventDefault(); message()}}>SUBMIT</button>
        </div>
    </div>
  )
}

export default Button