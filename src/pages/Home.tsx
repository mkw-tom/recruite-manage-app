import React, { useState } from 'react'
import Header from '../component/common/Header'
import "../index.css"
import CardList from '../component/scheduleTools/CardList'
import BusinessIcon from '@mui/icons-material/Business';
import AddFrom from '../component/scheduleTools/AddForm';
import AddTaskForm from '../component/addTaskForm/AddTaskForm';

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="w-full h-auto">
      <nav className='bg-white top-20 w-full h-10 fixed shadow-md bg-opacity-65 z-20'>
        <ul className="flex w-full h-full justify-around items-center text-blue-500 font-bold text-center">
          <li className="border-r-2 w-6/12 py-2 border-b-2 border-b-blue-600">全てのイベント</li>
          <li className="w-6/12 py-2">内定・確定済み</li>
        </ul>
      </nav>
      <div className='h-28'></div>

      <main className='w-full h-auto mt-24'>
        <CardList />
      </main>

      <AddFrom open={open} setOpen={setOpen}/>

      
      <div className="flex flex-col fixed bottom-20 lg:bottom-24 right-3 lg:right-10 items-center">
        <p className='text-blue-800 mb-1'>企業を追加</p>
        <button className=" bg-blue-600 opacity-70 w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-xl text-white text-xl lg:text-3xl font-bold" onClick={toggle}>
          ＋
        </button>
      </div>
    </div>
  )
}

export default Home