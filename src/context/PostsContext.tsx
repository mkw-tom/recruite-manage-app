import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../axios";
import { useAuth } from "./AuthContext";
import { PostType } from "../typs";

// type PostType = {
//   userId: string;
//   name: string;
//   event: string;
//   region: string;
//   date: string;
//   mypage: {
//     url: string;
//     id: string;
//     password: string;
//   };
//   taskFlow: [
//     {
//       task: string;
//       situation: string;
//       testFormat: string;
//       date: string;
//       limitDate: string;
//     }
//   ];
//   createdAt: Date;
//   updatedAt: Date;
// };

interface PostsContextType {
  posts: PostType[],
  allPostsLength: number | null,
  fetchPosts: (userId: string) => void,
  completedPosts: () => void,
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
  const [allPostsLength, setAllPostsLength] = useState<number | null>(null)
  
  
  // const [completedPosts, setCompletedPosts] = useState<PostType>([])


    const fetchPosts = async (userId: string) => {
      const response = await api.get(`/posts/${userId}`)
        .then((res) => {
          setPosts(res.data)
          setAllPostsLength(res.data.length)
        })
        .catch((error) => console.log(error));
    }


    const completedPosts = () => {
      const completedData =  posts.filter((post) => post.completed === true);
      setPosts(completedData)
    }
 

  const contextValue = {
    posts,
    allPostsLength,
    fetchPosts,
    completedPosts,
  }

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  )
};

export default PostsProvider