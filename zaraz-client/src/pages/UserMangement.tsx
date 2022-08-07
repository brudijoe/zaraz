import useUsers from "../hooks/useUsers";

export function UserManagement() {
  const users = useUsers();

  if (users) {
    console.log(users);
  } else {
    console.log("no users found");
  }
}
