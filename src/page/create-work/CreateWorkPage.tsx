import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


export default function CreateWorkPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            description: data.get('description'),
        });
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <LibraryAddIcon sx={{ m: 1, color: 'green', fontSize: "3rem" }}>
                    </LibraryAddIcon>
                    <Typography component="h1" variant="h5">
                        Create Work
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Project's Name"
                            name="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Project's Description"
                            type="text"
                            id="description"
                            multiline
                            maxRows={5}
                        />
                        <FormControl fullWidth required margin='normal'>
                            <InputLabel htmlFor="outlined-adornment-amount">Project's Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                label="Project's Amount"
                                type='number'
                            />
                        </FormControl>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ mt: 2, mb: 1 }} label="Start" />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ mt: 2, mb: 1 }} label="Finish" />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Work
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}