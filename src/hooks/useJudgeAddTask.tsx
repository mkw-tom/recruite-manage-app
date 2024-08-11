import { useSelectPost } from '../state/context/SelectPostContext';
import { TaskType } from '../types/typs';
import { AddEditTaskState } from '../state/reducer/AddEditTaskReducer';
import useTaskAddAndEdit from './useTaskAddAndEdit';
import { v4 as uuidv4 } from 'uuid';

const useJudgeAddTask = () => {
  const { selectPost, selectPostTasks, setSelectPostTasks } = useSelectPost();
  const { pushTask } = useTaskAddAndEdit();
  const current = selectPostTasks?.filter(
    (task: TaskType) => task.current === true
  ).length;
  const next = selectPostTasks?.filter(
    (task: TaskType) => task.next === true
  ).length;

  const handleJudgeAddTask = (state: AddEditTaskState) => {
    const reqDatas = {
      customId: uuidv4(),
      ...state,
      situation: '未完了',
      edit: false,
    };

    if (current === 0) {
      const newReqDatas = {
        ...reqDatas,
        current: true,
        next: false,
        finished: false,
      };
      setSelectPostTasks((prev) => [...prev, newReqDatas]);
      pushTask(selectPost?.customId as string, newReqDatas);
      // fetchSelectPosts(selectPost?.id as string);
      return;
    }

    if (next === 0) {
      const newReqDatas = {
        ...reqDatas,
        current: false,
        next: true,
        finished: false,
      };
      setSelectPostTasks((prev) => [...prev, newReqDatas]);
      pushTask(selectPost?.customId as string, newReqDatas);
      // fetchSelectPosts(selectPost?.id as string);
      return;
    }

    const newReqDatas = {
      ...reqDatas,
      current: false,
      next: false,
      finished: false,
    };
    setSelectPostTasks((prev) => [...prev, newReqDatas]);
    pushTask(selectPost?.customId as string, newReqDatas);
    // fetchSelectPosts(selectPost?.id as string);
    return;
  };

  return handleJudgeAddTask;
};

export default useJudgeAddTask;
