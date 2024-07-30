import { Children, ReactNode, createContext, useContext, useState } from "react";
import { api } from "../axios";


interface TaskContextProps {
  add: (addDates: any) => void,
  addNext: (reqDatas: any) => void,
  addMyPage: (reqDatas: any) => void
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined)

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context
}


const TaskProvider = ({children}: {children: ReactNode}) => {
  const [newPostId, setNewPostId] = useState<string | undefined>(undefined)

  const add = async (addDatas: any) =>  {
    const response = await api.post("/posts/add", addDatas).then((res) => {
      setNewPostId(res.data._id)
      return console.log(res.data._id)
    }).catch(error => console.log(error))
  }
  
  const addNext = async (reqDatas: any) => {
    console.log(newPostId)
    const response = await api.put(`/posts/${newPostId}/addTask`,  reqDatas).then(() => console.log("更新成功")).catch((error) => console.log(error))
  }

  const addMyPage = async (reqDatas: any) => {
    const response = await api.put(`/posts/${newPostId}`, {
      mypage: reqDatas
    }).then(() => console.log("マイページ設定完了")).catch(error => console.log(error))
  }

  const contextValue = {
    add, 
    addNext,
    addMyPage
  }

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider