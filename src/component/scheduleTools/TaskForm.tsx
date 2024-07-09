import { CalendarMonth } from "@mui/icons-material";
import React from "react";

export const taskOptions = [
  "エントリー前",
  "ES・履歴書の提出",
  "説明会",
  "カジュアル面談",
  "面談（面接）",
  "グループ面接",
  "適正検査・テスト",
  "コーディングテスト",
];

const TaskForm = () => {
  return (
    <div className="flex flex-col h-auto lg:w-1/2 gap-6">
      <h2 className="font-bold text-lg text-red-700">現在のタスク</h2>
      <label htmlFor="event">
        タスク：
        <select className="bg-white shadow-inner border-2 rounded-md w-3/5">
          {taskOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="text">
        テスト形式：
        <input
          type="text"
          id="text"
          className="bg-white shadow-inner border-2 rounded-md w-2/5"
        />
      </label>
      <label htmlFor="date">
        実践日時：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-2/5"
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <label htmlFor="date">
        期限：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-2/5"
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <hr className="my-5"/>
      <h2 className="text-lg font-bold text-sky-500">次のタスク</h2>
      <label htmlFor="event">
        タスク：
        <select className="bg-white shadow-inner border-2 rounded-md w-3/5">
          {taskOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="text">
        テスト形式：
        <input
          type="text"
          id="text"
          className="bg-white shadow-inner border-2 rounded-md w-2/5"
        />
      </label>
      <label htmlFor="date">
        実践日時：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-2/5"
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <label htmlFor="date">
        期限：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-2/5"
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
    </div>
  );
};

export default TaskForm;
