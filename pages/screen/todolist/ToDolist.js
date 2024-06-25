import React from 'react'
import Navbar from './components/navbar/Navbar'
import Userlist from './components/userlist/Userlist'


export default function ToDolist() {
  return (
    <div className=' p-3 overflow-y-auto w-full h-[calc(100vh)]'>
      <Navbar />
      <Userlist />

    </div>
  )
}
