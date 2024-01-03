import {
  FormControl,
  RadioGroup,
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
} from "@mui/material";
import { RoleCard } from "../../feature";
import { IUser, User } from "../../model";
import { BUTTON, LINK, TITLE, USER } from "../../constants/constants";
import { Copyright } from "../../component";
import { createUser } from "../../service";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password")?.toString();
    const user: IUser = new User({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      role: data.get("role"),
      email: data.get("email"),
      location: data.get("location"),
    });
    if (password !== undefined) {
      createUser(user, password, navigate);
      console.log("ad");
    }
  };

  return (
    <div className="signup">
      <FormControl className="w-full">
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h3">
              {TITLE.SIGNUP}
            </Typography>

            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
              onSubmit={handleSubmit}
            >
              <RadioGroup
                defaultValue="client"
                name="role"
                className="flex justify-center w-11/12 items-center mb-5"
                style={{ flexDirection: "row" }}
              >
                <RoleCard role="freelancer" />
                <RoleCard role="client" />
              </RadioGroup>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label={USER.NAME}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label={USER.SURNAME}
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={USER.EMAIL}
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label={USER.PASSWORD}
                    type="password"
                    id="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="location"
                    label={USER.LOCATION}
                    type="text"
                    id="location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label={LINK.WANT_UPDATE}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {BUTTON.SIGNUP}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/log-in" variant="body2">
                    {LINK.LOGIN}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </FormControl>
    </div>
  );
}
