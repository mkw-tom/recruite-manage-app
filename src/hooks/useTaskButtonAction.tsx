import { useSelectPost } from '../state/context/SelectPostContext';
import useTaskAddAndEdit from './useTaskAddAndEdit';
import { useAuth } from '../state/context/AuthContext';
import { usePosts } from '../state/context/PostsContext';

const useTaskButtonAction = () => {
  const { editTask } = useTaskAddAndEdit();
  const { user } = useAuth();
  const { editCompleted, setPosts, posts, fetchPosts } = usePosts();
  const {
    selectPost,
    setSelectPost,
    selectPostTasks,
    setSelectPostTasks,
    fetchSelectPosts,
    current,
    next,
  } = useSelectPost();

  //内定・参加確定ボタン』
  const handlCompleted = () => {
    if (selectPost?.completed) {
      editCompleted(selectPost?.customId as string, { completed: false });
      const editData = posts.map((post) => {
        if (post.customId === selectPost?.customId) {
          post.completed = false;
        }
        return post;
      });
      setPosts(editData);
      setSelectPost((prev) => ({ ...prev, completed: false }));
      return;
    }

    editCompleted(selectPost?.customId as string, { completed: true });
    const editData = posts.map((post) => {
      if (post.customId === selectPost?.customId) {
        post.completed = true;
      }
      return post;
    });
    setPosts(editData);
    setSelectPost((prev) => ({ ...prev, completed: true }));
  };

  //タスクの進捗状況を変更する
  const taskSituationChange = () => {
    if (current?.situation === '未完了') {
      editTask(selectPost?.customId as string, current?.customId as string, {
        ...current,
        situation: '結果待ち',
      });
      const editData = selectPostTasks.map((task) => {
        if (task.customId === current.customId) {
          task.situation = '結果待ち';
        }
        return task;
      });
      setSelectPostTasks(editData);
      fetchPosts(user?._id as string);
    } else if (current?.situation === '結果待ち') {
      editTask(selectPost?.customId as string, current?.customId as string, {
        ...current,
        situation: '通過',
        finished: true,
      });
      const editData = selectPostTasks.map((post) => {
        if (post.customId === current.customId) {
          post.situation = '通過';
          post.finished = true;
        }
        return post;
      });
      setSelectPostTasks(editData);
      fetchPosts(user?._id as string);
    } else {
      alert('更新できませんでした');
    }
  };

  //次のタスクへ移動ボタン
  const changeNext = () => {
    const getNext = selectPostTasks.find(
      (task) => !task?.finished && !task?.current && !task?.next
    );
    if (next === undefined) return alert('次のタスクを設定してください');
    editTask(selectPost?.customId as string, current?.customId as string, {
      ...current,
      finished: true,
      current: false,
    });
    editTask(selectPost?.customId as string, next?.customId as string, {
      ...next,
      next: false,
      current: true,
    });
    editTask(selectPost?.customId as string, getNext?.customId as string, {
      ...getNext,
      next: true,
    });

    const editData = selectPostTasks.map((task) => {
      if (task.customId === current?.customId) {
        task.current === false;
      } else if (task.customId === next?.customId) {
        task.next = false;
        task.current = true;
      } else if (task.customId === getNext?.customId) {
        task.next = true;
      }
      return task;
    });
    setSelectPostTasks(editData);
    fetchPosts(user?._id as string);
    fetchSelectPosts(selectPost?.customId as string);
  };

  return { handlCompleted, taskSituationChange, changeNext };
};

export default useTaskButtonAction;
