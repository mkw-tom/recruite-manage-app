import React, { useRef } from 'react';
import { taskOptions } from '../../../selectOptions';
import { useTask } from '../../../state/context/TaskContext';
import { PostType, TaskFlowType } from '../../../types/typs';

interface AddTaskFormProps {
  card: PostType;
  edit: boolean;
  // taskFlow: any,
  // setTaskFlow: React.Dispatch<any>
}
const AddTask = ({ card, edit }: AddTaskFormProps) => {
  const taskRef = useRef<HTMLSelectElement | null>(null);
  const testFormatRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);
  const limitDateRef = useRef<HTMLInputElement | null>(null);
  const { taskFlow, setTaskFlow, pushTask } = useTask();

  const current = taskFlow?.filter(
    (task: TaskFlowType) => task.current === true
  );
  const next = taskFlow?.filter((task: TaskFlowType) => task.next === true);

  const handleJudgeAndAddTask = () => {
    //_id, situation, edit
    const reqDatas = {
      _id: '',
      task: taskRef?.current?.value,
      testFormat: testFormatRef?.current?.value,
      date: dateRef?.current?.value,
      limitDate: limitDateRef?.current?.value,
      situation: '未完了',
      edit: false,
    };

    if (current?.length === 0) {
      const newReqDatas = {
        ...reqDatas,
        current: true,
        next: false,
        finished: false,
      };

      setTaskFlow((prev: TaskFlowType[] | undefined) =>
        prev?.concat([newReqDatas])
      );
      return pushTask(card?._id as string, newReqDatas);
    }

    if (next?.length === 0) {
      const newReqDatas = {
        ...reqDatas,
        current: false,
        next: true,
        finished: false,
      };
      setTaskFlow((prev: TaskFlowType[] | undefined) =>
        prev?.concat([newReqDatas])
      );
      return pushTask(card?._id as string, newReqDatas);
    }
    const newReqDatas = {
      ...reqDatas,
      current: false,
      next: false,
      finished: false,
    };

    setTaskFlow((prev: TaskFlowType[] | undefined) =>
      prev?.concat([newReqDatas])
    );
    return pushTask(card._id as string, newReqDatas);
  };

  return (
    <div className="flex flex-col  h-auto w-full lg:w-full gap-6 rounded-md p-3">
      <h2 className="font-bold text-lg text-red-700">タスクの追加</h2>
      <label htmlFor="event">
        タスク：
        <select
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          ref={taskRef}
        >
          {taskOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
      <label htmlFor="test">
        テスト形式：
        <input
          type="text"
          id="text"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          ref={testFormatRef}
        />
      </label>
      <label htmlFor="actdate">
        実践日時：
        <input
          type="datetime-local"
          id="actdate"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          ref={dateRef}
        />
      </label>
      <label htmlFor="date">
        期限：
        <input
          type="datetime-local"
          id="date"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          ref={limitDateRef}
        />
      </label>

      <button
        className="bg-red-600 py-2 w-1/3 ml-auto text-white rounded-md hover:opacity-80"
        onClick={handleJudgeAndAddTask}
        disabled={edit ? true : false}
      >
        追加
      </button>
    </div>
  );
};

export default AddTask;
