import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SETTINGS } from "../settings/settings";

export const UserContext = createContext<UserStore | null>(null);

export default function useUsers(): UserStore {
  const initalState = [
    { userId: "1", userName: "Bobby" },
    { userId: "2", userName: "Tom" },
    { userId: "3", userName: "Jordan" },
  ];

  const [users, setUsers] = useState<IUser[]>(initalState);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await axios.get<IUser[]>(`${SETTINGS.HOST}/zaraz/users`);
    setUsers(data);
  }

  return {
    users,
  };
}
