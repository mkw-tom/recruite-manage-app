import {
  CancelOutlined,
  Diversity1Outlined,
  HowToReg,
  Login,
  Password,
} from "@mui/icons-material";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { usePosts } from "../../context/PostsContext";

const LoginForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { user, login } = useAuth();
  const { fetchPosts } = usePosts()

  const handleLogin = () => {
    login(emailRef?.current?.value!, passwordRef?.current?.value! );
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-700 bg-opacity-80 z-30">
      <div
        className={`flex flex-col items-center gap-3 h-auto w-3/4 md:w-1/2 rounded-md mx-auto p-8 bg-white relative shadow-md mt-36`}
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
              isLogin ? "border-b-blue-700 border-b-4" : ""
            }`}
            onClick={() => setIsLogin(true)}
          >
            ログイン
          </button>
          <button
            className={`w-1/2 py-1  hover:bg-gray-200 duration-150 font-bold ${
              isLogin ? "" : "border-b-blue-700 border-b-4"
            }`}
            onClick={() => setIsLogin(false)}
          >
            新規登録
          </button>
        </div>
        <div className="w-full  flex flex-col items-center gap-5 mt-4">
          <label className="flex w-full font-bold">
            Email：
            <input
              type="text"
              className="bg-gray-50 w-full rounded-sm shadow-inner border-2 outline-blue-500 "
              ref={emailRef}
            ></input>
          </label>
          <label className="flex w-full font-bold">
            Password：
            <input
              type="text"
              className="bg-gray-50 w-full rounded-sm shadow-inner border-2 outline-blue-500"
              ref={passwordRef}
            ></input>
          </label>
          {isLogin ? (
            <button
              className="flex items-center gap-4 justify-center bg-blue-600 text-white px-2 py-2 w-full rounded-md mt-3 font-bold hover:opacity-75"
              onClick={handleLogin}
            >
              <Login />
              ログイン
            </button>
          ) : (
            <button className="flex items-center gap-4 justify-center bg-blue-600 text-white px-2 py-2 w-full rounded-md mt-3 font-bold">
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
