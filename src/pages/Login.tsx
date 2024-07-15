import { ArrowRight, GitHub, Google, List, TaskAlt } from "@mui/icons-material";
import React from "react";
import DesignCard from "../component/design/DesignCard";
import DesignBox from "../component/design/DesignBox";
import Header from "../component/common/Header";

const login = () => {
  return (
    <div className="w-full h-full pb-24">
      <div className="mt-20"></div>

      <main className="flex flex-wrap w-full h-full px-5">
        <div className="flex flex-col gap-5 w-full h-full lg:w-1/2  text-center pt-24 items-center mx-auto border-b-2 pb-10 lg:border-b-0">
          <h1 className="text-6xl font-bold text-blue-900">Smart就活管理</h1>
          <h2 className="text-2xl font-bold mb-4">就活をもっとスマートに</h2>

          <ul className="w-7/10 flex-flex-col items-center text-lg mb-10">
            <li>
              <TaskAlt className="mr-2 text-green-800"></TaskAlt>
              <span>エントリーした企業をカンタン登録・編集</span>
            </li>
            <li className="flex items-center">
              <TaskAlt className="mr-2 text-green-800"></TaskAlt>
              <span>イベントの詳細情報がすぐわかる</span>
            </li>
            <li className="flex items-center">
              <TaskAlt className="mr-2 text-green-800"></TaskAlt>
              <span>タスクの進捗状況を可視化</span>
            </li>
          </ul>

          <form className="flex flex-col items-center gap-3">
            <button className="bg-sky-500 w-96 text-white py-3 rounded-md font-bold flex items-center justify-center">
              <Google className="mr-2" />
              <span>Googleアカウントで利用する</span>
            </button>
            <button className="bg-black w-96 text-white py-3 rounded-md font-bold flex items-center justify-center">
              <GitHub className="mr-2" />
              <span>GitHubアカウントで利用する</span>
            </button>
          </form>
        </div>

        <div className="w-full h-auto lg:w-1/2 flex-col mt-24 justify-center items-center ">
          <DesignBox />
        </div>
      </main>
    </div>
  );
};

export default login;
