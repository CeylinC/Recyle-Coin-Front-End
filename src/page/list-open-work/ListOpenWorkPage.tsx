import { Box, Container, Pagination, Typography } from "@mui/material";
import { IWork } from "../../model";
import { useEffect, useState } from "react";
import { WorkCard } from "../../feature";
import { getWorksData } from "../../service/Post";
import { useSearchParams } from "react-router-dom";

export function ListOpenWorkPage() {
  const [workList, setWorkList] = useState<IWork[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getWorkList = async () => {
      setWorkList(await getWorksData(currentPage));
    };
    getWorkList();
  }, [currentPage]);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam !== null) {
      setCurrentPage(parseInt(pageParam));
    }
    else{
      setSearchParams({page: "1"})
    }
  }, [setSearchParams, searchParams]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setSearchParams({page: value.toString()})
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Typography variant="h4" marginBottom={"2rem"}>
        Open Work
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {workList !== undefined
          ? workList.map((work, i) => {
              return <WorkCard key={i} work={work} />;
            })
          : ""}
      </Box>
      <Pagination
        count={Math.ceil(11 / 10)}
        color="primary"
        sx={{ margin: "2rem 0" }}
        onChange={handleChange}
        page={currentPage}
      />
    </Container>
  );
}

export default ListOpenWorkPage;
