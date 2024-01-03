import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Pagination,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { IWork, IUser } from "../../model";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { WorkDetail } from "../../feature";
import { ProgressiveBar } from "../../component";
import { BUTTON, TAB } from "../../constants/constants";

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

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function DisplayWorkPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const user: IUser = {
    firstName: "Ceylin",
    lastName: "Çaltepe",
    role: "freelancer",
    email: "caltepeceylin@gmail.com",
    location: "Turkey",
    availableWorks: [],
    userId: "asd",
  };
  const [work, setWork] = useState<IWork>({
    name: "asd",
    amount: "10",
    description: "description",
    start: "start",
    finish: "finish",
    freelancer: "dsadsa",
    state: 2,
    isActive: true,
  });
  const freelancerList = ["person 1", "person 2", "person 3"];

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ margin: "1rem 2rem" }}>
        {work.name}
      </Typography>
      {user.role === "client" ? (
        <>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label={TAB[0]} {...allyProps(0)} />
              <Tab
                label={TAB[1]}
                {...allyProps(1)}
                disabled={work.freelancer !== undefined}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box>
              <ProgressiveBar
                activeStep={work.state}
                isActive={work.isActive !== undefined ? work.isActive : false}
              />
              <WorkDetail
                workInfo={work}
                role={user.role}
                setWorkInfo={setWork}
              />
              <Button
                fullWidth
                variant="contained"
                disabled={work.state !== 3}
                onClick={() => setWork({ ...work, state: 4 })}
                sx={{ boxShadow: "none" }}
              >
                {BUTTON.CLIENT.CONFIRM}
              </Button>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {freelancerList.map((freelancer, i) => {
                  return (
                    <ListItem
                      key={i}
                      secondaryAction={
                        <Button
                          variant="outlined"
                          onClick={() => {
                            setWork({ ...work, freelancer: freelancer });
                            setValue(0);
                          }}
                        >
                          {BUTTON.CLIENT.SELECT}
                        </Button>
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
              <Pagination count={10} color="primary" />
            </Box>
          </CustomTabPanel>
        </>
      ) : (
        <Box sx={{ padding: "1rem 2rem" }}>
          <ProgressiveBar
            activeStep={work.state}
            isActive={work.isActive !== undefined ? work.isActive : false}
          />
          <WorkDetail workInfo={work} role={user.role} setWorkInfo={setWork} />
          <Button
            variant="contained"
            fullWidth
            disabled={work.state !== 2}
            onClick={() => setWork({ ...work, state: 3 })}
            sx={{ boxShadow: "none" }}
          >
            {BUTTON.FREELANCER.COMPLETE}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default DisplayWorkPage;
