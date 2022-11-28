import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Nav from './Nav'

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const HandleSubmit =(e)=>{
  e.preventdefault()


  if(!email || !password ){

    toast.error('please provide information in the fields provided')

  }
  else {

   axios.post('http://localhost:8000/api/Register/post' , {email , password})
   .then(()=>{

    setEmail('')
    setPassword('')

   }).catch((err)=> toast.error(err.response.data))

   toast.success('User added successfully')

  }


}

console.log(email);
console.log(password);


  return (
    <div className='w-full min-h-screen'>

      <Nav />
    
        <div className="row" onSubmit={HandleSubmit}    >
          <form  className=' absolute top-1/4 flex flex-col items-center'>
            <h1 className='font-bold text-6xl text-[#3C7699]'>Please Register your account here</h1>

          <div className='flex flex-col items-center mt-11 w-full gap-8'>
           
          <div className='flex flex-col items-center justify-center w-full gap-5'>
              <label htmlFor="email" className='font-bold text-3xl'>Email</label>
              <input type="email" className='w-full max-w-2xl h-14 rounded-sm outline-none p-5' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className='flex flex-col items-center justify-center w-full gap-5'>
              <label htmlFor="password" className='font-bold text-3xl'>Password</label>
              <input type="password" className='w-full max-w-2xl h-14 rounded-sm outline-none p-5'value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>

          </div>

            <button className='w-full bg-[#40453e] text-white mt-6 max-w-2xl h-12 font-bold text-2xl' type='submit'>Submit</button>


          </form>

        </div>

  
      

    </div>
  )
}

export default Register