import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setDate, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpenModal = () => setBookingOpen(true);
    const handleBookingCloseModal = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 5 }} elevation={3}>
                    <Typography sx={{ color: 'secondary.main', fontWeight: '600' }} variant='h5' gutterBottom component='div'>
                        {name}
                    </Typography>
                    <Typography sx={{ color: 'warning.main' }} variant='h6' gutterBottom component='div'>
                        {time}
                    </Typography>
                    <Typography sx={{ color: 'info.main' }} variant='caption' display="block" gutterBottom component='div'>
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpenModal} variant="contained">Booking Appointment</Button>
                </Paper>
            </Grid>

            <BookingModal
                date={date}
                setDate={setDate}
                bookingOpen={bookingOpen}
                handleBookingCloseModal={handleBookingCloseModal}
                booking={booking}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModal>
        </>
    )

}

export default Booking;