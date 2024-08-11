import { TaskType } from '../../../types/typs';
import { Delete, Edit } from '@mui/icons-material';
import EditTaskForm from '../editTaskForm/EditTaskForm';
import TaskAddAndEditHook from '../../../hooks/useTaskAddAndEdit';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
import SituationJudgeHook from '../../../hooks/useSituationJudge';

const Task = ({ task }: { task: TaskType }) => {
  const { selectPost, selectPostTasks, setSelectPostTasks } = useSelectPost();
  const { pullTask } = TaskAddAndEditHook();
  const { formsOpenState, formsOpenDispatch } = useFormsOpen();
  // const [state, dispatch] = useReducer(AddEditPostReducer, initialState);
  const taskJudge = SituationJudgeHook();

  const openEditTaskForm = (taskId: string) => {
    formsOpenDispatch({ type: 'OPEN EDITTASKFORM' });
    const editTask = selectPostTasks.map((task) => {
      if (task.customId === taskId) {
        task.edit = true;
      }
      return task;
    });
    setSelectPostTasks(editTask);
  };

  const handleDelete = (taskId: string) => {
    const selectTask = selectPostTasks.find((task) => task.customId === taskId);
    if (selectTask?.current) {
      return alert('現在進行中のタスクは削除できません。編集のみ有効です');
    }
    if (selectTask?.next) {
      return alert('次のタスクは削除できません。編集のみ有効です');
    }
    pullTask(selectPost?.customId as string, taskId as string);
    setSelectPostTasks(
      selectPostTasks.filter((task) => taskId !== task.customId)
    );
  };

  return (
    <div
      className={`flex border-b-2 ${task.finished ? 'bg-gray-300 opacity-60' : ''}`}
    >
      <div
        className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-40 bg-gray-900 z-50`}
        style={{ display: formsOpenState.editTaskFormOpen ? 'block' : 'none' }}
      >
        <EditTaskForm />
      </div>

      <div className="flex flex-col p-3 gap-1 md:ml-1 flex-1">
        <h3 className="flex items-center">
          {taskJudge(task.situation as string)}
          <p className="font-bold ml-1">{task.task}</p>
          <span className="ml-5 text-sm">{task.situation}</span>
        </h3>
        <p
          className={`border-l-2 border-gray-500 pl-2 ${!task.testFormat ? 'hidden' : 'block'}`}
        >
          テスト形式：
          <span>{task.testFormat}</span>
        </p>
        <p
          className={`border-l-2 border-gray-500 pl-2 ${!task.date ? 'hidden' : 'block'}`}
        >
          実践日時：
          <span>{new Date(task.date as string).toLocaleString()}</span>
        </p>
        <p
          className={`border-l-2 border-gray-500 pl-2 ${!task.limitDate ? 'hidden' : 'block'}`}
        >
          期限：
          <span>{new Date(task.limitDate as string).toLocaleString()}</span>
        </p>
      </div>
      <div className="flex gap-2 items-center w-4/12 h-auto mr-5">
        {task.current ? (
          <span className="text-red-500 ml-auto mr-3 text-center">current</span>
        ) : (
          <></>
        )}
        {task.next ? (
          <span className="text-blue-500 ml-auto mr-3 text-center">next</span>
        ) : (
          <></>
        )}
        <button
          className="w-8 h-8 text-blue-800 ml-auto"
          onClick={() => openEditTaskForm(task?.customId as string)}
          disabled={task.finished ? true : false}
        >
          <Edit></Edit>
        </button>
        <button
          className="text-red-800"
          onClick={() => handleDelete(task?.customId as string)}
        >
          <Delete></Delete>
        </button>
      </div>
    </div>
  );
};

export default Task;
