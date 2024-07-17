import { CalendarMonth } from "@mui/icons-material";
import React, { useState } from "react";
import { TasksDataProps, editTaskProps } from "../../typs";
import { taskOptions } from "../../selectOptions";

const EditTask = ({
  editData,
  setEditData,
  dummyTasksData,
  setDummyTasksData,
}: editTaskProps) => {
  const [editTaskName, setEditTaskName] = useState<string>(editData?.taskName!);
  const [editTestFormat, setEditTestFormat] = useState<string>(editData?.testFormat!);
  const [editSituation, setEditSituation] = useState<string>(editData?.situation!);
  const [editLimit, setEditLimit] = useState<string>(editData?.limit!);
  const [editDate, setEditDate] = useState<string>(editData?.date!);

  const handleEdit = () => {
    const newData: TasksDataProps = {
      taskName: editTaskName,
      testFormat: editTestFormat,
      situation: editSituation,
      limit: editLimit,
      date: editDate,
    };
    setDummyTasksData([...dummyTasksData, newData]);

    setEditTaskName("")
    setEditTestFormat("")
    setEditSituation("")
    setEditDate("")
    setEditLimit("")

  };

  return (
    <div className="flex flex-col  h-auto w-full lg:full gap-6 rounded-md p-3 ">
      <h2 className="font-bold text-lg text-green-700">タスクの編集</h2>
      <label htmlFor="event">
        タスク：
        <select
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={editTaskName}
          onChange={(e) => setEditTaskName(e.target.value)}
        >
          {taskOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="test">
        テスト形式：
        <input
          type="test"
          id="text"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={editTestFormat}
          onChange={(e) => setEditTestFormat(e.target.value)}
        />
      </label>
      <label htmlFor="actdate">
        実践日時：
        <input
          type="datetime-local"
          id="actdate"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={editDate}
          onChange={(e) => setEditDate(e.target.value)}
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <label htmlFor="date">
        期限：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={editLimit}
          onChange={(e) => setEditLimit(e.target.value)}
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <button
        className="bg-green-600 py-2 w-1/3 ml-auto text-white rounded-md hover:opacity-80"
        onClick={handleEdit}
      >
        編集
      </button>
    </div>
  );
};

export default EditTask;
