export interface INotification {
  id: number;
  title: string;
  content: string;
  part: string;
  createdAt: string;
}

export interface INotificationResult extends Array<INotification> {
  assignments: INotification[];
}
