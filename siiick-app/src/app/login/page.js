'use client'
import Link from 'next/link';
import { useState } from 'react'
export default function Page(){
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailExp = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    const passwordExp = /^[\S]{6,16}/

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'email') {
          setEmail(value);
          setIsEmailValid(emailExp.test(value));
        } else if (name === 'password') {
          setPassword(value);
          setIsPasswordValid(passwordExp.test(value));
        }
      };

    return (
    <section className="flex flex-col items-center mt-8">
        <h1 className='text-3xl text-black font-black place-center'>Login</h1>
        <div className="flex flex-col place-items-center w-1/4 m-4 border rounded border-slate-300 p-8 bg-white ">
            <form id="loginform" action="/" method="post"  className="flex flex-col mb-4 justify-center" >
                <label className="text-black font-semibold" htmlFor="email">Email  <div className="text-sm text-slate-500">*required</div></label>
                <input className={`px-4 text-black rounded ${!isEmailValid ? 'border-2 border-red-500 focus:ring focus:ring-red-500' : ''}`} type="email" id="email" name="email" placeholder='email' onChange={handleChange} 
                minLength="1" pattern='^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$' required />

                <label className="text-black font-semibold mt-8" htmlFor="password">Password  <div className="text-sm text-slate-500">*required</div></label>
                <input className={`px-4 text-black rounded ${!isPasswordValid ? 'border-2 border-red-500 focus:ring focus:ring-red-500' : ''}`} type="password" id="password" name="password" placeholder='password'
                onChange={handleChange} pattern='^[\S]{6,16}' required />

                <button type="submit" form="loginform" className='rounded mt-8 bg-slate-900 py-2 px-4 text-md text-white font-black hover:bg-slate-700 active:bg-slate-700'>Login</button>
        </form>
        <Link href="#" className='text-blue-500 mt-4 place-self-center hover:text-blue-700'>Forgot password?</Link>
        <hr className='my-4 w-3/4 place-self-center'/>
        <button className='align-self-center rounded bg-blue-900 py-2 px-4 text-md text-white font-bold hover:bg-slate-700 active:bg-slate-700'>Create Account</button>
        </div>
    </section>
    )
}