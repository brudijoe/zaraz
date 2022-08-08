import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import useUsers from "../hooks/useUsers";
import type {} from "@mui/x-data-grid/themeAugmentation";

export function UserManagement() {
  const { users } = useUsers();

  const columns: GridColDef[] = [
    { field: "userId", headerName: "User ID", width: 150 },
    { field: "userName", headerName: "User Name", width: 150 },
  ];

  const rows: GridRowsProp = users;

  return (
    <div>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.userId}
        />
      </div>
    </div>
  );
}
