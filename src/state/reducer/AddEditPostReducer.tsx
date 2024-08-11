export interface State {
  name: string;
  event: string;
  startDate: string;
  endDate: string;
  region: string;
}

interface Action {
  type: 'SET INPUT';
  payload: {
    name: string;
    value: string;
  };
}

interface EditPostAction {
  type: 'START EDIT';
  payload: {
    name: string;
    event: string;
    startDate: string;
    endDate: string;
    region: string;
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export const initialState: State = {
  name: '',
  event: '',
  startDate: '',
  endDate: '',
  region: '',
};

export const AddEditPostReducer = (
  state: State,
  action: Action | EditPostAction
) => {
  switch (action.type) {
    case 'SET INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'START EDIT':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
