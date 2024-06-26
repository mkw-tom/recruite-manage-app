import React from 'react'
import Header from '../component/common/Header'
import Table from '../component/scheduleTools/Table';
import "../index.css"

const Home = () => {
  return (
    <div className='w-full h-auto '>
      <Header />
      <div className=' flex flex-col w-full mt-24 h-auto'>
        <Table />
      </div>
    </div>
  )
}

export default Home