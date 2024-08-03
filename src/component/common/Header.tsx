import React from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '../../state/context/AuthContext';
import { usePosts } from '../../state/context/PostsContext';
import { useState } from 'react';

const Header = () => {
  const [styleChange, setStyleChange] = useState(false);
  const { user, logOut } = useAuth();
  const { allPostsLength, fetchPosts, completedPosts } = usePosts();

  // const completedPosts = posts.filter((post) => post.completed === true);

  const showAllPosts = () => {
    fetchPosts(user?._id as string);
    setStyleChange(false);
  };

  const showCompletedPosts = () => {
    completedPosts();
    setStyleChange(true);
  };

  return (
    <header>
      <div className="flex w-full bg-blue-800 h-20 items-center justify-between pr-8 fixed top-0 z-20">
        <div className="flex items-center">
          {user ? <Sidebar /> : <div className="w-16"></div>}
          <h1 className="text-white ml-3 md:ml-8 font-bold md:text-xl">
            Smart就活管理
          </h1>
        </div>
        <div className="flex gap-3">
          {user ? (
            <button
              className="bg-white rounded-md text-blue-800 px-3 py-2 hover:opacity-80 duration-300"
              onClick={logOut}
            >
              ログアウト
            </button>
          ) : (
            <></>
          )}

          {/* <button className="bg-white rounded-md text-blue-800 px-3 py-2 hover:opacity-80 duration-300">
          新規登録
        </button> */}
        </div>

        {user ? (
          <nav className="bg-white top-20 w-full h-10 fixed shadow-md bg-opacity-65 z-20">
            <ul className="flex w-full h-full justify-around items-center text-blue-500 font-bold text-center">
              <button
                className={`border-r-2 w-6/12 h-full border-b-2  flex items-center justify-center gap-2 ${styleChange ? '' : 'border-b-blue-600'}`}
                onClick={showAllPosts}
              >
                <span>全てのイベント</span>
                <span className="w-6 h-6 bg-green-500 rounded-full text-white">
                  {allPostsLength}
                </span>
              </button>
              <button
                className={`w-6/12 h-full border-b-2 flex items-center justify-center gap-2 ${styleChange ? 'border-b-blue-600' : ''}`}
                onClick={showCompletedPosts}
              >
                <span>内定・参加確定済み</span>
                <span className="w-6 h-6 bg-orange-500 rounded-full text-white">
                  {completedPosts.length}
                </span>
              </button>
            </ul>
          </nav>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
