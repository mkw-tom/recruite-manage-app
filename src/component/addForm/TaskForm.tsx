import { AddCircle, ArrowBack, CalendarMonth, Cancel, SkipNext, Task } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import { taskOptions } from "../../selectOptions";
import { useAuth } from "../../context/AuthContext";
import { useTask } from "../../context/TaskContext";


interface TaskFormProps {
  setTranslateY: React.Dispatch<React.SetStateAction<string>>,
  newPostId: string,
}


const TaskForm = ({setTranslateY, newPostId}: TaskFormProps) => {
  const taskRef = useRef<HTMLSelectElement>(null)
  const testFormatRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const limitDateRef = useRef<HTMLInputElement>(null)

  const {user} = useAuth();
  const {addNext} = useTask()

 
  const handleAddNext = () => {
    const reqDatas = {
        task: taskRef?.current?.value,
        testFormat: testFormatRef?.current?.value ,
        date: dateRef?.current?.value , 
        limitDate: limitDateRef?.current?.value,
    }
    addNext(reqDatas)
    setTranslateY("-translate-x-2/3 transition ease-out")
  }

  const handleSkipNext = () => {
    setTranslateY("-translate-x-2/3 transition ease-out")
  }
  return (
    <div className="w-1/3 p-8 relative">
      <div className="flex justify-between mb-5 w-full rounded-t-md">
        <h1 className="text-2xl text-blue-600 font-bold flex items-center">
          <Task style={{ fontSize: "33px" }} />
          <span>タスク追加</span>
        </h1>
      </div>
      <div className="flex flex-col w-full h-auto lg:full gap-6 ml-3 mb-20">
        <h2 className="font-bold text-lg ">タスクの追加</h2>
        <label htmlFor="event">
          タスク：
          <select className="bg-white shadow-inner border-2 rounded-md w-3/5" ref={taskRef}>
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
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={testFormatRef}
          />
        </label>
        <label htmlFor="actdate">
          実践日時：
          <input
            type="datetime-local"
            id="actdate"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={dateRef}
          />
          <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
        </label>
        <label htmlFor="date">
          期限：
          <input
            type="datetime-local"
            id="date"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={limitDateRef}
          />
          <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
        </label>
      </div>

      <div className="w-11/12 flex items-center justify-end gap-3 absolute bottom-2 mx-auto right-0 left-0">
        {/* <button
          className="flex bg-blue-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 mr-auto "
        >
          <ArrowBack></ArrowBack>
          <span className="text-lg ml-2">back</span>
        </button> */}
        <button
          className="flex bg-sky-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 "
          onClick={handleSkipNext}
        >
          <span className="text-lg mr-2">skip next</span>
          {/* <Cancel></Cancel> */}
          <SkipNext></SkipNext>
        </button>
        <button
          className="flex bg-orange-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 "
          onClick={handleAddNext}
        >
          <span className="text-lg mr-2">add next</span>
          <AddCircle></AddCircle>
        </button>
      </div>
    </div>
  );
};

export default TaskForm;


