import { useRef } from 'react';
import { AddCircle, ArrowBack, Task, SkipNext } from '@mui/icons-material';
import { usePosts } from '../../../state/context/PostsContext';
import { EditMyPageType } from '../../../types/contextTypes';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import { useSelectPost } from '../../../state/context/SelectPostContext';

const EditMyPageForm = ({
  setTranslateY,
}: {
  setTranslateY: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const urlRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { formsOpenDispatch } = useFormsOpen();
  const { selectPost, fetchSelectPosts, setShowDetail } = useSelectPost();
  const { editMyPage } = usePosts();

  const handleSkip = () => {
    formsOpenDispatch({ type: 'CLOSE FORM' });
    setTranslateY(`-translate-x-1 transition ease-out`);
    fetchSelectPosts(selectPost?.customId as string);
    setShowDetail(true);
  };

  const handleBack = () => {
    setTranslateY(`-translate-x-1 transition ease-out`);
  };

  const handleSave = () => {
    const mypageData: EditMyPageType = {
      url: urlRef?.current?.value,
      id: idRef?.current?.value,
      password: passwordRef?.current?.value,
    };
    editMyPage(selectPost?.customId as string, mypageData);
    formsOpenDispatch({ type: 'CLOSE FORM' });
    setTranslateY(`-translate-x-1 transition ease-out`);
    fetchSelectPosts(selectPost?.customId as string);
    setShowDetail(true);
  };

  return (
    <div className="w-1/2 p-8 relative">
      <div className="flex justify-between mb-5 w-full rounded-t-md">
        <h1 className="text-2xl text-blue-700 font-bold flex items-center">
          <Task style={{ fontSize: '33px' }} />
          <span>マイページ設定</span>
        </h1>
        {/* <button onClick={() => setOpen(!open)}>閉じる</button> */}
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
            ref={urlRef}
          />
        </label>
        <label htmlFor="id">
          ID：
          <input
            type="text"
            id="id"
            name="id"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={idRef}
          />
        </label>
        <label htmlFor="password">
          password：
          <input
            type="text"
            id="password"
            name="password"
            className="bg-white shadow-inner border-2 rounded-md w-2/5"
            ref={passwordRef}
          />
        </label>
      </form>

      <div className="w-11/12 flex items-center gap-3 absolute bottom-2 mx-auto right-0 left-0">
        <button
          className="flex bg-gray-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 mr-auto"
          onClick={handleBack}
        >
          <ArrowBack></ArrowBack>
          <span className="text-lg ml-2">back</span>
        </button>
        <button
          className="flex bg-sky-500 items-center justify-center rounded-sm text-white w-1/4 h-12 hover:opacity-50 "
          onClick={handleSkip}
        >
          <span className="text-lg mr-2">skip</span>
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

export default EditMyPageForm;
