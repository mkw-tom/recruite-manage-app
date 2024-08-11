import { ArrowDropDown, CheckCircle, Delete, Edit } from '@mui/icons-material';
import React from 'react';

const DesignCard = () => {
  const taskJudge = (situation: string) => {
    switch (situation) {
      case '未完了':
        return <p className="w-2 h-2 bg-gray-300 rounded-full mr-1"></p>;
      case '結果待ち':
        return (
          <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
        );
      case '通過':
        return (
          <CheckCircle
            className="text-green-500 w-2 h-2"
            style={{ fontSize: '8px' }}
          ></CheckCircle>
        );
      // case '落選':
      //   return <CheckCircle className="text-red-500 w-4 h-4"></CheckCircle>;
    }
  };
  const list = [
    { t: '説明会', s: '通過', c: false, n: false },
    { t: 'ES提出', s: '結果待ち', c: true, n: false },
    { t: '面接（面談）', s: '未完了', c: false, n: true },
  ];
  return (
    <div className="w-6/12 mx-4 h-auto">
      <div className="w-full h-auto flex justify-end mt-3 gap-1">
        <button className="rounded-full w-9 h-3 bg-white shadow-sm"></button>
        <button className="rounded-full w-9 h-3 bg-white shadow-sm"></button>
      </div>
      <div className="w-full h-auto bg-white shadow-md mx-auto mt-1 mb-5 rounded-sm">
        <div className="p-2">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <h1
                style={{ fontSize: '10px' }}
                className="border-l-2 border-blue-800 pl-1"
              >
                株式会社-------
              </h1>
              <p style={{ fontSize: '6px' }} className="mt-1 mr-5">
                長期インターン
              </p>
            </div>
            <div className="flex ml-auto items-center">
              <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
              <p style={{ fontSize: '5px', marginLeft: '2px' }}>結果待ち</p>
            </div>
          </div>
          <div className="bg-gray-100 w-full h-5 rounded-sm mt-2 flex flex-col gap-1 pl-2">
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
              <ArrowDropDown style={{ fontSize: '10px' }} />
              <p className="w-11 h-1 bg-gray-300 rounded-full"></p>
            </div>
            <ul className="">
              {list.map((li, index) => (
                // eslint-disable-next-line react/jsx-key
                <li key={index} className="flex h-auto w-full border-b-2 p-1">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      {/* <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full mr-1"></p> */}
                      {taskJudge(li.s)}
                      <p style={{ fontSize: '7px', marginLeft: '1px' }}>
                        {li.t}
                      </p>
                    </div>
                    <div>
                      <p className="w-12 h-1 bg-gray-300 rounded-full mt-1"></p>
                      <p className="w-20 h-1 bg-gray-300 rounded-full mt-1"></p>
                    </div>
                  </div>
                  <div className="ml-auto mr-1 gap-1">
                    <Edit
                      style={{
                        fontSize: '9px',
                        color: 'darkRed',
                        marginLeft: 'auto',
                      }}
                    ></Edit>
                    <Delete
                      style={{ fontSize: '9px', color: 'darkblue' }}
                    ></Delete>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex w-full gap-1 ml-auto rounded-b-md mt-2">
              <p className="bg-gray-500 w-2/6 rounded-sm"></p>
              <p className="bg-blue-800 w-4/6 h-3 rounded-sm"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
