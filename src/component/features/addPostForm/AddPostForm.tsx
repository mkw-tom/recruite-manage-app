import {} from '@mui/icons-material';
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import CompanyEventForm from './CompanyEventForm';
import MyPageForm from './MyPageForm';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
// import {
//   FormsOpenReducer,
//   initialFormsOpenState,
// } from '../../../state/reducer/FormsOpenReducer';

// type OpenProps = {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

const AddPostFrom = () => {
  const [translateY, setTranslateY] = useState<string>('');
  const { formsOpenState } = useFormsOpen();

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-40 bg-gray-900 z-50 `}
      style={{ display: formsOpenState.addPostFormOpen ? 'block' : 'none' }}
    >
      <div className="w-11/12  mx-auto overflow-hidden   ">
        <div
          className={`bg-white w-full h-auto mt-36 ${translateY}`}
          style={{ width: 'calc(100% * 3)' }}
        >
          <div className="w-full h-auto ">
            <div className="flex w-full h-full ">
              <CompanyEventForm
                setTranslateY={setTranslateY}
                // setOpen={setOpen}
              />
              <TaskForm setTranslateY={setTranslateY} />
              <MyPageForm setTranslateY={setTranslateY} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostFrom;
