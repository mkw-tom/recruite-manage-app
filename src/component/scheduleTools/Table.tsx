import {
  ArrowRight,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowRight,
  AddCircleOutline,
} from "@mui/icons-material";
import React, { useState } from "react";

const Table = () => {
  const [keyDown, setKeyDown] = useState<boolean>(false);
  const [addStep, setAddStep] = useState<boolean>(false);

  return (
    <table className="w-full  h-auto shadow-xl rounded-2xl border-2">
      <thead className="rounded-2xl bg-sky-400 text-white">
        <tr className=" rounded-2xl ">
          <th></th>
          <th className="w-64">企業名</th>
          <th className="">業界</th>
          <th className="">業種</th>
          <th className="">勤務地</th>
          <th className="">開催日時</th>
          <th className="">イベント</th>
          <th className=" ">エントリー状況</th>
        </tr>
      </thead>

      <tbody className="">
        <tr className="text-gray-600 h-20 border-b-2">
          <th className="w-16 border-r">
            <button onClick={() => setKeyDown(!keyDown)}>
              {keyDown ? (
                <KeyboardArrowDown></KeyboardArrowDown>
              ) : (
                <KeyboardArrowRight></KeyboardArrowRight>
              )}
            </button>
          </th>
          <th className="border-r">株式会社freee</th>
          <th className="border-r">
            <select name="" id="" className="w-10/12 bg-gray-100">
              <option value="">IT・情報通信</option>
              <option value="">IT・情報通信</option>
              <option value="">IT・情報通信</option>
            </select>
          </th>
          <th className="border-r">
            <select name="" id="" className="w-10/12 bg-gray-100">
              <option value="">エンジニア</option>
              <option value="">エンジニア</option>
              <option value="">エンジニア</option>
            </select>
          </th>
          <th className="border-r">東京</th>
          <th className="border-r">
            <div>
              <input
                type="date"
                name=""
                id=""
                className="bg-gray-200 text-gray-800"
              />
              <input type="time" className="bg-gray-200 text-gray-800" />
            </div>
            〜
            <div>
              <input
                type="date"
                name=""
                id=""
                className="bg-gray-200 text-gray-800"
              />
              <input type="time" className="bg-gray-200 text-gray-800" />
            </div>
          </th>
          <th className="border-r">
            <select name="" id="" className="w-10/12 bg-gray-100">
              <option value="">説明会</option>
              <option value="">インターン（長期）</option>
              <option value="">インターン（短期）</option>
              <option value="">本選考</option>
            </select>
          </th>
          <th>選考中</th>
        </tr>
        {keyDown ? (
          <tr className="h-48">
            <th aria-colspan={2} className="text-gray-700 relative">
              <div className="absolute top-0 w-screen ps-3 py-1 flex">
                <div className="w-4/12 bg-gray-200 ronded-md p-2">
                  <h2 className="text-white bg-sky-400 rounded-md py-1 w-56">
                    マイページ
                  </h2>
                  <ul className="flex flex-col gap-2 text-left">
                    <li>
                      URL：
                      <a
                        href="https://mui.com/material-ui/react-stepper/"
                        className="text-blue-400 hover:text-purple-400"
                        target="blanck"
                      >
                        https://mui.com/material-ui/react-stepper/
                      </a>
                    </li>
                    <li>
                      ログインID：<span>aaiiuueeoo</span>
                    </li>
                    <li>
                      パスワード：<span>123456</span>
                    </li>
                  </ul>
                </div>

                <div className="w-6/12 h-12 bg-blue-50 ml-2 flex justify-center items-start">
                  <div className="w-36 flex flex-col items-center">
                    <p className="rounded-full bg-green-400 w-5 h-5 animate-pulse"></p>
                    <label>説明会</label>
                  </div>
                  <KeyboardDoubleArrowRight className="text-green-400"></KeyboardDoubleArrowRight>
                  <div className="w-36 flex flex-col items-center">
                    <p className="rounded-full bg-gray-400 w-5 h-5 "></p>
                    {addStep ? (
                      <div className="flex items-center">
                        <AddCircleOutline onClick={() => setAddStep(!addStep)}></AddCircleOutline>
                        <select name="" id="" className="w-10/12 bg-gray-100">
                          <option value="">説明会</option>
                          <option value="">適性検査</option>
                          <option value="">WEBテスト</option>
                          <option value="">ES提出</option>
                          <option value="">面接</option>
                          <option value="">筆記試験</option>
                          <option value="">インターン（長期）</option>
                          <option value="">インターン（短期）</option>
                          <option value="">本選考</option>
                        </select>
                      </div>
                    ) : (
                    <button className="bg-white rounded-md px-1 shadow-md flex items-center" onClick={() => setAddStep(!addStep)}>
                      <AddCircleOutline></AddCircleOutline>
                      <span>次のステップ</span>
                    </button>
                    )}
                  </div>
                </div>
              </div>
            </th>
          </tr>
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
};

export default Table;
