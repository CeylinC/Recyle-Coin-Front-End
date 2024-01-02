import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Freelancer, IFreelancer, IWork, Work } from "../../model";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { WorkDetail } from "../../feature";
import { ProgressiveBar } from "../../component";
import { BUTTON, TAB } from "../../constants/constants";
import { useUser } from "../../layout";
import {
  getFreelancerListData,
  getWorkData,
  updateWorkData,
} from "../../service/Post";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState(0);
  const { user } = useUser();
  const [work, setWork] = useState<IWork>(new Work());
  const [freelancerList, setFreelancerList] = useState<IFreelancer[]>([
    new Freelancer(),
  ]);
  const [firstData, setFirstData] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getWork = async () => {
      const workParam = searchParams.get("id");
      if (workParam !== null) {
        const work = await getWorkData(workParam);
        if (work !== undefined) {
          setWork(work);
        }
      }
    };
    getWork();
  }, [searchParams]);

  useEffect(() => {
    const getFreelancerList = async () => {
      setFreelancerList(await getFreelancerListData(work.workId));
    };
    if (value === 1) {
      getFreelancerList();
    }
  }, [value]);

  useEffect(() => {
    if (!firstData) {
      updateWorkData(work);
      console.log(work)
    } else if (work.workId !== "") {
      setFirstData(!firstData);
    }
  }, [work, setWork]);

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
                disabled={work.freelancer?.id !== ""}
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
                {freelancerList !== undefined
                  ? freelancerList.map((freelancer) => {
                      if (freelancer.id !== undefined) {
                        return (
                          <ListItem
                            key={`${freelancer.id}`}
                            secondaryAction={
                              <Button
                                variant="outlined"
                                onClick={() => {
                                  setWork({ ...work, freelancer: freelancer, state: 2 });
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
                                <AccountCircleIcon
                                  sx={{ fontSize: "2.75rem" }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                id={`${freelancer.id}`}
                                primary={`${freelancer.firstName} ${freelancer.lastName}`}
                                secondary={freelancer.email}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      }
                      return "Sorry, no Freelancers";
                    })
                  : "none"}
              </List>
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
