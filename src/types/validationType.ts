export interface LoginFormType {
  username: string;
  password: string;
}

export interface AddEditPostFormType {
  name: string;
  event: string;
  startDate: string;
  endDate: string;
  region: string;
}

export interface MypageFormType {
  url: string;
  id: string;
  passwrod: string;
}

export interface AddEditTaskType {
  task: string;
  testFormat: string;
  date: string;
  limitDate: string;
}
