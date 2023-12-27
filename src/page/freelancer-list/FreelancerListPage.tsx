import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FreelancerListPage() {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const works = [{
        projectName: "work1",
        freelancerList: [
            "person 1",
            "person 2",
            "person 3",
        ]
    },
    {
        projectName: "work2",
        freelancerList: [
            "person 1",
            "person 2",
            "person 3",
        ]
    },
    {
        projectName: "work3",
        freelancerList: [
            "person 1",
            "person 2",
            "person 3",
        ]
    }];

    return (
        <Container component="main" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: "center",
                    width: "90%"
                }}
            >
                {works.map((work, index) => {
                    return (
                        <Accordion expanded={expanded === work.projectName} onChange={handleChange(work.projectName)} sx={{ width: '100%' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel-${index}-content`}
                                id={`panel-${index}`}
                            >
                                <Typography>{work.projectName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {work.freelancerList.map((freelancer, i) => {
                                        return (
                                            <ListItem
                                                key={i}
                                                secondaryAction={
                                                    <Button variant="outlined">Select</Button>
                                                }
                                                disablePadding
                                            >
                                                <ListItemButton>
                                                    <ListItemAvatar>
                                                        <AccountCircleIcon sx={{ fontSize: "2.75rem" }} />
                                                    </ListItemAvatar>
                                                    <ListItemText id={`${i}`} primary={freelancer} />
                                                </ListItemButton>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </Box>
        </Container>
    );
}