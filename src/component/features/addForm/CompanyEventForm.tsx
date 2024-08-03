import { AddCircle, BusinessOutlined, Cancel } from '@mui/icons-material';
import React, { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTask } from '../../context/TaskContext';

// eslint-disable-next-line react-refresh/only-export-components
export const eventOptios = [
  '企業説明会・オープンカンパニー',
  'インターンシップ（短期）',
  'インターンシップ（長期）',
  'ハッカソン',
  '本選考',
];

interface CompanyEventFormProps {
  setTranslateY: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyEventForm = ({
  setTranslateY,
  setOpen,
}: CompanyEventFormProps) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const eventRef = useRef<HTMLSelectElement | null>(null);
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const regionRef = useRef<HTMLInputElement | null>(null);

  const { user } = useAuth();
  const { add } = useTask();

  const handleAdd = () => {
    const addDates = {
      userId: user?._id as string,
      name: nameRef?.current?.value as string,
      event: eventRef?.current?.value as string,
      startDate: startDateRef?.current?.value as string,
      endDate: endDateRef?.current?.value as string,
      region: regionRef?.current?.value as string,
    };
    add(addDates);
    setTranslateY(`-translate-x-1/3 transition ease-out`);
  };

  return (
    <div className="w-1/3 p-8 relative">
      <div className="flex justify-between mb-5 w-full">
        <h1 className="text-2xl text-blue-600 font-bold flex items-center">
          <BusinessOutlined style={{ fontSize: '33px' }} />
          <span>企業を追加</span>
        </h1>
        {/* <button onClick={() => setOpen(!open)}>閉じる</button> */}
      </div>
      <div className="flex flex-col w-full h-auto lg:full gap-6 ml-3 mb-20">
        {/* <div className="flex flex-col gap-6 w-full lg:w-1/2"> */}
        <h2 className="text-lg font-bold">企業・イベント</h2>
        <label htmlFor="company">
          企業名：
          <input
            type="text"
            id="company"
            className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            ref={nameRef}
          />
        </label>
        <label htmlFor="event">
          イベント：
          <select
            className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            ref={eventRef}
          >
            {eventOptios.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="dates" className="flex">
          <span className="w-24">開催日時：</span>
          <div className="flex  flex-col lg:flex-row w-full">
            <input
              type="datetime-local"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
              ref={startDateRef}
            />

            {/* 開催日時の開始日時と終了日時は後から修正する */}

            <span className="mx-1">〜</span>
            <input
              type="datetime-local"
              className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5 lg:w-2/5"
              ref={endDateRef}
            />
          </div>
        </label>
        <label htmlFor="name">
          開催地：
          <input
            type="text"
            id="name"
            name="region"
            className="bg-gray-50 shadow-inner border-2 rounded-md w-3/5"
            ref={regionRef}
          />
        </label>
      </div>

      <div className="w-11/12 flex items-center justify-end gap-3 absolute bottom-2 mx-auto right-0 left-0">
        <button
          className="flex bg-gray-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 "
          onClick={() => setOpen(false)}
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
