import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import React from "react";
import { PostType } from "../../typs";

const Tasks = ({card}: {card: PostType}) => {
  return (
    <div className="flex justify-around items-center mt-4">
      <div className="flex flex-col items-center text-center w-4/12">
        <h2 className="mb-3 font-bold">現在のタスク</h2>
        <p className="rounded-full w-5 h-5 bg-green-500 mr-2 animate-pulse ml-2"></p>
        <p className="font-bold mt-1">ES提出</p>
      </div>
      <div className="w-2/12 text-center text-green-500"><KeyboardDoubleArrowRight></KeyboardDoubleArrowRight></div>
      <div className="flex flex-col items-center text-center w-4/12">
        <h2 className="mb-3 font-bold">次のタスク</h2>
        <p className="rounded-full w-5 h-5 bg-gray-300 mr-2 ml-2"></p>
        <p className="font-bold mt-1">面接</p>
      </div>
    </div>
    // <div>
    //   <div className="flex bg-gray-200 w-full h-16 mt-5 items-center shadow-md rounded-sm px-5 ">
    //     <p className="rounded-full w-5 h-5 bg-green-500 mr-2 animate-pulse"></p>
    //     <h2 className="font-bold">ES提出</h2>
    //     <p className="ml-auto">結果待ち</p>
    //   </div>
    // </div>
  );
};

export default Tasks;
