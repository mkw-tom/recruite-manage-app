import {
  AccountBox,
  LibraryBooksTwoTone,
  Person,
  TaskAlt,
  AppShortcut,
} from '@mui/icons-material';
import LoginForm from '../component/features/loginForm/LoginForm';
import DesignBox from '../component/features/loginForm/DesignBox';
import DescriptionBox from '../component/features/loginForm/DescriptionBox';
import { useFormsOpen } from '../state/context/FormsOpenContext';

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { formsOpenState, formsOpenDispatch } = useFormsOpen();

  const openLoginForm = () => formsOpenDispatch({ type: 'OPEN LOGINFORM' });

  return (
    <div className="w-full h-full pb-24">
      <div className="mt-20"></div>

      <main className="flex flex-wrap w-full h-full px-5">
        <div className="flex flex-col gap-5 w-full h-auto lg:w-1/2  text-center mt-36 items-center mx-auto border-b-2 pb-10 lg:border-b-0">
          <h1 className="text-6xl font-bold text-blue-900">Smart就活管理</h1>
          <h2 className="text-2xl font-bold mb-4">就活をもっとスマートに</h2>

          <ul className="w-7/10 flex-flex-col items-center text-lg mb-4">
            <li>
              <TaskAlt className="mr-2 text-green-800"></TaskAlt>
              <span>エントリー企業をカンタン登録・編集</span>
            </li>
            <li className="flex items-center">
              <TaskAlt className="mr-2 text-green-800"></TaskAlt>
              <span>イベントの詳細情報がすぐわかる</span>
            </li>
            <li className="flex items-center">
              <TaskAlt className="mr-2 text-green-800"></TaskAlt>
              <span>タスクの進捗状況を可視化</span>
            </li>
          </ul>

          <button
            className="flex gap-2 items-center justify-center bg-blue-700 w-1/2 py-2 text-white font-bold rounded-md"
            onClick={openLoginForm}
          >
            <AccountBox />
            <span>Getting started</span>
          </button>

          {formsOpenState.loginFormOpen ? <LoginForm /> : <></>}
        </div>

        <div className="w-full h-auto lg:w-1/2 flex-col  justify-center items-center">
          <DesignBox />
          <p className="text-xl font-bold text-center mt-7">・・・</p>
        </div>
      </main>
      <hr className="my-32" />
      <section>
        <h2 className="text-center text-4xl mb-2 font-bold">Smart就活管理</h2>
        <h3 className="text-center text-2xl">
          これまでの煩雑な企業管理のストレスを軽減
        </h3>
        <DescriptionBox />
        <div className="flex items-center w-11/12 mx-auto flex-col ">
          <div className="w-full lg:w-3/5 mx-auto mb-10">
            <DesignBox />
          </div>
          <div className="flex w-8/12 md:w-3/5 flex-col lg:flex-row text-center mx-auto  justify-around gap-10 text-blue-800">
            <p className="font-bold text-xl ">
              <Person></Person>
              <span className="ml-3">ESまで管理</span>
            </p>
            <p className="font-bold text-xl">
              <LibraryBooksTwoTone></LibraryBooksTwoTone>
              <span className="ml-3">選考フローを可視化</span>
            </p>
            <p className="font-bold text-xl">
              <AppShortcut />
              <span className="ml-3">スマートフォン対応</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
