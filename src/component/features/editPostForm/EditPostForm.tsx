import React, { useState } from 'react';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import EditCompnyAndEventForm from './EditCompnyAndEventForm';
import EditMyPageForm from './EditMyPageForm';

const EditPostForm = () => {
  const [translateY, setTranslateY] = useState<string>('');
  const { formsOpenState } = useFormsOpen();
  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-40 bg-gray-900 z-50 `}
      style={{ display: formsOpenState.editPostFormOpen ? 'block' : 'none' }}
    >
      <div className="w-11/12  mx-auto overflow-hidden   ">
        <div
          className={`bg-white w-full h-auto mt-36 ${translateY}`}
          style={{ width: 'calc(100% * 2)' }}
        >
          <div className="w-full h-auto ">
            <div className="flex w-full h-full ">
              <EditCompnyAndEventForm setTranslateY={setTranslateY} />
              <EditMyPageForm setTranslateY={setTranslateY} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostForm;
