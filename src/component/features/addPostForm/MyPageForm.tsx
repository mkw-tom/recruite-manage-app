import { AddCircle, ArrowBack, Task, SkipNext } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '../../../state/context/AuthContext';
import { usePosts } from '../../../state/context/PostsContext';
import { EditMyPageType } from '../../../types/contextTypes';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import { useSelectPost } from '../../../state/context/SelectPostContext';

const MyPageForm = ({
  setTranslateY,
}: {
  setTranslateY: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [mypageState, setMypageState] = useState({
    url: '',
    id: '',
    password: '',
  });
  const { formsOpenDispatch } = useFormsOpen();
  const { user } = useAuth();
  const { fetchPosts, addPostData, editMyPage } = usePosts();
  const { setSelectPost, setShowDetail } = useSelectPost();
  const stateOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMypageState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkip = () => {
    fetchPosts(user?._id as string);
    setSelectPost(addPostData);
    formsOpenDispatch({ type: 'CLOSE FORM' });
    setTranslateY(``);
    setShowDetail(true);
  };

  const handleSave = () => {
    const mypageData: EditMyPageType = {
      url: mypageState.url,
      id: mypageState.id,
      password: mypageState.password,
    };
    editMyPage(addPostData?.customId as string, mypageData);
    fetchPosts(user?._id as string);
    setSelectPost(addPostData);
    formsOpenDispatch({ type: 'CLOSE FORM' });
    setTranslateY(``);
    setShowDetail(true);
  };

  return (
    <div className="w-1/3 p-8 relative">
      <div className="flex justify-between mb-5 w-full rounded-t-md">
        <h1 className="text-2xl text-blue-600 font-bold flex items-center">
          <Task style={{ fontSize: '33px' }} />
          <span>マイページ設定</span>
        </h1>
      </div>
      <form className="flex flex-col w-full h-auto lg:full gap-6 ml-3">
        <h2 className="font-bold text-lg ">マイページの情報を設定</h2>
        <label htmlFor="id">
          URL：
          <input
            type="text"
            id="id"
            name="url"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            onChange={stateOnChange}
          />
        </label>
        <label htmlFor="id">
          ID：
          <input
            type="text"
            id="id"
            name="id"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            onChange={stateOnChange}
          />
        </label>
        <label htmlFor="password">
          password：
          <input
            type="text"
            id="password"
            name="password"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            onChange={stateOnChange}
          />
        </label>
      </form>

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
          onClick={handleSkip}
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
