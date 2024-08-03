import React from 'react';
import { ReactNode, createContext, useContext, useState } from 'react';
import { api } from '../../axios';
import { PostType } from '../../types/typs';

interface PostsContextType {
  posts: PostType[];
  allPostsLength: number | null;
  completedPostsLength: number | null;
  fetchPosts: (userId: string) => void;
  completedPosts: () => void;
}

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);

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
  const [allPostsLength, setAllPostsLength] = useState<number | null>(0);
  const [completedPostsLength, setCompletedPostsLength] = useState<
    number | null
  >(0);

  const fetchPosts = async (userId: string) => {
    await api
      .get(`/posts/${userId}`)
      .then((res) => {
        setPosts(res.data);
        setAllPostsLength(res.data.length);
      })
      .catch((error) => alert(error));
  };

  const completedPosts = () => {
    const completedData = posts.filter((post) => post.completed === true);
    setCompletedPostsLength(completedData.length);
    setPosts(completedData);
  };

  const contextValue = {
    posts,
    allPostsLength,
    completedPostsLength,
    fetchPosts,
    completedPosts,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
