import { ArrowRight } from "@mui/icons-material";
import React from "react";

const DesignCard = () => {
  return (
    <div className="w-11/12 h-auto bg-white shadow-md mx-auto mt-8 mb-10">
      <div className="bg-blue-900 rounded-t-md h-3 w-full"></div>

      <div className="p-2">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <h1 style={{ fontSize: "10px" }}>株式会社-------</h1>
            <p style={{ fontSize: "6px" }}>インターンシップ短期</p>
          </div>
          <div className="flex ml-auto">
            <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
            <p style={{ fontSize: "6px" }}>選考中</p>
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

        <div className="flex">
          <div className="w-5/12 flex flex-col items-center">
            <p style={{ fontSize: "7px" }}>現在のタスク</p>
            <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
            <p className="w-8 h-1 bg-gray-300 rounded-full mt-1"></p>
          </div>
          <div className="w-2/12"></div>
          <div className="w-5/12 flex flex-col items-center">
            <p style={{ fontSize: "7px" }}>次のタスク</p>
            <p className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></p>
            <p className="w-11 h-1 bg-gray-300 rounded-full mt-1"></p>
          </div>
        </div>

        <div className="flex mt-5">
          <div className="flex border-y-2 w-1/2 items-center">
            <ArrowRight style={{ fontSize: "10px" }} />
            <p className="w-11 h-1 bg-gray-300 rounded-full"></p>
          </div>

          <div className="flex gap-1 ml-auto rounded-b-md">
            <p className="bg-red-500 w-10 h-3 rounded-sm"></p>
            <p className="bg-orange-500 w-20 h-3 rounded-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
