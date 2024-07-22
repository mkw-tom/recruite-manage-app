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

export type PostType = {
  userId: string;
  name: string;
  event: string;
  region: string;
  date: string;
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
      limitData: string;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
};
