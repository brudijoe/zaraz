import React from "react";
import "./App.css";
import useUsers, { UserContext } from "./hooks/useUsers";
import { UserManagement } from "./pages/UserMangement";

function App() {
  const { users } = useUsers();

  const UserContextProvider = UserContext.Provider;

  return (
    <div className="App">
      <UserContextProvider value={{ users }}>
        <UserManagement />
      </UserContextProvider>
    </div>
  );
}

export default App;
