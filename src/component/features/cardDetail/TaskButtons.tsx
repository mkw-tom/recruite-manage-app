import React, { memo, useCallback } from 'react';
import useTaskButtonAction from '../../../hooks/useTaskButtonAction';
// import TaskAddAndEditHook from '../../../hooks/TaskAddAndEditHook';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import { usePosts } from '../../../state/context/PostsContext';
import useTaskAddAndEdit from '../../../hooks/useTaskAddAndEdit';
import { useAuth } from '../../../state/context/AuthContext';

const TaskButtons = memo(() => {
  const { taskSituationChange, handlCompleted, changeNext } =
    useTaskButtonAction();
  const { selectPost, current, setSelectPostTasks, selectPostTasks } =
    useSelectPost();
  const { editTask } = useTaskAddAndEdit();
  const { fetchPosts } = usePosts();
  const { user } = useAuth();

  const taskSituationBack = useCallback(() => {
    if (current?.situation === '結果待ち') {
      editTask(selectPost?.customId as string, current?.customId as string, {
        ...current,
        situation: '未完了',
      });
      const editData = selectPostTasks.map((task) => {
        if (task.customId === current.customId) {
          task.situation = '未完了';
        }
        return task;
      });
      setSelectPostTasks(editData);
      fetchPosts(user?._id as string);
    } else if (current?.situation === '通過') {
      editTask(selectPost?.customId as string, current?.customId as string, {
        ...current,
        situation: '結果待ち',
        finished: false,
      });
      const editData = selectPostTasks.map((post) => {
        if (post.customId === current.customId) {
          post.situation = '結果待ち';
          post.finished = false;
        }
        return post;
      });
      setSelectPostTasks(editData);
      fetchPosts(user?._id as string);
    } else {
      alert('更新できませんでした');
    }
  }, [
    current,
    editTask,
    fetchPosts,
    selectPost?.customId,
    selectPostTasks,
    setSelectPostTasks,
    user?._id,
  ]);

  return (
    <div className="flex w-full h-auto justify-end gap-3 ml-auto mt-5 md:mt-auto">
      <button
        className={`w-2/6 h-10 bg-gray-500 text-white font-bold rounded-md ${selectPost?.completed || current?.situation === '未完了' ? 'opacity-30' : ''}`}
        onClick={taskSituationBack}
        disabled={
          selectPost?.completed || current?.situation === '完了' ? true : false
        }
      >
        戻る
      </button>
      {current?.finished === true ? (
        <>
          <button
            className={`w-4/6 h-10 hover:opacity-70 text-white font-bold rounded-md ${selectPost?.completed ? 'bg-gray-500' : 'bg-orange-500'}`}
            onClick={handlCompleted}
          >
            {selectPost?.completed ? '取り消し' : '内定・参加確定'}
          </button>
          <button
            className={`w-4/6 h-10 hover:opacity-70 text-white font-bold rounded-md ${selectPost?.completed ? 'bg-blue-200' : ' bg-blue-700'}`}
            onClick={changeNext}
          >
            次へ
          </button>
        </>
      ) : (
        <button
          className="w-4/6 h-10 bg-blue-800 hover:opacity-70 text-white font-bold rounded-md"
          onClick={taskSituationChange}
        >
          {current?.situation === '未完了' ? '完了' : '通過'}
        </button>
      )}
    </div>
  );
});

TaskButtons.displayName = 'TaskButtons';

export default TaskButtons;
