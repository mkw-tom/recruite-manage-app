import { AddCircle, FilterList, Search } from '@mui/icons-material';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import { usePosts } from '../../../state/context/PostsContext';
import { useEffect, useState } from 'react';
import Card from './Card';
// import { useAuth } from '../../../state/context/AuthContext';
import { PostType } from '../../../types/typs';
import { useSelectPost } from '../../../state/context/SelectPostContext';

const CardList = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const { formsOpenDispatch } = useFormsOpen();
  const { posts } = usePosts();
  const { setShowDetail } = useSelectPost();
  const openAddPostForm = () => {
    formsOpenDispatch({ type: 'OPEN ADDPOSTFORM' });
  };
  const [filterPosts, setFilterPosts] = useState<PostType[]>([]);
  const completed = posts.filter((post) => post.completed === true);
  useEffect(() => {
    setFilterPosts(posts);
  }, [posts]);

  const completedPosts = () => {
    setFilterPosts(completed);
    setShowDetail(false);
  };

  const allPosts = () => {
    setFilterPosts(posts);
    setShowDetail(false);
  };

  useEffect(() => {
    const searchData = posts.filter((post) =>
      post.name?.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilterPosts(searchData);
  }, [posts, searchInput]);

  return (
    <div className="flex flex-col w-full lg:w-1/2  lg:border-l-2 ml-auto">
      <nav className="w-full h-auto flex items-center justify-end mx-2 px-1 rounded-t-md pb-2 ">
        <button
          className="flex items-center justify-center w-4/12 h-8 rounded-full bg-blue-800 text-white mr-3 gap-1 shadow-lg"
          onClick={openAddPostForm}
        >
          <span className="text-center font-bold">企業の登録</span>
          <AddCircle className="" />
        </button>
        <div className="flex items-center  flex-1 w-auto h-10">
          <span className="pl-1 pt-1 h-8 rounded-l-full bg-gray-200 shadow-md">
            <Search className=" text-gray-600 p-1"></Search>
          </span>
          <input
            type="text"
            placeholder="企業名を検索"
            className="flex-1 outline-none py-1 h-8 bg-gray-200 shadow-md pl-2"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="items-center text-center text-white h-8 rounded-r-full bg-gray-500 shadow-md group relative">
          <FilterList className="m-1 pr-1" />
          <ul className="hidden group-hover:flex flex-col w-48 bg-gray-100 absolute top-1 right-5 rounded-md z-40 py-1">
            <button
              className="flex items-center justify-center border-b-2 text-blue-900 py-2 font-bold hover:opacity-70"
              onClick={completedPosts}
            >
              <span>内定・参加確定</span>
              <span className="bg-orange-500 rounded-full w-6 h-6 ml-1 block">
                {completed.length}
              </span>
            </button>
            <button
              className="flex text-blue-900 py-2 font-bold hover:opacity-70 items-center justify-center"
              onClick={allPosts}
            >
              <span>全ての企業</span>
              <span className="bg-green-500 rounded-full w-6 h-6 ml-1 block">
                {posts.length}
              </span>
            </button>
          </ul>
        </div>
      </nav>
      {/* {filterPosts.length === 0 || filterPosts === undefined ? (
        <ul
          className="w-full flex flex-col gap-5 mx-2 overflow-y-scroll p-3 shadow-inner"
          style={{ height: '550px' }}
        >
          {posts?.map((card) => <Card key={card.customId} card={card} />)}
        </ul>
      ) : ( */}
      <ul
        className="w-full flex flex-col gap-5 mx-2 overflow-y-scroll p-3 shadow-inner"
        style={{ height: '550px' }}
      >
        {filterPosts?.map((card) => <Card key={card.customId} card={card} />)}
      </ul>
      {/* )} */}
    </div>
  );
};

export default CardList;
