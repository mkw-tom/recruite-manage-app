import { CalendarMonth } from "@mui/icons-material";
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
    <div className="flex flex-col h-auto lg:w-1/2 gap-6">
      <h2 className="text-lg font-bold">企業・イベント</h2>
      <label htmlFor="name">
        企業名：
        <input
          type="text"
          id="name"
          className="bg-white shadow-inner border-2 rounded-md w-3/5"
        />
      </label>
      <label htmlFor="event">
        イベント：
        <select className="bg-white shadow-inner border-2 rounded-md w-3/5">
          {eventOptios.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="date">
        開催日時：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-2/5"
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <label htmlFor="name">
        開催地：
        <input
          type="text"
          id="name"
          className="bg-white shadow-inner border-2 rounded-md w-3/5"
        />
      </label>

      <hr className="my-5" />
      <h2 className="text-lg font-bold">マイページ設定</h2>
      <label htmlFor="name">
        URL：
        <input
          type="text"
          id="name"
          className="bg-white shadow-inner border-2 rounded-md w-4/5"
        />
      </label>
      <label htmlFor="name">
        ID：
        <input
          type="text"
          id="name"
          className="bg-white shadow-inner border-2 rounded-md w-3/5"
        />
      </label>
      <label htmlFor="password">
        Password：
        <input
          type="password"
          id="password"
          className="bg-white shadow-inner border-2 rounded-md w-3/5"
        />
      </label>
    </div>
  );
};

export default CompanyEventForm;
