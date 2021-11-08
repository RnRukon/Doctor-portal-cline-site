import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const url = `https://limitless-shore-42333.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))

    }, [date, user.email, token])


    return (
        <Container>
            <Typography sx={{ textAlign: "center", py: 2 }} variant='h5'>
                Appointments {appointments.length}
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PatientName</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.patientName}
                                </TableCell>
                                <TableCell align="center">{row.time}</TableCell>
                                <TableCell align="center">Action</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Appointments;