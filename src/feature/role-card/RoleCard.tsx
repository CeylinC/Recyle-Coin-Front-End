import { Radio, Typography, CardContent, Card, Box } from "@mui/material";
import { Role } from "../../model";
import { CLIENT, FREELANCER } from "../../constants/constants";

interface IProp {
  role: Role;
}

export function RoleCard({ role }: IProp) {
  const texts = role === "freelancer" ? FREELANCER : CLIENT;
  return (
    <Card sx={{ width: 275 }} className="m-4">
      <CardContent>
        <Box className="flex justify-between items-center">
          {texts.icon}
          <Radio value={texts.value} />
        </Box>
        <Typography variant="h5" component="div">
          {texts.header}
        </Typography>
        <Typography variant="h6" component="div">
          {texts.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
