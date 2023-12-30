import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Work } from "../../model/Work";
import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import useScreenSize from "../../hook/useScreenSize";
import { useState } from "react";
import { Role } from "../../model/Role";

interface IProp {
  workInfo: Work;
  role: Role;
  setWorkInfo: (value: Work) => void;
}

export default function WorkDetail({ workInfo, role, setWorkInfo }: IProp) {
  const screenSize = useScreenSize();
  const [isChangeDetails, setChangeDetails] = useState(false);
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Project's Details</Typography>
        {role === "client" ? (
          <ButtonGroup
            disabled={workInfo.state === 3}
            variant="outlined"
            aria-label="outlined button group"
            orientation={screenSize.width < 600 ? "vertical" : "horizontal"}
            sx={{
              marginTop: {
                xs: "1rem",
                sm: "0",
                md: "0",
              },
            }}
          >
            <Button onClick={() => setChangeDetails((prev) => !prev)}>
              {isChangeDetails
                ? "Save Project's Details"
                : "Change Project's Details"}
            </Button>
            <Button
              onClick={() =>
                setWorkInfo({ ...workInfo, state: 1, freelancer: undefined })
              }
              disabled={workInfo.freelancer === undefined}
            >
              Delete Freelancer
            </Button>
            <Button
              onClick={() =>
                setWorkInfo({ ...workInfo, isActive: !workInfo.isActive })
              }
            >
              {workInfo.isActive ? "Close Work" : "Open Work"}
            </Button>
          </ButtonGroup>
        ) : (
          <Button
            onClick={() =>
              setWorkInfo({ ...workInfo, state: 1, freelancer: undefined })
            }
            disabled={workInfo.freelancer === undefined || workInfo.state === 3}
            variant="outlined"
          >
            Remove Work
          </Button>
        )}
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText
            secondary={isChangeDetails ? "" : "Project's Name"}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-name"
                  label="Project's Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={workInfo.name}
                  onChange={(event) =>
                    setWorkInfo({ ...workInfo, name: event.target.value })
                  }
                />
              ) : (
                workInfo.name
              )
            }
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            secondary={isChangeDetails ? "" : "Project's Description"}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-description"
                  label="Project's Description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={workInfo.description}
                  onChange={(event) =>
                    setWorkInfo({
                      ...workInfo,
                      description: event.target.value,
                    })
                  }
                />
              ) : (
                workInfo.description
              )
            }
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            secondary={isChangeDetails ? "" : "Project's Amount"}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-amount"
                  label="Project's Amount"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={workInfo.amount}
                  onChange={(event) =>
                    setWorkInfo({
                      ...workInfo,
                      amount: event.target.value,
                    })
                  }
                />
              ) : (
                workInfo.amount
              )
            }
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            secondary={isChangeDetails ? "" : "Project's Start"}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-start"
                  label="Project's Start"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={workInfo.start}
                  onChange={(event) =>
                    setWorkInfo({
                      ...workInfo,
                      start: event.target.value,
                    })
                  }
                />
              ) : (
                workInfo.start
              )
            }
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            secondary={isChangeDetails ? "" : "Project's Finish"}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-finish"
                  label="Project's Finish"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={workInfo.finish}
                  onChange={(event) =>
                    setWorkInfo({
                      ...workInfo,
                      finish: event.target.value,
                    })
                  }
                />
              ) : (
                workInfo.finish
              )
            }
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            secondary="Project's Freelancer"
            primary={workInfo.freelancer}
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          />
        </ListItem>
      </List>
    </>
  );
}
