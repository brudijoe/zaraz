interface UserStore {
  users: IUser[] | any[];
}

interface IUser {
  userId: string;
  userName: string;
}
