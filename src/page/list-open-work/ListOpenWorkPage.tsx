import { Box, Container, Pagination } from "@mui/material";
import { Work } from "../../model";
import { useState } from "react";
import {WorkCard} from "../../feature";

function ListOpenWorkPage() {
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
    <Container
      component="main"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {works.map((work, i) => {
          return <WorkCard key={i} work={work} />;
        })}
      </Box>
      <Pagination
        count={Math.ceil(works.length / listCount)}
        color="primary"
        sx={{ margin: "2rem 0" }}
        onChange={() => setCurrentPage((prev) => ++prev)}
      />
    </Container>
  );
}

export default ListOpenWorkPage;
