import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Work } from '../../model/Work';
import { Typography } from '@mui/material';

interface IProp {
    work: Work
}

export default function WorkDetail({ work }: IProp) {
    return (
        <>
        <Typography variant='h5' sx={{marginTop: "2rem"}}>
            Project's Details
        </Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start"
            >
                <ListItemText
                    secondary="Project's Name"
                    primary={work.name}
                    sx={{ display: "flex", flexDirection: "column-reverse" }}
                />
                <ListItemText
                    secondary="Project's Description"
                    primary={work.description}
                    sx={{ display: "flex", flexDirection: "column-reverse" }}
                />
                <ListItemText
                    secondary="Project's Name"
                    primary={work.name}
                    sx={{ display: "flex", flexDirection: "column-reverse" }}
                />
                <ListItemText
                    secondary="Project's Name"
                    primary={work.name}
                    sx={{ display: "flex", flexDirection: "column-reverse" }}
                />
                <ListItemText
                    secondary="Project's Name"
                    primary={work.name}
                    sx={{ display: "flex", flexDirection: "column-reverse" }}
                />
            </ListItem>
            <Divider component="li" />
        </List>
        </>
    );
}