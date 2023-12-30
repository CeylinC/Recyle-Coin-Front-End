import {
  Box,
  Button,
  ButtonGroup,
  TextField,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";
import useScreenSize from "../../hook/useScreenSize";
import { useState } from "react";
import { Role, Work } from "../../model";
import { BUTTON, PROJECT } from "../../constants/constants";

interface IProp {
  workInfo: Work;
  role: Role;
  setWorkInfo: (value: Work) => void;
}

export function WorkDetail({ workInfo, role, setWorkInfo }: IProp) {
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
        <Typography variant="h5">{PROJECT.DETAILS}</Typography>
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
              {isChangeDetails ? BUTTON.CLIENT.SAVE : BUTTON.CLIENT.CHANGE}
            </Button>
            <Button
              onClick={() =>
                setWorkInfo({ ...workInfo, state: 1, freelancer: undefined })
              }
              disabled={workInfo.freelancer === undefined}
            >
              {BUTTON.CLIENT.DELETE}
            </Button>
            <Button
              onClick={() =>
                setWorkInfo({ ...workInfo, isActive: !workInfo.isActive })
              }
            >
              {workInfo.isActive ? BUTTON.CLIENT.CLOSE : BUTTON.CLIENT.OPEN}
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
            {BUTTON.FREELANCER.LEAVE}
          </Button>
        )}
      </Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText
            secondary={isChangeDetails ? "" : PROJECT.NAME}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-name"
                  label={PROJECT.NAME}
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
            secondary={isChangeDetails ? "" : PROJECT.DESC}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-description"
                  label={PROJECT.DESC}
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
            secondary={isChangeDetails ? "" : PROJECT.AMOUNT}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-amount"
                  label={PROJECT.AMOUNT}
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
            secondary={isChangeDetails ? "" : PROJECT.START}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-start"
                  label={PROJECT.START}
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
            secondary={isChangeDetails ? "" : PROJECT.FINISH}
            primary={
              isChangeDetails ? (
                <TextField
                  id="project-finish"
                  label={PROJECT.FINISH}
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
            secondary={PROJECT.FREELANCER}
            primary={workInfo.freelancer}
            sx={{ display: "flex", flexDirection: "column-reverse" }}
          />
        </ListItem>
      </List>
    </>
  );
}
