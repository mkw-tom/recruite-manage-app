import { CalendarMonth } from '@mui/icons-material';
import React, { SetStateAction, useState } from 'react';
import { taskOptions } from '../../../selectOptions';
import { useTask } from '../../../state/context/TaskContext';
import { PostType, TaskFlowType } from '../../../types/typs';

const EditTask = ({
  card,
  setEdit,
}: {
  card: PostType;
  setEdit: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { taskFlow, setTaskFlow, editTaskId, editTask } = useTask();
  const editTaskData: TaskFlowType | undefined = taskFlow?.find(
    (task) => task.edit === true
  );

  const [task, setTask] = useState<string>(editTaskData?.task as string);
  const [testFormat, setTestFormat] = useState<string>(
    editTaskData?.testFormat as string
  );
  const [date, setDate] = useState<string>(editTaskData?.date as string);
  const [limitDate, setLimitDate] = useState<string>(
    editTaskData?.limitDate as string
  );

  const handleEdit = () => {
    const newData = taskFlow?.map((data) => {
      if (data.edit === true) {
        data.task = task;
        data.testFormat = testFormat;
        data.date = date;
        data.limitDate = limitDate;
        data.edit = false;
      }
      return data;
    });
    setTaskFlow(newData);

    const reqData = {
      _id: undefined,
      situation: '未完了',
      task: task,
      testFormat: testFormat,
      date: date,
      limitDate: limitDate,
      edit: false,
      current: editTaskData?.current,
      next: editTaskData?.next,
      finished: editTaskData?.finished,
    };

    setEdit(false);
    editTask(card?._id as string, editTaskId, reqData);
  };

  const handleEditCancel = () => {
    const newData = taskFlow?.map((data) => {
      if (data.edit === true) {
        data.edit = false;
      }
      return data;
    });

    setTaskFlow(newData);
    setEdit(false);
    editTask(card?._id as string, editTaskId, editTaskData);
  };
  return (
    <div className="flex flex-col  h-auto w-full lg:full gap-6 rounded-md p-3 ">
      <h2 className="font-bold text-lg text-green-700">タスクの編集</h2>
      <label htmlFor="event">
        タスク：
        <select
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={task}
          onChange={(e) => setTask(e.target.value)}
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
          value={testFormat}
          onChange={(e) => setTestFormat(e.target.value)}
        />
      </label>
      <label htmlFor="actdate">
        実践日時：
        <input
          type="datetime-local"
          id="actdate"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <label htmlFor="date">
        期限：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={limitDate}
          onChange={(e) => setLimitDate(e.target.value)}
        />
        <CalendarMonth className="absolute -ml-7 pt-1 pointer-events-none "></CalendarMonth>
      </label>
      <div className="flex items-center justify-end gap-2">
        <button
          className="bg-gray-600 py-2 w-1/4  text-white rounded-md hover:opacity-80"
          onClick={handleEditCancel}
        >
          cancel
        </button>
        <button
          className="bg-green-600 py-2 w-1/4  text-white rounded-md hover:opacity-80"
          onClick={handleEdit}
        >
          edit
        </button>
      </div>
    </div>
  );
};

export default EditTask;
