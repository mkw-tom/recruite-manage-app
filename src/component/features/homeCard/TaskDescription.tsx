import { ArrowRight, ArrowDropDown, AddCircle } from '@mui/icons-material';
import React, { useState } from 'react';
import AddTaskForm from '../addTaskForm/AddTaskForm';
import { PostType } from '../../../types/typs';
import { useTask } from '../../../state/context/TaskContext';

// taskFlow: [{
//   task: string,
//   situation: string,
//   testFormat: string,
//   date: string,
//   limitData:string,
// }],

const TaskDescription = ({ card }: { card: PostType }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [addFormOpen, setAddFormOpen] = useState<boolean>(false);
  const { setTaskFlow } = useTask();

  const hadleOpenAddForm = () => {
    setAddFormOpen(!addFormOpen);
    setTaskFlow(card.taskFlow);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col w-full ">
      <AddTaskForm
        addFormOpen={addFormOpen}
        setAddFormOpen={setAddFormOpen}
        card={card}
      />

      <button className="flex py-2 border-y-2 h-auto w-full" onClick={toggle}>
        {open ? <ArrowDropDown></ArrowDropDown> : <ArrowRight></ArrowRight>}
        選考フロー
      </button>
      {card.taskFlow.map((task, index) => (
        <div
          key={index}
          className="flex flex-col p-3 gap-1 md:ml-1 border-b-2"
          style={{ display: open ? 'block' : 'none' }}
        >
          <h3 className="flex items-center">
            <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
            <p className="font-bold">{task.task}</p>
            <span className="ml-5 text-sm">{task.situation}</span>
          </h3>
          <p className="border-l-2 border-gray-500 pl-2">
            期限：
            <span>{new Date(task.limitDate as string).toLocaleString()}</span>
          </p>
          <p className="border-l-2 border-gray-500 pl-2">
            実践日時：
            <span>{new Date(task.date as string).toLocaleString()}</span>
          </p>
        </div>
      ))}

      <div
        className=" flex flex-col h-12 gap-1 md:ml-1 border-b-2 p-1 hover:bg-green-100"
        style={{ display: open ? 'block' : 'none' }}
      >
        <button
          className="flex items-center gap-2 h-full  w-full justify-center font-bold  border-dashed border-2 "
          onClick={hadleOpenAddForm}
        >
          タスクの追加<AddCircle></AddCircle>
        </button>
      </div>
    </div>
  );
};

export default TaskDescription;
