'use client';
import React from 'react';
import TaskDescription from './TaskDescription';
import Tasks from './Tasks';
import Mypage from './Mypage';
import { CheckCircle } from '@mui/icons-material';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import TaskButtons from './TaskButtons';
import useSituationJudge from '../../../hooks/useSituationJudge';

const CardDetail = () => {
  const { selectPost, current } = useSelectPost();
  const taskJudge = useSituationJudge();

  return (
    <div className="bg-white rounded-md lg:w-full border-2 w-full h-auto mb-12 relative overflow-y-auto">
      <main className="p-7">
        <div className="flex items-center relative">
          <div className="flex flex-col gap-1">
            {/* <input type="radio" className="w-3 h-3" /> */}
            <h1 className="font-bold text-xl md:text-2xl border-l-4 border-l-blue-800 pl-3">
              {selectPost?.name}
            </h1>
            <p className="ml-6">{selectPost?.event}</p>
          </div>

          {selectPost?.completed ? (
            <div className="flex items-center ml-auto  absolute top-1 right-0">
              <CheckCircle className="text-orange-500 w-4 h-4"></CheckCircle>
              <span className="font-bold ml-1">内定・参加確定</span>
            </div>
          ) : (
            <div className="flex items-center ml-auto  absolute top-1 right-0 ">
              {taskJudge(current?.situation as string)}
              <span className="ml-1 font-bold">{current?.situation}</span>
            </div>
          )}
        </div>

        <div className="mt-5 bg-gray-100 p-2 rounded-sm">
          <ul className="flex flex-col gap-1">
            <li className="border-l-2 border-l-gray-900 pl-2 text-gray-900">
              開催地： {selectPost?.region}
            </li>
            <li className="flex items-center border-l-2 border-l-gray-900 pl-2 text-gray-900">
              開催日時：
              <span>
                {new Date(selectPost?.startDate as string)
                  .toLocaleString()
                  .slice(0, -3)}
              </span>
              <span
                className={`${selectPost?.endDate ? 'block' : 'hidden'} mx-2`}
              >
                {' '}
                〜{' '}
              </span>
              <span className={`${selectPost?.endDate ? 'block' : 'hidden'}`}>
                {new Date(selectPost?.endDate as string)
                  .toLocaleString()
                  .slice(0, -3)}
              </span>
            </li>
          </ul>
        </div>
        <Mypage />

        <Tasks />

        <div className="flex flex-col items-center mt-5 gap-5">
          <TaskDescription />
          <TaskButtons />
        </div>
      </main>
    </div>
  );
};

export default CardDetail;
