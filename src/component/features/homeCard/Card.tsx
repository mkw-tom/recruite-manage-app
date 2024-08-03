'use client';
import React, { useState } from 'react';
import TaskDescription from './TaskDescription';
import Tasks from './Tasks';
import Mypage from './Mypage';
import { PostType } from '../../../types/typs';
import EditForm from './EditForm';

const Card = ({ card }: { card: PostType }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-md  lg:w-5/12 w-full  h-full mb-24 shadow-xl relative">
      <EditForm open={open} setOpen={setOpen} />
      {/* <header className="flex justify-end bg-blue-800 h-6 rounded-t-md mb-3 items-center">
        <div className="group ">
          <button className="relative " >
            <Settings className="mr-1 text-white"></Settings>
          </button>
          <div
            className="hidden absolute right-2 -top-5 bg-white border-2 rounded-md z-10 group-hover:block"
          >
            <div className="flex py-3">
              <button className="flex px-5 text-red-900 hover:opacity-50">
                <Delete></Delete>
                <span className="ml-2">Delete</span>
              </button>
              <button className="flex border-r-2 px-7 text-blue-900 hover:opacity-50" onClick={toggle}>
                <Edit></Edit>
                <span className="ml-2">Edit</span>
              </button>
            </div>
          </div>
        </div>
      </header> */}

      <main className="p-7">
        <div className="flex items-center relative">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl md:text-2xl border-l-4 border-l-blue-800 pl-3 mb-2">
              {card.name}
            </h1>
            <p className="ml-6">{card.event}</p>
          </div>

          <div className="flex items-center ml-auto  absolute top-1 right-0">
            <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
            <span>選考中</span>
          </div>
        </div>

        <div className="mt-5 bg-gray-100 p-2 rounded-sm">
          <ul className="flex flex-col gap-1">
            <li className="border-l-2 border-l-gray-900 pl-2 text-gray-900">
              開催地： {card.region}
            </li>
            <li className="flex items-center border-l-2 border-l-gray-900 pl-2 text-gray-900">
              開催日時：
              <span>
                {new Date(card.startDate as string)
                  .toLocaleString()
                  .slice(0, -3)}
              </span>
              <span className={`${card.endDate ? 'block' : 'hidden'} mx-2`}>
                {' '}
                〜{' '}
              </span>
              <span className={`${card.endDate ? 'block' : 'hidden'}`}>
                {new Date(card.endDate as string).toLocaleString().slice(0, -3)}
              </span>
            </li>
          </ul>
        </div>

        <Mypage card={card} />

        <Tasks card={card} />

        <div className="flex flex-col items-center mt-5 gap-5">
          <TaskDescription card={card} />

          <div className="flex w-full h-auto justify-end gap-3 ml-auto mt-5 md:mt-auto">
            <button className="w-2/6 h-10 bg-gray-500 text-white font-bold rounded-md">
              辞退
            </button>
            <button className="w-4/6 h-10 bg-blue-500 hover:opacity-70 text-white font-bold rounded-md">
              完了
            </button>
          </div>
        </div>
      </main>
      {/* <div className="flex items-center gap-4 justify-start mr-3">
        <button className="flex items-center gap-1 text-gray-500">
          <Edit style={{fontSize: "17px"}}></Edit>
          <span >編集</span>
        </button>
        <button className="flex items-center gap-1 text-gray-500">
          <Delete style={{fontSize: "17px"}}></Delete>
          <span >削除</span>
        </button>
      </div> */}
    </div>
  );
};

export default Card;
