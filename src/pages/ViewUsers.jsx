import { Container, Typography, Box, FormControl,Select,InputLabel,MenuItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { Stack, Grid } from "@mui/material";

export default function ViewUsers() {

  const [users, setUsers] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFilter = (e) => {
    setUsers(users.filter(u => u.gender === e.target.value))
  }

  const handleDelete = (u) => {
    axios
      .delete(`/:${u.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    
      <Stack spacing={2}>
        
        
        <FormControl sx={{ minWidth: 120 }}>
            <InputLabel size="small">Gender</InputLabel>
            <Select
              size="small"
              
              
              label="Filter by Gender"
              onChange={handleFilter}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <Stack spacing={2} orientation="column">
            {users.map((u, i) => (
              <UserCard key={i} user={u} handleDelete={handleDelete} />
            ))}
          </Stack>
        
      </Stack>

  );
}
