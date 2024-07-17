import {
  AddCircle,
  BusinessOutlined,
  CalendarMonth,
} from "@mui/icons-material";
import React from "react";

export const eventOptios = [
  "企業説明会・オープンカンパニー",
  "インターンシップ（短期）",
  "インターンシップ（長期）",
  "ハッカソン",
  "本選考",
];



const CompanyEventForm = () => {
  return (
    <div className="w-1/2 p-8">
      <div className="flex justify-between mb-5 w-full">
        <h1 className="text-2xl text-blue-600 font-bold flex items-center">
          <BusinessOutlined style={{ fontSize: "33px" }} />
          <span>企業を追加</span>
        </h1>
        {/* <button onClick={() => setOpen(!open)}>閉じる</button> */}
      </div>
      <div className="flex flex-col lg:flex-row w-full h-auto lg:full gap-6 ml-3">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-lg font-bold">企業・イベント</h2>
          <label htmlFor="company">
            企業名：
            <input
              type="text"
              id="company"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            />
          </label>
          <label htmlFor="event">
            イベント：
            <select className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5">
              {eventOptios.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </label>
          <label htmlFor="dates">
            開催日時：
            <input
              type="datetime-local"
              id="dates"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-4/12"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            {/* <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth> */}
            <span className="mx-1">から</span>
            <input
              type="datetime-local"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-4/12"
              onChange={(e) => console.log(e.target.value)}
            />
            {/* <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth> */}
          </label>
          <label htmlFor="name">
            開催地：
            <input
              type="text"
              id="name"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            />
          </label>
        </div>

        <hr className="my-5" />

        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-lg font-bold">マイページ設定</h2>
          <label htmlFor="url">
            URL：
            <input
              type="text"
              id="url"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-4/5"
            />
          </label>
          <label htmlFor="id">
            ID：
            <input
              type="text"
              id="id"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            />
          </label>
          <label htmlFor="password">
            Password：
            <input
              type="password"
              id="password"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CompanyEventForm;
