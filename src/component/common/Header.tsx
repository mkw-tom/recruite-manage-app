// import React from 'react';
import { useAuth } from '../../state/context/AuthContext';
// import { usePosts } from '../../state/context/PostsContext';
// import { useState } from 'react';
import {
  Home,
  LibraryBooksTwoTone,
  Login,
  Logout,
  Person2,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useFormsOpen } from '../../state/context/FormsOpenContext';
import { useSelectPost } from '../../state/context/SelectPostContext';
import { usePosts } from '../../state/context/PostsContext';

const Header = () => {
  const { user, logOut } = useAuth();
  const { formsOpenDispatch } = useFormsOpen();
  const { setPosts } = usePosts();
  const { setSelectPost, setSelectPostTasks } = useSelectPost();
  const openLoginForm = () => formsOpenDispatch({ type: 'OPEN LOGINFORM' });
  const handleLogOut = () => {
    logOut();
    setSelectPost(undefined);
    setSelectPostTasks([]);
    setPosts([]);
  };

  return (
    <header className="">
      <div className="flex w-full text-white bg-blue-800 h-20 items-center justify-between pr-8 absolute top-0 z-20 shadow-md border-t-4 border-blue-800">
        <div className="flex items-center">
          <div
            className={`w-auto h-auto md:hidden ${user ? 'block' : 'hidden'}`}
          >
            <Sidebar />
          </div>
          <h1 className="ml-10 md:ml-15 font-bold md:text-2xl">
            Smart就活管理
          </h1>
        </div>
        <div className="flex gap-3">
          {user ? (
            <nav className=" w-72 hidden md:block mr-5">
              <ul className="flex w-full h-full gap-4 items-center font-bold text-center">
                <Link
                  to="/home"
                  className={`w-24 h-full flex items-center justify-center `}
                >
                  <Home></Home>
                  <span className="ml-1">Home</span>
                </Link>
                <Link
                  to="/profile"
                  className={`w-24 h-full flex items-center justify-center `}
                >
                  <Person2></Person2>
                  <span className="ml-1">Profile</span>
                </Link>
                <Link
                  to="entrySheet"
                  className={`w-24 h-full flex items-center justify-center `}
                >
                  <LibraryBooksTwoTone></LibraryBooksTwoTone>
                  <span className="ml-1">ES管理</span>
                </Link>
              </ul>
            </nav>
          ) : (
            <></>
          )}
          {user ? (
            <button
              className="flex items-center gap-1 text-blue-800 font-bold rounded-md bg-white px-3 py-2 hover:opacity-80 duration-300"
              onClick={handleLogOut}
            >
              ログアウト
              <Logout />
            </button>
          ) : (
            <button
              className="flex items-center gap-1 text-blue-800 font-bold rounded-md bg-white px-3 py-2 hover:opacity-80 duration-300"
              onClick={openLoginForm}
            >
              ログイン/新規登録
              <Login />
            </button>
          )}

          {/* <button className="bg-white rounded-md text-blue-800 px-3 py-2 hover:opacity-80 duration-300">
          新規登録
        </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
