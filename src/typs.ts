export type OpenProps = {
  addFormOpen: boolean;
  setAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TasksDataProps = {
  taskName: string;
  situation: string;
  testFormat: string;
  date: string;
  limit: string;
};

export type editTaskProps = {
  editData: TasksDataProps | undefined,
  setEditData: React.Dispatch<React.SetStateAction<TasksDataProps | undefined>>,
  dummyTasksData: TasksDataProps[],
  setDummyTasksData: React.Dispatch<React.SetStateAction<TasksDataProps[]>>, 
}



export type User  = {
  _id: string | undefined,
  username: string,
  email: string,
  password: string,
  profilePicture: string,
  isAdmin: boolean,
  allCompanies: [],
  passCompanies: [],
  createdAt: Date,
  updatedAt: Date,
}

export type PostType = {
  _id: string;
  userId: string;
  name: string;
  event: string;
  region: string;
  startDate: string,
  endDate: string,
  completed: boolean;
  mypage: {
    url: string;
    id: string;
    password: string;
  };
  taskFlow: [
    {
      task: string;
      situation: string;
      testFormat: string;
      date: string;
      limitDate: string;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
};
