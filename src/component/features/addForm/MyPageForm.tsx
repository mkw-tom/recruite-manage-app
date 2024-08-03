import { AddCircle, ArrowBack, Task, SkipNext } from '@mui/icons-material';
import React, { useRef } from 'react';
import { useTask } from '../../context/TaskContext';
import { usePosts } from '../../context/PostsContext';
import { useAuth } from '../../context/AuthContext';

interface MyPageFormProps {
  setTranslateY: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyPageForm = ({ setTranslateY, setOpen }: MyPageFormProps) => {
  const urlRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { editMyPage } = useTask();
  const { user } = useAuth();
  const { fetchPosts } = usePosts();

  const handleSave = () => {
    const mypageData: {
      url: string | undefined;
      id: string | undefined;
      password: string | undefined;
    } = {
      url: urlRef?.current?.value,
      id: idRef?.current?.value,
      password: passwordRef?.current?.value,
    };
    editMyPage(mypageData);
    fetchPosts(user?._id as string);
    setOpen(false);
  };

  return (
    <div className="w-1/3 p-8 relative">
      <div className="flex justify-between mb-5 w-full rounded-t-md">
        <h1 className="text-2xl text-blue-600 font-bold flex items-center">
          <Task style={{ fontSize: '33px' }} />
          <span>マイページ設定</span>
        </h1>
        {/* <button onClick={() => setOpen(!open)}>閉じる</button> */}
      </div>
      <div className="flex flex-col w-full h-auto lg:full gap-6 ml-3 ">
        <h2 className="font-bold text-lg ">マイページの情報を設定</h2>
        <label htmlFor="id">
          URL：
          <input
            type="test"
            id="id"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={urlRef}
          />
        </label>
        <label htmlFor="id">
          ID：
          <input
            type="text"
            id="id"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={idRef}
          />
        </label>
        <label htmlFor="password">
          password：
          <input
            type="password"
            id="password"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={passwordRef}
          />
        </label>
      </div>

      <div className="w-11/12 flex items-center gap-3 absolute bottom-2 mx-auto right-0 left-0">
        <button
          className="flex bg-gray-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 mr-auto"
          onClick={() => setTranslateY('-translate-x-1/3 transition ease-out')}
        >
          <ArrowBack></ArrowBack>
          <span className="text-lg ml-2">back</span>
        </button>
        <button
          className="flex bg-sky-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 "
          onClick={() => setOpen(false)}
        >
          <span className="text-lg mr-2">skip save</span>
          <SkipNext></SkipNext>
        </button>
        <button
          className="flex bg-orange-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50"
          onClick={handleSave}
        >
          <span className="text-lg mr-2">save</span>
          <AddCircle></AddCircle>
        </button>
      </div>
    </div>
  );
};

export default MyPageForm;
