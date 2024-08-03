import React, { useState } from 'react';
import '../index.css';
import CardList from '../component/features/homeCard/CardList';
import AddFrom from '../component/addForm/AddForm';
import { usePosts } from '../state/context/PostsContext';
import { AddCircleOutline } from '@mui/icons-material';

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { posts } = usePosts();

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-auto">
      <div className="h-28"></div>

      <main className="w-full h-auto mt-24">
        {posts ? (
          <CardList />
        ) : (
          <div className="w-96 h-96 flex flex-col items-center justify-center  mx-auto gap-5 rounded-md ">
            <p className="text-2xl mb-8">登録した企業データがありません💦</p>
            <button
              className="flex items-center gap-1 justify-center bg-blue-500 text-white font-bold text-xl w-56 h-16 rounded-sm shadow-lg hover:opacity-70"
              onClick={() => setOpen(true)}
            >
              <AddCircleOutline></AddCircleOutline>
              <span>企業を登録する</span>
            </button>
          </div>
        )}
      </main>

      <AddFrom open={open} setOpen={setOpen} />

      <div className="flex flex-col fixed bottom-20 lg:bottom-24 right-3 lg:right-10 items-center">
        <p className="text-blue-800 mb-1">企業を追加</p>
        <button
          className=" bg-blue-600 opacity-70 w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-xl text-white text-xl lg:text-3xl font-bold"
          onClick={toggle}
        >
          ＋
        </button>
      </div>
    </div>
  );
};

export default Home;
