import React from 'react';
import { PostType, TaskFlowType } from '../../../types/typs';
import { Delete, Edit, EditOff } from '@mui/icons-material';
import { useTask } from '../../../state/context/TaskContext';

interface TaskFlowProps {
  card: PostType;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskFlow = ({ card, edit, setEdit }: TaskFlowProps) => {
  const { setEditTaskId, taskFlow, setTaskFlow, pullTask } = useTask();

  const openEditForm = (taskIndex: number) => {
    // const editTaskData = card.taskFlow[taskIndex]
    const newData = taskFlow?.map((data, index) => {
      if (index === taskIndex) {
        data.edit = true;
      }
      return data;
    });
    setTaskFlow(newData);
    setEditTaskId(card.taskFlow[taskIndex]._id as string);
    setEdit(true);
  };

  const handleDeleteTask = (
    current: boolean,
    next: boolean,
    taskIndex: number
  ) => {
    if (current || next) {
      return alert('削除できません');
    }
    const deleteTaskId = card.taskFlow[taskIndex]._id;
    const newData = taskFlow?.filter((task) => task._id !== deleteTaskId);
    setTaskFlow(newData);

    pullTask(card?._id as string, deleteTaskId as string);
  };

  return (
    <fieldset
      className="flex flex-col w-full lg:w-1/2  overflow-y-auto border-2 rounded-sm shadow-inner bg-gray-100"
      style={{ height: '550px' }}
    >
      <legend className="font-bold text-lg text-green-600 px-2 mx-auto">
        選考フロー
      </legend>
      <div className="flex flex-col gap-3 px-2 ">
        {taskFlow?.map((task: TaskFlowType, index: number) => (
          <div
            className={`flex p-3 gap-1 md:ml-1 border-b-2 items-center justify-between shadow-md  ${task.finished === true ? 'bg-gray-200 opacity-60 ' : ''} ${edit && !task.edit ? 'bg-gray-600' : 'bg-white'}`}
            key={index}
          >
            <div className="flex flex-col gap-1">
              <h3 className="flex items-center mb-1">
                <p className="rounded-full w-4 h-4 bg-green-500 mr-2 animate-pulse"></p>
                <p className="font-bold">{task.task}</p>
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
                  {new Date(task.limitDate as string)
                    .toLocaleString()
                    .slice(0, 15)}
                </span>
              </p>
              <p className="border-l-2 border-gray-500 pl-2">
                実践日時：
                <span>
                  {new Date(task.date as string).toLocaleString().slice(0, 15)}
                </span>
              </p>
            </div>
            <div className="flex gap-4">
              {task.edit === true ? (
                <button
                  className="text-blue-500"
                  disabled={edit && !task.edit ? true : false}
                >
                  <EditOff></EditOff>
                </button>
              ) : (
                <button
                  className="text-blue-500"
                  disabled={edit && !task.edit ? true : false}
                  onClick={() => openEditForm(index)}
                >
                  <Edit></Edit>
                </button>
              )}
              <button
                className="text-red-500"
                disabled={edit && !task.edit ? true : false}
                onClick={() =>
                  handleDeleteTask(
                    task.current as boolean,
                    task.next as boolean,
                    index
                  )
                }
              >
                <Delete></Delete>
              </button>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default TaskFlow;
