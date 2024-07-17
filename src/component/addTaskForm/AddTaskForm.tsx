import {
  AddCircle,
  CalendarMonth,
  Cancel,
  Delete,
  Edit,
  Task,
} from "@mui/icons-material";
import React, { useState } from "react";
import EditTask from "./EditTask";
import { taskOptions } from "../../selectOptions";
import { TasksDataProps } from "../../typs";

type OpenProps = {
  addFormOpen: boolean;
  setAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};



const dummyTasks: TasksDataProps[] = [
  {
    taskName: "面接",
    situation: "結果待ち",
    testFormat: "",
    date: "2024-07-12T19:10",
    limit: "2024-07-12T19:10",
  },
  {
    taskName: "適正検査・テスト",
    situation: "未完了",
    testFormat: "SPI3",
    date: "2024-07-14T19:10",
    limit: "2024-07-14T19:10",
  },
  {
    taskName: "コーディングテスト",
    situation: "未完了",
    testFormat: "SPI3",
    date: "2024-07-12T19:10",
    limit: "2024-07-12T19:10",
  },
  {
    taskName: "コーディングテスト",
    situation: "未完了",
    testFormat: "SPI3",
    date: "2024-07-12T19:10",
    limit: "2024-07-12T19:10",
  },
  {
    taskName: "コーディングテスト",
    situation: "未完了",
    testFormat: "SPI3",
    date: "2024-07-12T19:10",
    limit: "2024-07-12T19:10",
  },
  {
    taskName: "コーディングテスト",
    situation: "未完了",
    testFormat: "SPI3",
    date: "2024-07-12T19:10",
    limit: "2024-07-12T19:10",
  },
];

const AddTaskForm = ({ addFormOpen, setAddFormOpen }: OpenProps) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [dummyTasksData, setDummyTasksData] = useState<TasksDataProps[]>(dummyTasks)
  const [editData, setEditData] = useState<TasksDataProps>()



  let selectIndex: number;

  const cancel = () => {
    setAddFormOpen(!addFormOpen);
  };

  const editOpen = (task: TasksDataProps, index: number) => {
    setEditData(task)
    setEdit(true);
    selectIndex = index;
  };

  // const ediingFunc = () => {
  //   const newDate: EditTaskDataProps = {
  //     taskName: editTaskName,
  //     testFormat: editTestFormat,
  //     situation: editSituation,
  //     limit: editLimit,
  //     date: editDate,
  //   };
    
  // };

  const addSave = () => {
    //ここでタスクデータを保存するAPIを叩く
    setAddFormOpen(!addFormOpen);
  };
  
  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-40 bg-gray-900 z-50`}
      style={{ display: addFormOpen ? "block" : "none" }}
    >
      <div className="w-11/12 mx-auto overflow-hidden">
        <div className={`bg-white w-full h-auto my-5 p-8 `}>
          <h1 className="text-2xl text-red-600 font-bold flex items-center">
            <Task style={{ fontSize: "33px" }} />
            <span>タスク追加・編集</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 items-start">
            <div className="flex flex-col w-full lg:w-1/2 h-auto">
              <div className="flex flex-col  h-auto w-full lg:w-full gap-6 rounded-md p-3">
                <h2 className="font-bold text-lg text-red-700">タスクの追加</h2>
                <label htmlFor="event">
                  タスク：
                  <select className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5">
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
                  />
                </label>
                <label htmlFor="actdate">
                  実践日時：
                  <input
                    type="datetime-local"
                    id="actdate"
                    className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
                  />
                  <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
                </label>
                <label htmlFor="date">
                  期限：
                  <input
                    type="datetime-local"
                    id="date"
                    className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
                  />
                  <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
                </label>
                
                <button className="bg-red-600 py-2 w-1/3 ml-auto text-white rounded-md hover:opacity-80">
                  追加
                </button>
              </div>

              <hr />

              {edit ? (
                <EditTask editData={editData} setEditData={setEditData} dummyTasksData={dummyTasksData} setDummyTasksData={setDummyTasksData}/>
              ) : (
                <></>
              )}
            </div>

            <hr className="lg:hidden" />

            <fieldset
              className="flex flex-col w-full lg:w-1/2  overflow-y-auto border-2"
              style={{ height: "550px" }}
            >
              <legend className="font-bold text-lg text-green-600 px-2 mx-auto">
                選考フロー
              </legend>
              <div className="flex flex-col gap-3 px-2">
                {dummyTasksData.map((task, index) => (
                  <div
                    className="flex p-3 gap-1 md:ml-1 border-b-2 items-center justify-between"
                    key={index}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="flex items-center mb-1">
                        <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
                        <p className="font-bold">{task.taskName}</p>
                        <span className="ml-5 text-sm">{task.situation}</span>
                      </h3>
                      {task.testFormat ? (
                        <p className="border-l-2 border-gray-500 pl-2">
                          テスト形式：<span>{task.testFormat}</span>
                        </p>
                      ) : (
                        <></>
                      )}
                      <p className="border-l-2 border-gray-500 pl-2">
                        期限：
                        <span>
                          {new Date(task.limit).toLocaleString().slice(0, 15)}
                        </span>
                      </p>
                      <p className="border-l-2 border-gray-500 pl-2">
                        実践日時：
                        <span>
                          {new Date(task.date).toLocaleString().slice(0, 15)}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <button
                        className="text-blue-500"
                        onClick={() => editOpen(task, index)}
                      >
                        <Edit></Edit>
                      </button>
                      <button className="text-red-500">
                        <Delete></Delete>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="w-full flex items-center justify-end p-3 gap-3">
            <button
              className="flex bg-gray-500 items-center justify-center rounded-md text-white w-1/4 h-12 hover:opacity-50 "
              onClick={cancel}
            >
              <span className="text-lg mr-2">中止</span>
              <Cancel></Cancel>
            </button>
            <button
              className="flex bg-orange-500 items-center justify-center rounded-md text-white w-1/4 h-12 hover:opacity-50 "
              onClick={addSave}
            >
              <span className="text-lg mr-2">保存</span>
              <AddCircle></AddCircle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
