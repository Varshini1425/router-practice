import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { setInput,setPassword } from '../features/userLoginSlice';

const Login = () => {

    const userName= useSelector((state)=> state.value)
    const passWord = useSelector((state)=> state.value)

    const dispatch = useDispatch();
    // const message=()=>{
    //     alert("successfully submitted")
    //   }
    


  return (
    <div>
        
        <h1 className='text-[#EEEDEB] text-3xl'>Login to the React Learning Website..!</h1>
        <form>
            <label className=' pt-5 font-medium grid justify-center'>Enter your fields
                <br></br>Username:
                <input  type='text' value={userName} maxLength={15} className='text-slate-600 rounded-md m-2 font-medium' onChange={(e)=> dispatch(setInput(e.target.value))}></input>
                <br></br>Password:
                <input  type='password' value={passWord} maxLength={15} className='text-slate-600 rounded-md m-2 font-medium' onChange={(e)=> dispatch(setPassword(e.target.value))} ></input>
                {/* <button className='bg-[#92C7CF] rounded-md p-1 m-1 text-pretty text-white font-semibold transition-colors' disabled={!userName || !passWord ? false: true} type='submit' onClick={(e)=>{e.preventDefault(); message()}}>SUBMIT</button> */}
            </label>
        </form>
       
    </div>
  )
}

export default Login