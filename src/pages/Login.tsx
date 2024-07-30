import { ArrowRight, Email, GitHub, Google, List, TaskAlt } from "@mui/icons-material";
import React, { useState } from "react";
import DesignBox from "../component/loginForm/design/DesignBox";
import LoginForm from "../component/loginForm/LoginForm";
import { api } from "../axios";
import DescriptionBox from "../component/loginForm/design/DescriptionBox";

const login = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-full pb-24">
      <div className="mt-20"></div>

      <main className="flex flex-wrap w-full h-full px-5">
        <div className="flex flex-col gap-5 w-full h-auto lg:w-1/2  text-center mt-36 items-center mx-auto border-b-2 pb-10 lg:border-b-0">
          <h1 className="text-6xl font-bold text-blue-900">Smart就活管理</h1>
          <h2 className="text-2xl font-bold mb-4">就活をもっとスマートに</h2>

          <ul className="w-7/10 flex-flex-col items-center text-lg mb-4">
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

            <button 
            className="flex gap-2 items-center justify-center bg-blue-700 w-1/2 py-2 text-white font-bold rounded-md"
            onClick={() => setOpen(!open)}
            >
              <Email />
              メールアドレスで利用する
            </button>
            
          {open ? (
            <LoginForm open={open} setOpen={setOpen}/>
          ): (
            <></>
          )}

          
        </div>

        <div className="w-full h-auto lg:w-1/2 flex-col  justify-center items-center">
          <DesignBox />
          <p className="text-xl font-bold text-center mt-7">・・・</p>
        </div>
      </main>
      <hr className="my-32"/>
      <section>
        <h2 className="text-center text-4xl mb-2 font-bold">Smart就活管理</h2>
        <h3 className="text-center text-2xl">これまでの煩雑な企業管理のストレスを軽減</h3>
        <DescriptionBox />
        <DesignBox />
      </section>
    </div>
  );
};

export default login;
