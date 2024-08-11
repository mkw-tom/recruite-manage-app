import React from 'react';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import useSituationJudge from '../../../hooks/useSituationJudge';

const Tasks = () => {
  const { current, next, selectPostTasks } = useSelectPost();
  const taskJudge = useSituationJudge();
  // const taskJudge = (situation: string) => {
  //   switch (situation) {
  //     case '未完了':
  //       return <p className="w-4 h-4 bg-gray-400 rounded-full mr-1 my-2"></p>;
  //     case '結果待ち':
  //       return (
  //         <p className="w-4 h-4 bg-green-500 animate-pulse rounded-full my-2"></p>
  //       );
  //     case '通過':
  //       return (
  //         <CheckCircle className="text-green-500 w-4 h-4 my-2"></CheckCircle>
  //       );
  //     // case '落選':
  //     //   return <CheckCircle className="text-red-500 w-4 h-4"></CheckCircle>;
  //   }
  // };
  return (
    <>
      {selectPostTasks.length === 0 ? (
        <div className=""></div>
      ) : (
        <div className="flex justify-around items-center mt-4 ">
          <div className="flex flex-col items-center text-center w-4/12  h-24">
            <h2 className="text-red-600 font-bold ">current</h2>
            {/* <p className="rounded-full w-5 h-5 bg-green-500 mr-2 animate-pulse ml-2 mt-5 mb-3"></p> */}
            <div className="flex flex-col items-center">
              {taskJudge(current?.situation as string)}
              <p className="font-bold mt-1">{current?.task}</p>
            </div>
          </div>
          <div
            className={`w-2/12 text-center ${current?.finished ? 'text-green-500' : ''}`}
          >
            <KeyboardDoubleArrowRight></KeyboardDoubleArrowRight>
          </div>
          <div className="flex flex-col items-center text-center w-4/12 h-24">
            <h2 className="text-blue-600 font-bold">next</h2>
            <div className="flex flex-col items-center">
              {taskJudge(next?.situation as string)}
              <p className="font-bold mt-1">{next?.task}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tasks;
