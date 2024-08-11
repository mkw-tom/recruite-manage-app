// import React from 'react';
import { PushTaskType } from '../types/contextTypes';
import { api } from '../axios';
import { TaskType } from '../types/typs';
import { useCallback } from 'react';

const useTaskAddAndEdit = () => {
  const pushTask = useCallback(
    async (
      postId: string,
      reqDatas: PushTaskType | undefined
    ): Promise<void> => {
      await api
        .put(`/posts/${postId}/addTask`, reqDatas)
        .catch((error) => alert(error));
    },
    []
  );

  const pullTask = useCallback(
    async (postId: string, taskId: string): Promise<void> => {
      await api
        .put(`/posts/${postId}/deleteTask/${taskId}`)
        .catch((error) => alert(error));
    },
    []
  );

  const editTask = useCallback(
    async (
      postId: string,
      taskId: string,
      reqDatas: TaskType | undefined
    ): Promise<void> => {
      await api
        .put(`/posts/${postId}/editTask/${taskId}`, reqDatas)
        .catch((error) => alert(error));
    },
    []
  );

  return { pushTask, pullTask, editTask };
};

export default useTaskAddAndEdit;
