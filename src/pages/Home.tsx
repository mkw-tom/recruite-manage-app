import React, { useState } from 'react'
import Header from '../component/common/Header'
import "../index.css"
import CardList from '../component/scheduleTools/CardList'
import BusinessIcon from '@mui/icons-material/Business';
import AddFrom from '../component/addForm/AddForm';
import AddTaskForm from '../component/addTaskForm/AddTaskForm';

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="w-full h-auto">

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