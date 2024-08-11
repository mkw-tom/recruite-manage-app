//add
export interface AddType {
  customId: string | undefined;
  userId: string | undefined;
  name: string | undefined;
  event: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  region: string | undefined;
}

export interface PushTaskType {
  customId: string;
  task: string;
  testFormat: string;
  date: string;
  limitDate: string;
  situation: string;
  current: boolean;
  next: boolean;
  finished: boolean;
  edit: boolean;
}

export interface EditMyPageType {
  url: string | undefined;
  id: string | undefined;
  password: string | undefined;
}

export interface EditCompanyAndEventDataType {
  name: string | undefined;
  event: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  region: string | undefined;
}
