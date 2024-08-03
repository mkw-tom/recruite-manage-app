import { ArrowRight, CheckCircle } from '@mui/icons-material';
import React from 'react';

const DesignCard = ({
  task,
  situation,
}: {
  task: string;
  situation: string;
}) => {
  const taskJudge = (situation: string) => {
    if (situation === '結果待ち') {
      return (
        <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
      );
    } else if (situation === '未完了') {
      return <p className="w-2 h-2 bg-gray-400 rounded-full"></p>;
    } else if (situation === '落選') {
      return <p className="w-2 h-2 bg-red-500 rounded-full"></p>;
    } else {
      return (
        <CheckCircle
          className="text-orange-500"
          style={{ fontSize: '8px' }}
        ></CheckCircle>
      );
    }
  };

  return (
    <div className="w-72 md:w-5/12  h-auto bg-white shadow-md mx-auto mt-8 mb-5 rounded-sm">
      <div className="bg-blue-900 rounded-t-sm h-3 w-full"></div>

      <div className="p-2">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <h1 style={{ fontSize: '10px' }}>株式会社-------</h1>
            <p style={{ fontSize: '6px' }}>{task}</p>
          </div>
          <div className="flex ml-auto">
            {/* <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
             */}
            {taskJudge(situation)}
            <p style={{ fontSize: '6px' }}>{situation}</p>
          </div>
        </div>
        <div className="bg-gray-100 w-full h-5 rounded-sm mt-3 flex flex-col gap-1 pl-2">
          <p className="w-12 h-1 bg-gray-300 rounded-full mt-1"></p>
          <p className="w-20 h-1 bg-gray-300 rounded-full "></p>
        </div>
        <div className="bg-gray-100 w-full h-5 rounded-sm mt-3 flex flex-col gap-1 pl-2">
          <p className="w-12 h-1 bg-gray-300 rounded-full mt-1"></p>
          <p className="w-20 h-1 bg-gray-300 rounded-full "></p>
        </div>

        <div className="flex mt-3">
          <div className="w-5/12 flex flex-col items-center">
            <p style={{ fontSize: '7px' }}>現在のタスク</p>
            <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
            <p className="w-8 h-1 bg-gray-300 rounded-full mt-1"></p>
          </div>
          <div className="w-2/12"></div>
          <div className="w-5/12 flex flex-col items-center">
            <p style={{ fontSize: '7px' }}>次のタスク</p>
            <p className="w-2 h-2 bg-gray-400 rounded-full"></p>
            <p className="w-11 h-1 bg-gray-300 rounded-full mt-1"></p>
          </div>
        </div>

        <div className="flex flex-col mt-3">
          <div className="flex border-y-2 w-full items-center">
            <ArrowRight style={{ fontSize: '10px' }} />
            <p className="w-11 h-1 bg-gray-300 rounded-full"></p>
          </div>

          <div className="flex w-full gap-1 ml-auto rounded-b-md mt-2">
            <p className="bg-red-500 w-2/6 rounded-sm"></p>
            <p className="bg-orange-500 w-4/6 h-3 rounded-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
