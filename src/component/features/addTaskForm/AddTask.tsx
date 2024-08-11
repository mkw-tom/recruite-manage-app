import { ChangeEvent, useReducer } from 'react';
import { taskOptions } from '../../../selectOptions';
import {
  AddEditTaskReducer,
  initialState,
} from '../../../state/reducer/AddEditTaskReducer';
import useJudgeAddTask from '../../../hooks/useJudgeAddTask';
import { useForm } from 'react-hook-form';
import { AddEditTaskType } from '../../../types/validationType';

const AddTask = () => {
  const [state, dispatch] = useReducer(AddEditTaskReducer, initialState);
  const handleJudgeAddTask = useJudgeAddTask();

  const {
    trigger,
    register,
    formState: { errors },
  } = useForm<AddEditTaskType>();

  const handleAdd = async (): Promise<void> => {
    const taskValid = await trigger('task');
    const dateValid = await trigger('date');
    if (taskValid && dateValid) {
      handleJudgeAddTask(state);
    } else {
      // eslint-disable-next-line no-console
      console.log('invalid error');
    }
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET INPUT', payload: { name, value } });
  };

  return (
    <div className="flex flex-col  h-auto w-full lg:w-full gap-6 rounded-md p-3">
      <h2 className="font-bold text-lg text-red-700">タスクの追加</h2>
      <label htmlFor="event">
        タスク：
        <select
          {...register('task', { required: 'タスクは必須入力です' })}
          name="task"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={state.task}
          onChange={(e) => handleChange(e)}
        >
          {taskOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        {errors.task && (
          <small className="text-red-500 block">{errors.task.message}</small>
        )}
      </label>
      <label htmlFor="test">
        テスト形式：
        <input
          type="text"
          id="test"
          name="testFormat"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={state.testFormat}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="actdate">
        実践日時：
        <input
          {...register('date', { required: '実践日時は必須入力です' })}
          type="datetime-local"
          id="actdate"
          name="date"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={state.date}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="date">
        期限：
        <input
          type="datetime-local"
          id="date"
          name="limitDate"
          className="bg-white shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
          value={state.limitDate}
          onChange={(e) => handleChange(e)}
        />
        {errors.date && (
          <small className="text-red-500 block">{errors.date.message}</small>
        )}
      </label>
      <button
        className="bg-red-600 py-2 w-1/3 ml-auto text-white rounded-md hover:opacity-80"
        onClick={handleAdd}
      >
        追加
      </button>
    </div>
  );
};

export default AddTask;
