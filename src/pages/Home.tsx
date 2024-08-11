import { useEffect } from 'react';
import '../index.css';
import AddPostForm from '../component/features/addPostForm/AddPostForm';
import { AddCircleOutline } from '@mui/icons-material';
import CardTools from '../component/features/home/CardTools';
import { useAuth } from '../state/context/AuthContext';
import { usePosts } from '../state/context/PostsContext';
import { useSelectPost } from '../state/context/SelectPostContext';
import BottomDrawer from '../component/features/cardDetail/BottomDrawer';

const Home = () => {
  const { user } = useAuth();
  const { posts, fetchPosts } = usePosts();
  const { setShowDetail } = useSelectPost();

  useEffect(() => {
    fetchPosts(user?._id as string);
    // setSelectPost(posts[0]);
    setShowDetail(false);
  }, [fetchPosts, setShowDetail, user?._id]);

  return (
    <div className="w-full h-auto">
      <div className="h-28"></div>

      <main className="w-full h-auto">
        {posts ? (
          <CardTools />
        ) : (
          <div className="w-96 h-96 flex flex-col items-center justify-center  mx-auto gap-5 rounded-md ">
            <p className="text-2xl mb-8">登録した企業データがありません💦</p>
            <p></p>
            <button className="flex items-center gap-1 justify-center  font-bold text-xl w-56 h-16 rounded-sm shadow-lg hover:opacity-70">
              <AddCircleOutline></AddCircleOutline>
              <span>企業を登録する</span>
            </button>
          </div>
        )}
      </main>

      <AddPostForm />

      <BottomDrawer />
    </div>
  );
};

export default Home;
