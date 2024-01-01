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
import { useEffect, useState } from "react";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import React from "react";
import { CURRENCY } from "../../constants/constants";
import { useSearchParams } from "react-router-dom";
import { getAvailableWorkDatas } from "../../service/Post";
import { useUser } from "../../layout";

export function ListAvailableWorkPage() {
  const [workList, setWorkList] = useState<IWork[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useUser();

  useEffect(() => {
    const getWorkList = async () => {
      setWorkList(
        await getAvailableWorkDatas(user.availableWorks, currentPage)
      );
    };
    getWorkList();
  }, [currentPage, user.availableWorks]);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam !== null) {
      setCurrentPage(parseInt(pageParam));
    } else {
      setSearchParams({ page: "1" });
    }
  }, [setSearchParams, searchParams]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setSearchParams({ page: value.toString() });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h4" textAlign={"start"}>
        Available Work
      </Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {workList !== undefined
          ? workList.map((work, index) => {
              return (
                <Link underline="none" href="/work" key={index}>
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
            })
          : ""}
      </List>
      <Pagination
        count={Math.ceil(user.availableWorks.length / 10)}
        color="primary"
        sx={{ margin: "2rem 0" }}
        onChange={handleChange}
      />
    </Box>
  );
}

export default ListAvailableWorkPage;
