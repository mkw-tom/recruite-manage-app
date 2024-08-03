//add
export interface AddType {
  userId: string | undefined;
  name: string | undefined;
  event: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  region: string | undefined;
}

export interface PushTaskType {
  task: string | undefined;
  testFormat: string | undefined;
  date: string | undefined;
  limitDate: string | undefined;
  current: boolean | undefined;
  next: boolean | undefined;
  finished: boolean | undefined;
}
