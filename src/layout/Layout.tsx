import {
  styled,
  useTheme,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useEffect, useState } from "react";
import { DRAWER_MENUS, LOGO } from "../constants/constants";
import { User } from "../model";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { getUserData } from "../service";

const drawerWidth = 240;
type ContextType = { user: User; setUser: (value: User) => void };

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function Layout() {
  const navigator = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(new User());

  useEffect(() => {
    const getData = async () => {
      const data = await getUserData();
      if (data !== undefined) {
        setUser(data);
      } else {
        navigator("/log-in");
      }
    };
    getData();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, textAlign: "start" }}
          >
            {LOGO}
          </Typography>
          {user.role === "freelancer" ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AttachMoneyIcon />
              {user.balance}
            </Box>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginTop: "2rem" }}
          color={"primary"}
        >
          {`${user.firstName} ${user.lastName}`}
        </Typography>
        <Typography
          sx={{ textAlign: "center", marginBottom: "2rem", fontSize: "0.8rem" }}
          color={"primary"}
        >
          {`${user.role.slice(0, 1).toUpperCase()}${user.role.slice(1)}`}
        </Typography>
        <Divider />
        <List>
          {user.role === "freelancer"
            ? DRAWER_MENUS.freelancer.map((menuItem, index) => {
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton href={menuItem.href}>
                      <ListItemIcon>{menuItem.icon}</ListItemIcon>
                      <ListItemText primary={menuItem.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })
            : DRAWER_MENUS.client.map((menuItem, index) => {
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton href={menuItem.href}>
                      <ListItemIcon>{menuItem.icon}</ListItemIcon>
                      <ListItemText primary={menuItem.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet context={{ user, setUser }} />
        </Container>
      </Main>
    </Box>
  );
}

export function useUser() {
  return useOutletContext<ContextType>();
}
