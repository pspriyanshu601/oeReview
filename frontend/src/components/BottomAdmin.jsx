import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { adminWorkAtom } from "../store";
import VerifiedIcon from "@mui/icons-material/Verified";
import LockResetIcon from "@mui/icons-material/LockReset";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#282c34", // Background color
    },
    secondary: {
      main: "#EEEEEE", // Secondary background color
    },
  },
});

export default function Bottom() {
  const [value, setValue] = useRecoilState(adminWorkAtom);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box position="fixed" bottom="0px" width="100%">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            "& .Mui-selected": {
              color: "#FF5733", // Selected color
              backgroundColor: "#FFFFFF", // Background color when selected
            },
            "& .MuiBottomNavigationAction-root": {
              "&:hover": {
                backgroundColor: "#EEEEEE", // Background color on hover
              },
            },
          }}
        >
          <BottomNavigationAction label="Verify" icon={<VerifiedIcon />} />
          <BottomNavigationAction label="Delete" icon={<RemoveCircleIcon />} />
          <BottomNavigationAction label="Reset" icon={<LockResetIcon />} />
          <BottomNavigationAction label="Clear" icon={<DeleteIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
