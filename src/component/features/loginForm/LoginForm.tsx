import { CancelOutlined, HowToReg, Login } from '@mui/icons-material';
import React, { useState } from 'react';
import { useAuth } from '../../../state/context/AuthContext';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import { useForm } from 'react-hook-form';
import { LoginFormType } from '../../../types/validationType';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { formsOpenDispatch } = useFormsOpen();
  const { login, regist } = useAuth();
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<LoginFormType>();
  const handleLogin = async (): Promise<void> => {
    const usernameValid = await trigger('username');
    const passwordValid = await trigger('password');
    if (usernameValid && passwordValid) {
      login(username, password);
    } else {
      // eslint-disable-next-line no-console
      console.log('inValid');
    }
  };

  const handleRegist = async (): Promise<void> => {
    const usernameValid = await trigger('username');
    const passwordValid = await trigger('password');
    if (usernameValid && passwordValid) {
      regist(username, password);
    } else {
      // eslint-disable-next-line no-console
      console.log('inValid');
    }
  };

  const closeForm = () => formsOpenDispatch({ type: 'CLOSE FORM' });

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-700 bg-opacity-80 z-30">
      <div
        className={`flex flex-col items-center gap-3 h-auto w-3/4 md:w-1/2 rounded-md mx-auto p-8 bg-white relative shadow-md mt-48`}
      >
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={closeForm}
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
        <div className="w-11/12 flex flex-col items-center gap-10 mt-6 justify-center">
          <div className="flex flex-col md:flex-row w-full font-bold items-center justify-center gap-1">
            <span className="w-full md:w-1/4">ユーザー名</span>
            <input
              type="text"
              className="bg-gray-50 w-3/4 rounded-sm shadow-inner border-2 outline-blue-500 "
              {...register('username', {
                required: 'ユーザーネームは必須入力です',
              })}
              // ref={usernameRef}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            {errors.username && (
              <small className="text-red-500 block">
                {errors.username.message}
              </small>
            )}
          </div>

          <div className="flex flex-col md:flex-row w-full font-bold items-center justify-center gap-1">
            <span className="w-full md:w-1/4 ">Password</span>
            <input
              type="text"
              className="bg-gray-50 w-3/4 rounded-sm shadow-inner border-2 outline-blue-500"
              {...register('password', {
                required: 'パスワードは必須入力です',
                minLength: {
                  value: 6,
                  message: '6文字以上で設定してください',
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: 'パスワードは英文字と数字の両方を含む必要があります',
                },
              })}
              // ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {errors.password && (
              <small className="text-red-500 block">
                {errors.password.message}
              </small>
            )}
          </div>
          {isLogin ? (
            <button
              type="submit"
              className="flex items-center gap-4 justify-center bg-blue-600 text-white px-2 py-4 w-full rounded-md mt-3 font-bold hover:opacity-75"
              onClick={handleLogin}
            >
              <Login />
              ログイン
            </button>
          ) : (
            <button
              type="submit"
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
