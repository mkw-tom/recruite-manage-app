import { ArrowRight, ArrowDropDown, AddCircle } from '@mui/icons-material';
import { useState, useCallback } from 'react';
import AddTaskForm from '../addTaskForm/AddTaskForm';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import Task from './Task';
import { useFormsOpen } from '../../../state/context/FormsOpenContext';
// import {
//   AddEditPostReducer,
//   initialState,
// } from '../../../state/reducer/AddEditPostReducer';

const TaskDescription = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { selectPostTasks } = useSelectPost();
  const { formsOpenState, formsOpenDispatch } = useFormsOpen();
  // const [state, dispatch] = useReducer(AddEditPostReducer, initialState);

  const openAddTaskForm = useCallback(
    () => formsOpenDispatch({ type: 'OPEN ADDTASKFORM' }),
    [formsOpenDispatch]
  );
  // useEffect(() => {}, [openAddTaskForm]);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col w-full ">
      {/* タスク追加フォーム */}
      <div
        className={`w-full h-full fixed top-0 left-0 right-0 overflow-y-auto bg-opacity-60 bg-gray-900 z-50`}
        style={{ display: formsOpenState.addTaskFormOpen ? 'block' : 'none' }}
      >
        <AddTaskForm />
      </div>

      <button className="flex py-2 border-y-2 h-auto w-full" onClick={toggle}>
        {open ? <ArrowDropDown></ArrowDropDown> : <ArrowRight></ArrowRight>}
        選考フロー
      </button>

      <ul
        className="h-auto max-h-96 overflow-y-auto"
        style={{ display: open ? 'block' : 'none' }}
      >
        {selectPostTasks?.map((task) => (
          <Task key={task.customId} task={task} />
        ))}
      </ul>

      <div
        className=" flex flex-col h-12 gap-1 md:ml-1 border-b-2 p-1 hover:bg-green-100"
        style={{ display: open ? 'block' : 'none' }}
      >
        <button
          className="flex items-center gap-2 h-full  w-full justify-center font-bold  border-dashed border-2 "
          onClick={openAddTaskForm}
        >
          タスクの追加<AddCircle></AddCircle>
        </button>
      </div>
    </div>
  );
};

export default TaskDescription;
