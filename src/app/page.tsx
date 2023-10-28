'use client';
import Image from 'next/image'

import { useState } from 'react'


function Header() {
  return (<div className='display-table mt-3 max-w-prose p-1'>
    <h1 className='mt-6 text-3xl font-medium text-black'>Task 4</h1>
    <table className="mt-3 regid w-full max-w-prose">
      <thead></thead>
      <tbody>
      <tr>
        <td>Registration number</td>
        <td>21BCE5841</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>Srevin Saju</td>
      </tr>
      </tbody>
    </table>
    </div>)

}


function AgeCalculate() {
  let [date, dateChange] = useState(new Date());
  

  let handleChange = (e: any) => {
    let date = new Date(e.target.value)
    dateChange(date)
  }
  let now = new Date();

  return (
    <div>
      <p className='text-2xl text-center'>Enter your date of birth:</p>
    <input className='text-2xl text-center mx-auto w-full p-10 rounded-lg m-3 border-8 border-sky-500 border-black' type='date' onChange={handleChange}>
      
    </input>

    <p className='text-xl text-center'>Your age is <strong>{now.getUTCFullYear() - date.getUTCFullYear()}</strong></p>
    </div>
  )
} 

export default function Home() {
 

  return (
    <main className="w-full h-screen">
      <Header />

      
      <div className='w-full max-w-prose mx-auto'>
      <h1 className='my-6 font-bold text-3xl'>Age Calculator</h1>
      
      <AgeCalculate />
      </div>
    </main>
  )
}
