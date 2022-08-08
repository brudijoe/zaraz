interface UserStore {
  users: IUser[] | undefined;
}

interface IUser {
  userId: string;
  userName: string;
}
