import {
  ReactNode,
  createContext,
  useContext,
  // useEffect,
  useState,
} from 'react';
import { PostType, TaskType } from '../../types/typs';
import { api } from '../../axios';
// import { PushTaskType } from '../../types/contextTypes';

interface SelectPostContextType {
  selectPost: PostType | undefined;
  setSelectPost: React.Dispatch<React.SetStateAction<PostType | undefined>>;
  selectPostTasks: TaskType[];
  setSelectPostTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  showDetail: boolean;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  fetchSelectPosts: (postId: string) => void;
  current: TaskType | undefined;
  next: TaskType | undefined;
}

const SelectPostContext = createContext<SelectPostContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectPost = () => {
  const context = useContext(SelectPostContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const SelectPostProvider = ({ children }: { children: ReactNode }) => {
  const [selectPost, setSelectPost] = useState<PostType | undefined>(undefined);
  const [selectPostTasks, setSelectPostTasks] = useState<TaskType[]>([]);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const current = selectPostTasks.find((task) => task.current === true);
  const next = selectPostTasks.find((task) => task.next === true);

  const fetchSelectPosts = async (postId: string) => {
    await api
      .get(`/posts/${postId}/select`)
      .then((res) => {
        setSelectPost(res.data);
        setSelectPostTasks(res.data.taskFlow);
      })
      .catch((error) => alert(error));
  };

  const contextValue = {
    selectPost,
    setSelectPost,
    selectPostTasks,
    setSelectPostTasks,
    showDetail,
    setShowDetail,
    fetchSelectPosts,
    current,
    next,
    // pushTask,
    // pullTask,
    // editTask,
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <SelectPostContext.Provider value={contextValue}>
      {children}
    </SelectPostContext.Provider>
  );
};
