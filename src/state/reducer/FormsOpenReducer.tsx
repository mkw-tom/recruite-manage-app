// export interface FormsOpenState {
//   addPostFormOpen: boolean;
//   editPostFormOpen: boolean;
//   addTaskFormOpen: boolean;
//   editTaskFormOpen: boolean;
// }

import {
  // AddPostAction,
  // AddTaskAction,
  // EditPostAction,
  // EditTaskAction,
  FormOpenAction,
  FormsOpenState,
} from '../../types/reducerTypes';

// eslint-disable-next-line react-refresh/only-export-components
export const initialFormsOpenState: FormsOpenState = {
  loginFormOpen: false,
  addPostFormOpen: false,
  editPostFormOpen: false,
  addTaskFormOpen: false,
  editTaskFormOpen: false,
};

export const FormsOpenReducer = (
  state: FormsOpenState,
  action: FormOpenAction
): FormsOpenState => {
  switch (action.type) {
    case 'OPEN LOGINFORM':
      return { ...state, loginFormOpen: true };
    case 'OPEN ADDPOSTFORM':
      return { ...state, addPostFormOpen: true };

    case 'OPEN EDITPOSTFORM':
      return { ...state, editPostFormOpen: true };

    case 'OPEN ADDTASKFORM':
      return { ...state, addTaskFormOpen: true };

    case 'OPEN EDITTASKFORM':
      return { ...state, editTaskFormOpen: true };

    case 'CLOSE FORM':
      return {
        ...initialFormsOpenState,
      };
    default:
      return state;
  }
};
