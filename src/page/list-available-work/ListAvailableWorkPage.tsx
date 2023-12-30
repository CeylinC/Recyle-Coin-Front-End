import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Work } from "../../model";
import { useState } from "react";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import React from "react";
import { CURRENCY } from "../../constants/constants";

function ListAvailableWorkPage() {
  const listCount = 10;
  const works: Work[] = [
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
    {
      name: "asd",
      amount: "10",
      description: "description",
      start: "start",
      finish: "finish",
      state: 1,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {works.map((work, index) => {
        return (
          <Link underline="none">
            <ListItem>
              <ListItemAvatar>
                <WorkHistoryTwoToneIcon
                  sx={{ color: "primary.dark", fontSize: "3rem" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={work.name}
                secondary={
                  <React.Fragment>
                    <Typography variant="body2" color="text.secondary">
                      {work.description}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {work.start} - {work.finish}
                    </Typography>
                    <Typography variant="body2" color="primary.light">
                      {CURRENCY} {work.amount}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Link>
        );
      })}
    </List>
  );
}

export default ListAvailableWorkPage;
