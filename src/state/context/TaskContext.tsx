import { ReactNode, createContext, useContext, useState } from 'react';
import { api } from '../../axios';
import { TaskType } from '../../types/typs';
import { AddType } from '../../types/contextTypes';

interface TaskContextProps {
  newPostId: string | undefined;
  taskFlow: TaskType[] | undefined;
  setTaskFlow: React.Dispatch<React.SetStateAction<TaskType[] | undefined>>;
  editTaskId: string;
  setEditTaskId: React.Dispatch<React.SetStateAction<string>>;
  // getTaskData: (postId: string) => void,
  editTask: (
    postId: string,
    taskId: string,
    reqDatas: TaskType | undefined
  ) => void;
  add: (addDates: AddType) => void;
  pushTask: (postId: string, reqDatas: TaskType) => void;
  pullTask: (postId: string, taskId: string) => void;
  editMyPage: (reqDatas: {
    url: string | undefined;
    id: string | undefined;
    password: string | undefined;
  }) => void;
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined
);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [newPostId, setNewPostId] = useState<string | undefined>(undefined);
  const [taskFlow, setTaskFlow] = useState<TaskType[] | undefined>([]);
  const [editTaskId, setEditTaskId] = useState<string>('');

  // const getTaskData = async (postId: string) => {
  //   await api.get(`/posts/${postId}/select`).then(res => setTaskData(res.data)).catch(error => console.log(error))
  // }

  const add = async (addDatas: AddType) => {
    await api
      .post('/posts/add', addDatas)
      .then((res) => {
        setNewPostId(res.data._id);
      })
      .catch((error) => error);
  };

  const pushTask = async (postId: string, reqDatas: TaskType) => {
    await api
      .put(`/posts/${postId}/addTask`, reqDatas)
      .then((res) => {
        return res;
      })
      .catch((error) => alert(error));
  };

  const pullTask = async (postId: string, taskId: string) => {
    await api
      .put(`/posts/${postId}/deleteTask/${taskId}`)
      .then((res) => res)
      .catch((error) => alert(error));
  };

  const editTask = async (
    postId: string,
    taskId: string,
    reqDatas: TaskType | undefined
  ) => {
    await api
      .put(`/posts/${postId}/editTask/${taskId}`, reqDatas)
      .then((res) => res)
      .catch((error) => alert(error));
  };

  const editMyPage = async (reqDatas: {
    url: string | undefined;
    id: string | undefined;
    password: string | undefined;
  }) => {
    await api
      .put(`/posts/${newPostId}`, {
        mypage: reqDatas,
      })
      .then((res) => res)
      .catch((error) => alert(error));
  };

  const contextValue = {
    newPostId,
    taskFlow,
    setTaskFlow,
    editTaskId,
    setEditTaskId,
    // getTaskData,
    editTask,
    add,
    pushTask,
    pullTask,
    editMyPage,
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
