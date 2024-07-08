import React from "react";

const Tasks = () => {
  return (
    <div className="flex justify-around items-center mt-4">
      <div className="flex flex-col items-center text-center w-4/12">
        <h2 className="mb-3 font-bold">現在のタスク</h2>
        <p className="rounded-full w-5 h-5 bg-green-500 mr-2 animate-pulse ml-2"></p>
        <p className="font-bold mt-1">ES提出</p>
      </div>
      <div className="w-2/12 text-center">→</div>
      <div className="flex flex-col items-center text-center w-4/12">
        <h2 className="mb-3 font-bold">次のタスク</h2>
        <p className="rounded-full w-5 h-5 bg-gray-300 mr-2 ml-2"></p>
        <p className="font-bold mt-1">面接</p>
      </div>
    </div>
  );
};

export default Tasks;
