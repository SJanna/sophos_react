import React from "react";
import SingleUser from "../SingleUser";
import { CircularProgress, Box, Typography, Button, TextField } from "@mui/material";
import Modal from "../Modal";

const UserList = ({onLoad, onFilter, users, loading, error}) => {
  return (
    <>
    <TextField label="Buscar" onChange={onFilter}/>
      {loading ? (
        <Box align="center" height="100%" sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
      <Box height="100%">
      {users.map((user) => (
        <SingleUser key={user.login.uuid} {...user} />
      ))}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={onLoad}>Cargar más</Button>
        </Box>
      </Box>
  )}
      {error && <Typography>{error}</Typography>}
      {loading && <Modal/>}
    </>
  );
};

export default UserList;
