import { AddCircle, SkipNext, Task } from '@mui/icons-material';
import { ChangeEvent, useReducer } from 'react';
import { taskOptions } from '../../../selectOptions';
import {
  AddEditTaskReducer,
  initialState,
} from '../../../state/reducer/AddEditTaskReducer';
// import { useSelectPost } from '../../../state/context/SelectPostContext';
import { usePosts } from '../../../state/context/PostsContext';
import useTaskAddAndEdit from '../../../hooks/useTaskAddAndEdit';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { AddEditTaskType } from '../../../types/validationType';
import { useSelectPost } from '../../../state/context/SelectPostContext';

const TaskForm = ({
  setTranslateY,
}: {
  setTranslateY: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { pushTask } = useTaskAddAndEdit();
  const { addPostData } = usePosts();
  const [state, dispatch] = useReducer(AddEditTaskReducer, initialState);
  const { setSelectPostTasks } = useSelectPost();
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm<AddEditTaskType>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET INPUT', payload: { name, value } });
  };

  const handleAddNext = async (): Promise<void> => {
    const taskValid = await trigger('task');
    const dateValid = await trigger('date');
    if (taskValid && dateValid) {
      const reqDatas = {
        customId: uuidv4(),
        task: state.task,
        testFormat: state.testFormat,
        date: state.date,
        limitDate: state.limitDate,
        situation: '未完了',
        current: true,
        next: false,
        finished: false,
        edit: false,
      };
      pushTask(addPostData?.customId as string, reqDatas);
      setTranslateY('-translate-x-2/3 transition ease-out');
      setSelectPostTasks((prev) => [...prev, reqDatas]);
    } else {
      // eslint-disable-next-line no-console
      console.log('invalid error');
    }
  };

  const handleSkipNext = () => {
    setTranslateY('-translate-x-2/3 transition ease-out');
  };
  return (
    <div className="w-1/3 p-8 relative">
      <div className="flex justify-between mb-5 w-full rounded-t-md">
        <h1 className="text-2xl text-blue-600 font-bold flex items-center">
          <Task style={{ fontSize: '33px' }} />
          <span>タスク追加</span>
        </h1>
      </div>
      <form className="flex flex-col w-full h-auto lg:full gap-6 ml-3 mb-20">
        <h2 className="font-bold text-lg ">現在のタスクを追加</h2>
        <label htmlFor="task">
          タスク：
          <select
            {...register('task', { required: 'タスクは必須入力です' })}
            name="task"
            className="bg-white shadow-inner border-2 rounded-md w-3/5"
            onChange={handleChange}
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
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="actdate">
          実践日時：
          <input
            {...register('date', { required: '実践日時は必須入力です' })}
            type="datetime-local"
            id="actdate"
            name="date"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            onChange={handleChange}
          />
          {errors.date && (
            <small className="text-red-500 block">{errors.date.message}</small>
          )}
        </label>
        <label htmlFor="date">
          期限：
          <input
            type="datetime-local"
            id="date"
            name="limitDate"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            onChange={handleChange}
          />
        </label>
      </form>

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
