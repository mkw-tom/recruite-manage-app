import { ChangeEvent, useReducer } from 'react';
import { Task } from '@mui/icons-material';
import { taskOptions } from '../../../selectOptions';
import {
  AddEditTaskReducer,
  initialState,
} from '../../../state/reducer/AddEditTaskReducer';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import useJudgeAddTask from '../../../hooks/useJudgeAddTask';
import { useForm } from 'react-hook-form';
import { AddEditTaskType } from '../../../types/validationType';
// import { useSelectPost } from '../../../state/context/SelectPostContext';

const AddTaskForm = () => {
  const [state, dispatch] = useReducer(AddEditTaskReducer, initialState);
  const { formsOpenDispatch } = useFormsOpen();
  const handleJudgeAddTask = useJudgeAddTask();
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<AddEditTaskType>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET INPUT', payload: { name, value } });
  };

  const handleAdd = async () => {
    const taskValid = await trigger('task');
    if (taskValid) {
      handleJudgeAddTask(state);
      formsOpenDispatch({ type: 'CLOSE FORM' });
    } else {
      // eslint-disable-next-line no-console
      console.log('invalid');
    }
  };

  const cancel = () => {
    formsOpenDispatch({ type: 'CLOSE FORM' });
  };

  return (
    <div className="w-8/12 lg:5/12 bg-white mx-auto mt-40 pt-8 px-8 overflow-hidden">
      <h1 className="text-2xl text-red-700 font-bold flex items-center">
        <Task style={{ fontSize: '33px' }} />
        <span>タスク追加</span>
      </h1>
      <div className="flex flex-col  h-auto w-full lg:w-full gap-6 rounded-md p-3">
        <h2 className="font-bold text-lg text-red-700">タスク情報</h2>
        <label htmlFor="event">
          タスク：
          <select
            {...register('task', { required: 'タスクは必須入力です' })}
            name="task"
            className="bg-white shadow-inner border-2 rounded-md w-3/5 "
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
            className="bg-white shadow-inner border-2 rounded-md w-3/5 "
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="date">
          実践日時：
          <input
            type="datetime-local"
            id="date"
            name="date"
            className="bg-white shadow-inner border-2 rounded-md w-3/5 "
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="date">
          期限：
          <input
            type="datetime-local"
            id="date"
            name="limitDate"
            className="bg-white shadow-inner border-2 rounded-md w-3/5 "
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className="flex items-center justify-end gap-1 mt-5">
          <button
            className="bg-gray-500 py-2 w-1/4  text-white rounded-md hover:opacity-80"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 py-2 w-1/3  text-white rounded-md hover:opacity-80"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
