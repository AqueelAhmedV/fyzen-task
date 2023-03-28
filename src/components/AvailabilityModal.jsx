import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function AvailabilityModal(props) {
  const { isOpen, handleClose, availabilityDates } = props;
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleOpen = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onClose={handleCloseModal}>
      <DialogTitle>Availability Dates</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Dates of availability:
          <br />
          {availabilityDates.map((date, index) => (
            <span key={index}>
              {date.toLocaleDateString()}
              <br />
            </span>
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
