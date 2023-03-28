import { useState } from "react";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import {
  TextField,
  Button,
  Stack,
  Box,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  Input,
} from "@mui/material";

function AddUser() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    startDate: null,
    endDate: null,
    college: '',
    company: '',
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted value:", formData);
    axios.post("http://localhost:5000/api/users", formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    // Do something with the submitted value, such as send it to an API
  };

  const handleFormInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "75%", lg: "60%", xl: "45%" },
        p: 2,
        borderRadius: "10px",
        boxShadow: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignContent="center">
          <Typography variant="h4">Add User</Typography>
          <TextField
            name="fname"
            label="First Name"
            variant="outlined"
            size="small"
            value={formData.fname}
            onChange={handleFormInput}
            required
          />
          <TextField
            name="lname"
            label="Last Name"
            variant="outlined"
            size="small"
            value={formData.lname}
            onChange={handleFormInput}
            required
          />
          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            size="small"
            value={formData.email}
            onChange={handleFormInput}
            required
          />
          <TextField
            name="phone"
            label="Phone Number"
            variant="outlined"
            size="small"
            value={formData.phone}
            onChange={handleFormInput}
            required
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel size="small">Gender</InputLabel>
            <Select
              size="small"
              name="gender"
              value={formData.gender}
              label="Gender"
              onChange={handleFormInput}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              size="small"
              label="Start Date"
              value={formData.startDate}
              onChange={(e) => setFormData({...formData,startDate: e})}
              name="startDate"
            />
            <DatePicker
              size="small"
              label="End Date"
              value={formData.endDate}
              onChange={(e) => setFormData({...formData,endDate: e})}
              name="endDate"
            />
          </LocalizationProvider>
          <TextField
            name="company"
            label="Company/Organization"
            variant="outlined"
            size="small"
            value={formData.company}
            onChange={handleFormInput}
            required
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel size="small">Graduated from</InputLabel>
            <Select
              size="small"
              name="college"
              value={formData.college}
              label="Graduated From"
              onChange={handleFormInput}
            >
              <MenuItem value="IIT Kharagpur">IIT Kharagpur</MenuItem>
              <MenuItem value="IIT Delhi">IIT Delhi</MenuItem>
              <MenuItem value="IIT Madras">IIT Madras</MenuItem>
              <MenuItem value="IIT Kanpur">IIT Kanpur</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" xs={{
            mx: 4
          }}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default AddUser;
