import { Card, CardContent, CardHeader, Button, Avatar, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Delete, Edit, Schedule } from '@mui/icons-material';

const UserCard = ({ user, handleDelete }) => {
  const [showAvailability, setShowAvailability] = useState(false);

  const handleAvailabilityClick = () => {
    setShowAvailability(true);
  };

  const handleModalClose = () => {
    setShowAvailability(false);
  };

  const handleEditClick = () => {
    // handle edit logic
  };

  const handleDeleteClick = () => {
    handleDelete()
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {user.fname.charAt(0)}
          </Avatar>
        }
        title={`${user.fname} ${user.lname}`}
        subheader={user.email}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Mobile number: {user.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Company: {user.company}
        </Typography>
        <Button variant="outlined" onClick={handleAvailabilityClick} sx={{ mt: 1 }}>
          <Schedule sx={{ mr: 1 }} />
          Availability
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Resume: {user.resume?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Start date: {user.startDate}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          End date: {user.endDate}
        </Typography>
      </CardContent>
      <CardHeader
        action={
          <Avatar sx={{ bgcolor: 'error.main' }}>
            <IconButton onClick={handleDeleteClick}>
              <Delete />
            </IconButton>
          </Avatar>
        }
      />
    </Card>
  );
};

export default UserCard;
