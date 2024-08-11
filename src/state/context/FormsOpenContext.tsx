import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {
  FormsOpenReducer,
  initialFormsOpenState,
} from '../reducer/FormsOpenReducer';
import {
  // AddPostAction,
  // AddTaskAction,
  // EditPostAction,
  // EditTaskAction,
  FormOpenAction,
  // FormsOpenAction,
  FormsOpenState,
} from '../../types/reducerTypes';

interface FormsOpenContextType {
  // openAddPostForm: () => void;
  // openEditPostForm: () => void;
  // openAddTaskForm: () => void;
  // openEditTaskForm: () => void;
  formsOpenState: FormsOpenState;
  formsOpenDispatch: Dispatch<FormOpenAction>;
}

const FormsOpenContext = createContext<FormsOpenContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useFormsOpen = () => {
  const context = useContext(FormsOpenContext);
  if (context === undefined) {
    throw new Error('useFormsOpen must be used within an FormsOpenContext');
  }
  return context;
};

export const FormsOpenProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formsOpenState, formsOpenDispatch] = useReducer(
    FormsOpenReducer,
    initialFormsOpenState
  );

  // const openAddPostForm = () =>
  //   dispatch({ type: 'OPEN ADDPOSTFORM' } as AddPostAction);

  // const openEditPostForm = () =>
  //   dispatch({ type: 'OPEN EDITPOSTFORM' } as EditPostAction);
  // const openAddTaskForm = () =>
  //   dispatch({ type: 'OPEN ADDTASKFORM' } as AddTaskAction);
  // const openEditTaskForm = () =>
  //   dispatch({ type: 'OPEN EDITTASKFORM' } as EditTaskAction);

  // const contextValue = {
  //   openAddPostForm,
  //   openEditPostForm,
  //   openAddTaskForm,
  //   openEditTaskForm,
  // };
  return (
    <FormsOpenContext.Provider value={{ formsOpenState, formsOpenDispatch }}>
      {children}
    </FormsOpenContext.Provider>
  );
};

export default FormsOpenProvider;
