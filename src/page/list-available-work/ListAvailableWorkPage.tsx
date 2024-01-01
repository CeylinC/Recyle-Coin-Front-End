import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Pagination,
  Typography,
} from "@mui/material";
import { IWork } from "../../model";
import { useState } from "react";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import React from "react";
import { CURRENCY } from "../../constants/constants";

export function ListAvailableWorkPage() {
  const listCount = 10;
  const works: IWork[] = [
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
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h4" textAlign={"start"}>
        Available Work
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {works.map((work, index) => {
          return (
            <Link underline="none" href="/work">
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
              <Divider variant="fullWidth" component="li" />
            </Link>
          );
        })}
      </List>
      <Pagination
        count={Math.ceil(works.length / listCount)}
        color="primary"
        sx={{ margin: "2rem 0" }}
        onChange={() => setCurrentPage((prev) => ++prev)}
      />
    </Box>
  );
}

export default ListAvailableWorkPage;
