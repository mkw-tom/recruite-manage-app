import { CancelOutlined, HowToReg, Login } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import { useAuth } from '../../../state/context/AuthContext';

const LoginForm = ({
  setOpen,
}: {
  // open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const { login, regist } = useAuth();

  const handleLogin = () => {
    login(
      emailRef?.current?.value as string,
      passwordRef?.current?.value as string
    );
  };

  const handleRegist = () => {
    regist(
      usernameRef?.current?.value as string,
      emailRef?.current?.value as string,
      passwordRef?.current?.value as string
    );
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-700 bg-opacity-80 z-30">
      <div
        className={`flex flex-col items-center gap-3 h-auto w-3/4 md:w-1/2 rounded-md mx-auto p-8 bg-white relative shadow-md mt-48`}
      >
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={() => setOpen(false)}
        >
          <CancelOutlined />
        </button>
        <div className="flex w-1/2 items-center jusify-around text-blue-700">
          <button
            className={`w-1/2 py-1  hover:bg-gray-200 duration-150 font-bold  ${
              isLogin ? 'border-b-blue-700 border-b-4' : ''
            }`}
            onClick={() => setIsLogin(true)}
          >
            ログイン
          </button>
          <button
            className={`w-1/2 py-1  hover:bg-gray-200 duration-150 font-bold ${
              isLogin ? '' : 'border-b-blue-700 border-b-4'
            }`}
            onClick={() => setIsLogin(false)}
          >
            新規登録
          </button>
        </div>
        <div className="w-11/12 flex flex-col items-center gap-10 mt-6 justify-center ">
          {isLogin ? (
            <></>
          ) : (
            <div className="flex flex-col md:flex-row w-full font-bold items-center justify-center gap-1">
              <span className="w-full md:w-1/4">ユーザー名</span>
              <input
                type="text"
                className="bg-gray-50 w-3/4 rounded-sm shadow-inner border-2 outline-blue-500 "
                ref={usernameRef}
              ></input>
            </div>
          )}
          <div className="flex flex-col md:flex-row w-full font-bold items-center justify-center gap-1">
            <span className="w-full md:w-1/4 ">Email</span>
            <input
              type="text"
              className="bg-gray-50 w-3/4 rounded-sm shadow-inner border-2 outline-blue-500 "
              ref={emailRef}
            ></input>
          </div>
          <div className="flex flex-col md:flex-row w-full font-bold items-center justify-center gap-1">
            <span className="w-full md:w-1/4 ">Password</span>
            <input
              type="text"
              className="bg-gray-50 w-3/4 rounded-sm shadow-inner border-2 outline-blue-500"
              ref={passwordRef}
            ></input>
          </div>
          {isLogin ? (
            <button
              className="flex items-center gap-4 justify-center bg-blue-600 text-white px-2 py-4 w-full rounded-md mt-3 font-bold hover:opacity-75"
              onClick={handleLogin}
            >
              <Login />
              ログイン
            </button>
          ) : (
            <button
              className="flex items-center gap-4 justify-center bg-blue-600 text-white px-2 py-4 w-full rounded-md mt-3 font-bold"
              onClick={handleRegist}
            >
              <HowToReg />
              新規登録
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
