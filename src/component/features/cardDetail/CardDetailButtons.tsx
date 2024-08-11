import { usePosts } from '../../../state/context/PostsContext';
// import { useAuth } from '../../../state/context/AuthContext';
// import CardDetail from './CardDetail';
import { Delete, Edit } from '@mui/icons-material';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import { useSelectPost } from '../../../state/context/SelectPostContext';

const CardDetailButtons = () => {
  const { deletePost, posts, setPosts } = usePosts();
  const { selectPost, setSelectPost, setSelectPostTasks, setShowDetail } =
    useSelectPost();
  const { formsOpenDispatch } = useFormsOpen();

  const openEditPostForm = () => {
    formsOpenDispatch({ type: 'OPEN EDITPOSTFORM' });
    setShowDetail(false);
  };

  const handleDeltePost = () => {
    if (!confirm(`${selectPost?.name}のデータを削除してもよろしいですか？`)) {
      return;
    }
    deletePost(selectPost?.customId as string);
    // fetchPosts(user?._id as string);
    setPosts((prev) =>
      prev.filter((post) => post.customId !== selectPost?.customId)
    );
    setSelectPost(posts[0]);
    setSelectPostTasks([]);
    setShowDetail(false);
  };

  return (
    <nav className="w-full h-11 flex items-center justify-end mx-auto rounded-t-md  px-2">
      {/* <button className="flex items-center justify-center mr-auto font-bold bg-white py-1 rounded-full w-3/12 shadow-md hover:text-yellow-500 ">
              <Star></Star>
              <span className="hidden lg:block">お気に入り登録</span>
            </button> */}
      <button
        className="flex items-center font-bold justify-center  w-3/12 h-8 rounded-full shadow-md bg-white text-blue-800 mr-2"
        onClick={openEditPostForm}
      >
        <Edit></Edit>
        <span>編集</span>
      </button>
      <button
        className="flex items-center font-bold justify-center  w-3/12 h-8 rounded-full shadow-md bg-white text-red-800"
        onClick={handleDeltePost}
      >
        <Delete></Delete>
        <span>削除</span>
      </button>
    </nav>
  );
};

export default CardDetailButtons;
