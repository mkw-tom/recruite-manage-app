import React from 'react'
import Header from '../component/common/Header'
import "../index.css"
import CardList from '../component/scheduleTools/CardList'
import BusinessIcon from '@mui/icons-material/Business';

const Home = () => {
  return (
    <div className='w-full h-auto '>
      <Header />
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
      
      <div className="flex flex-col fixed bottom-20 right-3 items-center">
        <button className=" bg-blue-600 opacity-70 w-16 h-16 rounded-full shadow-xl text-white text-xl font-bold">＋</button>
        {/* <p className="text-blue-800 flex">企業を追加</p> */}
      </div>
    </div>
  )
}

export default Home