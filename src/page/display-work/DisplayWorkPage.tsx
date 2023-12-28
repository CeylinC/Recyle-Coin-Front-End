import { Box, Button, Container, Divider, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Pagination, Tab, Tabs, Typography } from '@mui/material';
import { Work } from '../../model/Work';
import { useState } from 'react';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import React from 'react';
import { User } from '../../model/User';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProgressiveBar from '../../component/prograssive-bar/PrograssiveBar';
import WorkDetail from '../../component/work-detail/WorkDetail';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DisplayWorkPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const user: User = { firstName: "Ceylin", lastName: "Çaltepe", role: "client", email: "caltepeceylin@gmail.com", location: "Turkey" };
    const work: Work = { name: "asd", amount: "10", description: "description", start: "start", finish: "finish" };
    const freelancerList = ["person 1", "person 2", "person 3"];

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant='h4' sx={{ margin: "1rem 2rem" }}>
                {work.name}
            </Typography>
            {user.role === "client" ?
                <>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Work Detail" {...a11yProps(0)} />
                            <Tab label="Freelancer List" {...a11yProps(1)} disabled={work.freelancer !== undefined} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Box>
                            <ProgressiveBar activeStep={1} />
                            <WorkDetail work={work}/>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {freelancerList.map((freelancer, i) => {
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
                    </CustomTabPanel>
                </> :
                <Box>
                    asd
                </Box>}
        </Box>
    );
}

export default DisplayWorkPage;
