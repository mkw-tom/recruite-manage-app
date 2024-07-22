import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../axios";
import { useAuth } from "./AuthContext";

type PostType = {
  userId: string;
  name: string;
  event: string;
  region: string;
  date: string;
  mypage: {
    url: string;
    id: string;
    password: string;
  };
  taskFlow: [
    {
      task: string;
      situation: string;
      testFormat: string;
      date: string;
      limitData: string;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
};

interface PostsContextType {
  fetchPosts: (userId: string) => void,
  posts: PostType[],
 }

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const PostsProvider = ({children}: {children: ReactNode}) => {
  const [posts, setPosts] = useState<PostType[] >([]);
  const {user} = useAuth()

    const fetchPosts = async (userId: string) => {
      const response = await api.get(`/posts/${userId}`)
        .then((res) => setPosts(res.data))
        .catch((error) => console.log(error));
    }

 

  const contextValue = {
    fetchPosts,
    posts,
  }

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  )
};

export default PostsProvider