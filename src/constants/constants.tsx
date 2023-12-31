import LogoutIcon from "@mui/icons-material/Logout";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BusinessIcon from "@mui/icons-material/Business";
import { BusinessCenterTwoTone, BusinessTwoTone } from "@mui/icons-material";

export const CURRENCY = "$";
export const LOGO = "SesQFreelancer";

export const STEPS = ["Defined", "Being Processed", "Processed", "Approved"];
export const TAB = ["Work Detail", "Freelancer List"];

export const LINK = {
  FORGOT: "Forgot password?",
  SIGNUP: "Don't have an account? Sign Up",
  LOGIN: "Already have an account? Log in",
  WANT_UPDATE:
    "I want to receive inspiration, marketing promotions and updates via email.",
};

export const TITLE = {
  WORK: "Create Work",
  LOGIN: "Log In",
  SIGNUP: "Sign Up",
};

export const PROJECT = {
  DETAILS: "Project's Details",
  NAME: "Project's Name",
  DESC: "Project's Description",
  START: "Project's Start",
  FINISH: "Project's Finish",
  AMOUNT: "Project's Amount",
  FREELANCER: "Project's Freelancer",
};

export const BUTTON = {
  WORK_CARD: "Give Offer",
  LOGIN: "Log In",
  SIGNUP: "Sign Up",
  REMEMBER: "Remember me",
  CREATE: "Create Work",
  CLIENT: {
    SAVE: "Save Project's Details",
    CHANGE: "Change Project's Details",
    CLOSE: "Close Work",
    OPEN: "Open Work",
    DELETE: "Delete Freelancer",
    CONFIRM: "Confirm Work",
    SELECT: "Select",
  },
  FREELANCER: {
    LEAVE: "Leave Work",
    COMPLETE: "Processing Completed",
  },
};

export const FREELANCER = {
  value: "freelancer",
  header: "I am a Freelancer,",
  description: "looking for work",
  icon: <BusinessCenterIcon color="success" fontSize="large" />,
};

export const CLIENT = {
  value: "client",
  header: "I am a Client,",
  description: "hiring for a project.",
  icon: <BusinessIcon color="success" fontSize="large" />,
};

export const USER = {
  EMAIL: "Email Address",
  PASSWORD: "Password",
  NAME: "First Name",
  SURNAME: "Last Name",
  LOCATION: "Location",
};

export const DRAWER_MENUS = {
  freelancer: [
    {
      name: "Open Works",
      icon: <BusinessCenterTwoTone />,
      href: "/open-works",
    },
    {
      name: "Available Works",
      icon: <BusinessTwoTone />,
      href: "/available-works",
    },
    { name: "Logout", icon: <LogoutIcon />, href: "/sign-up" },
  ],
  client: [
    {
      name: "Create Works",
      icon: <BusinessCenterTwoTone />,
      href: "/create-work",
    },
    {
      name: "Available Works",
      icon: <BusinessTwoTone />,
      href: "/available-works",
    },
    { name: "Logout", icon: <LogoutIcon />, href: "/sign-up" },
  ],
};
