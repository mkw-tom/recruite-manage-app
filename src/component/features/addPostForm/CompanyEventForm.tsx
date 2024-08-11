import { AddCircle, BusinessOutlined, Cancel } from '@mui/icons-material';
import { ChangeEvent, useReducer } from 'react';
import { useAuth } from '../../../state/context/AuthContext';
import {
  AddEditPostReducer,
  initialState,
} from '../../../state/reducer/AddEditPostReducer';
import { usePosts } from '../../../state/context/PostsContext';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { AddEditPostFormType } from '../../../types/validationType';
// eslint-disable-next-line react-refresh/only-export-components
export const eventOptios = [
  '企業説明会・オープンカンパニー',
  'インターンシップ（短期）',
  'インターンシップ（長期）',
  'ハッカソン',
  '本選考',
];

const CompanyEventForm = ({
  setTranslateY,
}: {
  setTranslateY: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [state, dispatch] = useReducer(AddEditPostReducer, initialState);
  const { user } = useAuth();
  const { addPost } = usePosts();
  const { formsOpenDispatch } = useFormsOpen();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<AddEditPostFormType>();
  // const { add } = useTask();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET INPUT', payload: { name, value } });
  };

  const handleCancel = () => {
    formsOpenDispatch({ type: 'CLOSE FORM' });
  };

  const handleAdd = async () => {
    const nameValid = await trigger('name');
    const eventValid = await trigger('event');
    const dateValid = await trigger('startDate');
    const regionValid = await trigger('region');
    if (nameValid && eventValid && dateValid && regionValid) {
      try {
        const addDates = {
          customId: uuidv4(),
          userId: user?._id as string,
          name: state.name,
          event: state.event,
          startDate: state.startDate,
          endDate: state.endDate,
          region: state.region,
        };
        addPost(addDates);
      } catch (error) {
        alert('企業の追加に失敗しました');
      }
      setTranslateY(`-translate-x-1/3 transition ease-out`);
    } else {
      // eslint-disable-next-line no-console
      console.log('invalid error');
    }
  };

  return (
    <div className="w-1/3 p-8 relative">
      <div className="flex justify-between mb-5 w-full">
        <h1 className="text-2xl text-blue-600 font-bold flex items-center">
          <BusinessOutlined style={{ fontSize: '33px' }} />
          <span>企業を追加</span>
        </h1>
      </div>
      <form
        className="flex flex-col w-full h-auto lg:full gap-6 ml-3 mb-20"
        // ref={formDataRef}
      >
        <h2 className="text-lg font-bold">企業・イベント</h2>
        <label htmlFor="company">
          企業名：
          <input
            {...register('name', { required: '企業名は必須入力です' })}
            type="text"
            id="company"
            name="name"
            className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            value={state.name}
            onChange={(e) => handleChange(e)}
          />
          {errors.name && (
            <small className="text-red-500 block">{errors.name.message}</small>
          )}
        </label>
        <label htmlFor="event">
          イベント：
          <select
            {...register('event', { required: 'イベントは必須入力です' })}
            name="event"
            className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            value={state.event}
            onChange={(e) => handleChange(e)}
          >
            {eventOptios.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          {errors.event && (
            <small className="text-red-500 block">{errors.event.message}</small>
          )}
        </label>
        <label htmlFor="dates" className="flex">
          <span className="w-24">開催日時：</span>
          <div className="flex  flex-col lg:flex-row w-full">
            <input
              {...register('startDate', { required: '開催日時は必須入力です' })}
              type="datetime-local"
              name="startDate"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
              value={state.startDate}
              onChange={(e) => handleChange(e)}
            />
            <span className="mx-1">〜</span>
            <input
              type="datetime-local"
              name="endDate"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
              value={state.endDate}
              onChange={(e) => handleChange(e)}
            />
            {errors.startDate && (
              <small className="text-red-500 block">
                {errors.startDate.message}
              </small>
            )}
          </div>
        </label>
        <label htmlFor="name">
          開催地：
          <input
            {...register('region', { required: '開催地は必須入力です' })}
            type="text"
            id="name"
            name="region"
            className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            value={state.region}
            onChange={(e) => handleChange(e)}
          />
          {errors.region && (
            <small className="text-red-500 block">
              {errors.region.message}
            </small>
          )}
        </label>
      </form>

      <div className="w-11/12 flex items-center justify-end gap-3 absolute bottom-2 mx-auto right-0 left-0">
        <button
          className="flex bg-gray-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 "
          onClick={handleCancel}
        >
          <span className="text-lg mr-2">cancel</span>
          <Cancel></Cancel>
        </button>
        <button
          className="flex bg-orange-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50"
          onClick={handleAdd}
        >
          <span className="text-lg mr-2">add</span>
          <AddCircle></AddCircle>
        </button>
      </div>
    </div>
  );
};

export default CompanyEventForm;
