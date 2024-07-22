import React from "react";
import DesignCard from "./DesignCard";
import { List } from "@mui/icons-material";


const DesignBox = () => {

  const datas = [
    {task: "説明会・オープンカンパニー", situation: "完了"},
    {task: "インターン短期", situation: "結果待ち"},
    {task: "インターン長期", situation: "通過"},
    {task: "ハッカソン", situation: "未完了"},
  ];

  return (
    <div className="bg-gray-50 w-4/5 h-96 rounded-md shadow-xl mx-auto relative overflow-hidden mt-24">
      <header className="flex h-8 bg-blue-800 rounded-t-md items-center px-1 text-white">
        <List
          className="ml-1 text-white"
          style={{ fontSize: "10px", display: "block" }}
        />
        <small className="ml-2" style={{ fontSize: "10px" }}>
          Smart就活管理
        </small>
        <div className="flex ml-auto gap-2">
          <div
            className="bg-white w-8 h-4 rounded-sm text-blue-900 pt-1 text-center"
            style={{ fontSize: "5px" }}
          >
            ログアウト
          </div>
          <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
        </div>
      </header>
      <nav className="bg-white w-full h-4 shadow-md bg-opacity-65">
        <ul className="flex w-full h-auto justify-around items-center text-blue-500 font-bold text-center">
          <li
            className="border-r-2 w-6/12 h-4 border-b-2 border-b-blue-600"
            style={{ fontSize: "8px" }}
          >
            全てのイベント
          </li>
          <li
            className="border-r-2 w-6/12 h-4 border-b-2"
            style={{ fontSize: "8px" }}
          >
            内定・確定済み
          </li>
        </ul>
      </nav>
      <div className="flex flex-wrap">
        {datas.map((data, index) => (
          <DesignCard key={index} task={data.task} situation={data.situation} />
        ))}
      </div>
    </div>
  );
};

export default DesignBox;
