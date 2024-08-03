import { AddCircle, Task } from '@mui/icons-material';
import React, { useState } from 'react';
import EditTask from './EditTask';
import { PostType } from '../../../types/typs';
import AddTask from './AddTask';
import TaskFlow from './TaskFlow';
import { usePosts } from '../../../state/context/PostsContext';
import { useAuth } from '../../../state/context/AuthContext';

type AddTaskFormProps = {
  addFormOpen: boolean;
  setAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  card: PostType;
};

const AddTaskForm = ({
  addFormOpen,
  setAddFormOpen,
  card,
}: AddTaskFormProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const { fetchPosts } = usePosts();
  const { user } = useAuth();

  // const cancel = () => {
  //   setAddFormOpen(!addFormOpen);
  // };

  const addSave = () => {
    //ここでタスクデータを保存するAPIを叩く

    setAddFormOpen(!addFormOpen);
    fetchPosts(user?._id as string);
  };

  return (
    <div
      className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-40 bg-gray-900 z-50`}
      style={{ display: addFormOpen ? 'block' : 'none' }}
    >
      <div className="w-11/12 mx-auto overflow-hidden">
        <div className={`bg-white w-full h-auto my-5 p-8 `}>
          <h1 className="text-2xl text-red-600 font-bold flex items-center">
            <Task style={{ fontSize: '33px' }} />
            <span>タスク追加・編集</span>
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 items-start">
            <div className="flex flex-col w-full lg:w-1/2 h-auto">
              <AddTask card={card} edit={edit} />

              <hr />

              {edit ? <EditTask card={card} setEdit={setEdit} /> : <></>}
            </div>

            <hr className="lg:hidden" />

            <TaskFlow card={card} edit={edit} setEdit={setEdit} />
          </div>

          <div className="w-full flex items-center justify-end p-3 gap-3">
            {/* <button
              className="flex bg-gray-500 items-center justify-center rounded-md text-white w-1/4 h-12 hover:opacity-50 "
              onClick={cancel}
            >
              <span className="text-lg mr-2">中止</span>
              <Cancel></Cancel>
            </button> */}
            <button
              className={`flex bg-blue-400 items-center justify-center rounded-md text-white w-1/4 h-12 hover:opacity-50`}
              onClick={addSave}
              disabled={edit ? true : false}
            >
              <span className="text-lg mr-2">戻る</span>
              <AddCircle></AddCircle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
