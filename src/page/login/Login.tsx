import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Copyright } from "../../component";
import { BUTTON, LINK, TITLE, USER } from "../../constants/constants";
import { loginUser } from "../../service";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();
    if (email !== undefined && password !== undefined) {
      loginUser(email, password, navigate);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}></Avatar>
          <Typography component="h1" variant="h5">
            {TITLE.LOGIN}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={USER.EMAIL}
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={USER.PASSWORD}
              type="password"
              id="password"
              autoComplete="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={BUTTON.REMEMBER}
              sx={{ width: "100%" }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {BUTTON.LOGIN}
            </Button>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Link href="#" variant="body2">
                {LINK.FORGOT}
              </Link>
              <Link href="/sign-up" variant="body2">
                {LINK.SIGNUP}
              </Link>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}
