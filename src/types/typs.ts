export interface OpenProps {
  addFormOpen: boolean;
  setAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  isAdmin: boolean;
  allCompanies: [];
  passCompanies: [];
  createdAt: Date;
  updatedAt: Date;
}

export interface PostType {
  customId?: string | undefined;
  userId?: string | undefined;
  name?: string | undefined;
  event?: string | undefined;
  region?: string | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
  completed?: boolean | undefined;
  mypage?: {
    url: string | undefined;
    id: string | undefined;
    password: string | undefined;
  };
  taskFlow?: [
    {
      customId: string | undefined;
      task: string | undefined;
      situation: string | undefined;
      testFormat: string | undefined;
      date: string | undefined;
      limitDate: string | undefined;
      current: boolean | undefined;
      next: boolean | undefined;
      finished: boolean | undefined;
      edit: boolean | undefined;
    },
  ];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TaskType {
  customId?: string | undefined;
  task?: string | undefined;
  situation?: string | undefined;
  testFormat?: string | undefined;
  date?: string | undefined;
  limitDate?: string | undefined;
  current?: boolean | undefined;
  next?: boolean | undefined;
  finished?: boolean | undefined;
  edit?: boolean | undefined;
}
