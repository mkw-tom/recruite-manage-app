export interface FormsOpenState {
  loginFormOpen: boolean;
  addPostFormOpen: boolean;
  editPostFormOpen: boolean;
  addTaskFormOpen: boolean;
  editTaskFormOpen: boolean;
}

// export interface AddPostAction {
//   type: 'OPEN ADDPOSTFORM';
//   // payload: boolean;
// }
// export interface EditPostAction {
//   type: 'OPEN EDITPOSTFORM';
//   // payload: boolean;
// }
// export interface AddTaskAction {
//   type: 'OPEN ADDTASKFORM';
//   payload: boolean;
// }
// export interface EditTaskAction {
//   type: 'OPEN EDITTASKFORM';
//   // payload: boolean;
// }

export type FormOpenAction =
  | { type: 'OPEN LOGINFORM' }
  | { type: 'OPEN ADDPOSTFORM' }
  | { type: 'OPEN EDITPOSTFORM' }
  | { type: 'OPEN ADDTASKFORM' }
  | { type: 'OPEN EDITTASKFORM' }
  | { type: 'CLOSE FORM' };
