export interface AddEditTaskState {
  task: string;
  testFormat: string;
  date: string;
  limitDate: string;
}

interface Action {
  type: 'SET INPUT';
  payload: { name: string; value: string };
}

// eslint-disable-next-line react-refresh/only-export-components
export const initialState = {
  task: '',
  testFormat: '',
  date: '',
  limitDate: '',
};

export const AddEditTaskReducer = (
  state: AddEditTaskState,
  action: Action
): AddEditTaskState => {
  switch (action.type) {
    case 'SET INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
