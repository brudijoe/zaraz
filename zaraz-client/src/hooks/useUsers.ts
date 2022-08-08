import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SETTINGS } from "../settings/settings";

export const UserContext = createContext<UserStore | null>(null);

export default function useUsers() {
  const [users, setUsers] = useState<IUser[]>([]);

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
