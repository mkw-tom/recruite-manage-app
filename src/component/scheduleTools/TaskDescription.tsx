import { ArrowRight, ArrowDropDown, AddCircle } from "@mui/icons-material";
import React, { useState } from "react";
import AddTaskForm from "../addTaskForm/AddTaskForm";
import { PostType } from "../../typs";

// taskFlow: [{
//   task: string,
//   situation: string,
//   testFormat: string,
//   date: string,
//   limitData:string,
// }],


const TaskDescription = ({card}: {card: PostType}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [addFormOpen, setAddFormOpen] = useState<boolean>(false)

  const taskFlow = card.taskFlow;


  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="flex flex-col w-full ">
      <AddTaskForm addFormOpen={addFormOpen} setAddFormOpen={setAddFormOpen}/>

      <button className="flex py-2 border-y-2 h-auto w-full" onClick={toggle}>
          {open ? (<ArrowDropDown></ArrowDropDown>) : (<ArrowRight></ArrowRight>)}
        選考フロー
      </button>
      {taskFlow.map((task, index) => (
        <div key={index} className="flex flex-col p-3 gap-1 md:ml-1 border-b-2" style={{display : open ? "block" : "none"}}>
          <h3 className="flex items-center">
            <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
            <p className="font-bold">{task.task}</p>
            <span className="ml-5 text-sm">{task.situation}</span>
          </h3>
          <p className="border-l-2 border-gray-500 pl-2">
            期限：<span>{new Date(task.limitDate).toLocaleString()}</span>
          </p>
          <p className="border-l-2 border-gray-500 pl-2">
            実践日時：<span>{new Date(task.date).toLocaleString()}</span>
          </p>
        </div>
      ))}
      {/* <div className=" flex flex-col p-3 gap-1 md:ml-1 border-b-2"  style={{display : open ? "block" : "none"}}>
        <h3 className="font-bold flex items-center">
          <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
          <span>面接</span>
        </h3>
        <p className="border-l-2 border-gray-500 pl-2">
          実践日時：7/20 11:00 ~ 12:00
        </p>
        <p className="border-l-2 border-gray-500 pl-2">
          メモ：面接時の服装は自由
        </p>
      </div> */}
      <div className=" flex flex-col h-12 gap-1 md:ml-1 border-b-2 p-1 hover:bg-green-100"  style={{display : open ? "block" : "none"}}>
        <button className="flex items-center gap-2 h-full  w-full justify-center font-bold  border-dashed border-2 "
        onClick={() => setAddFormOpen(!addFormOpen)}
        >
          タスクの追加<AddCircle></AddCircle>
        </button>
      </div>
    </div>
  );
};

export default TaskDescription;
