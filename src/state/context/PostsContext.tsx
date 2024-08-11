import { ReactNode, createContext, useContext, useState } from 'react';
import { api } from '../../axios';
import { PostType } from '../../types/typs';
import {
  AddType,
  EditCompanyAndEventDataType,
  EditMyPageType,
} from '../../types/contextTypes';

interface PostsContextType {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  fetchPosts: (userId: string) => void;
  addPost: (addDatas: AddType) => void;
  addPostData: PostType | undefined;
  editMyPage: (postId: string, mypageData: EditMyPageType) => void;
  editCompleted: (postId: string, editData: { completed: boolean }) => void;
  editCompanyAndEventData: (
    postId: string,
    editData: EditCompanyAndEventDataType
  ) => void;
  deletePost: (postId: string) => void;
  // completedPosts: () => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [addPostData, setAddPostData] = useState<PostType | undefined>();
  // const [allPostsLength, setAllPostsLength] = useState<number | null>(0);
  // const [completedPostsLength, setCompletedPostsLength] = useState<
  //   number | null
  // >(0);

  const fetchPosts = async (userId: string) => {
    await api
      .get(`/posts/${userId}`)
      .then((res) => {
        setPosts(res.data);
        // setAllPostsLength(res.data.length);
      })
      .catch((error) => alert(error));
  };

  const addPost = async (addDatas: AddType) => {
    await api
      .post('/posts/add', addDatas)
      .then((res) => {
        setPosts([...posts, res.data]);
        setAddPostData(res.data);
        return;
      })
      .catch((error) => error);
  };

  const editMyPage = async (postId: string, mypageData: EditMyPageType) => {
    await api
      .put(`/posts/${postId}`, {
        mypage: mypageData,
      })
      .catch((error) => alert(error));
  };

  const editCompleted = async (
    postId: string,
    editData: { completed: boolean }
  ) => {
    await api.put(`/posts/${postId}`, editData).catch((error) => alert(error));
  };

  const editCompanyAndEventData = async (
    postId: string,
    editData: EditCompanyAndEventDataType
  ) => {
    await api.put(`/posts/${postId}`, editData).catch((error) => alert(error));
  };

  const deletePost = async (postId: string) => {
    await api.delete(`/posts/${postId}/delete`).catch((error) => alert(error));
  };

  const contextValue = {
    posts,
    setPosts,
    fetchPosts,
    addPost,
    addPostData,
    editMyPage,
    editCompleted,
    editCompanyAndEventData,
    deletePost,
    // completedPosts,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
