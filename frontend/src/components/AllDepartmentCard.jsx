/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { departmentIdAtom, widthAtom } from "../store";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#282c34",
    },
    secondary: {
      main: "#EEEEEE",
    },
  },
});

export default function HomeCard({ department }) {
  // const width = useRecoilValue(widthAtom);
  const navigate = useNavigate();
  const setDepartmentId = useSetRecoilState(departmentIdAtom);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card
        // sx={{
        //   bgcolor: "primary.main",
        //   width: (window.innerWidth > 870 && "400px") || "100%",
        //   height: "full",
        // }}
        sx={{
          bgcolor: "primary.main",
          width: (window.innerWidth > 870 && "400px") || "100%",
          height: "full",
          transition: "width 0.3s ease-out", // Add transition for smooth effect
          ":hover": {
            width: "420px",
          },
        }}
        onClick={() => {
          setDepartmentId(department.department_id);
          navigate("/home/deptSubjects");
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={department.department_image}
            alt={department.department_name}
            sx={{
              height: 60,
              width: 60,
              margin: "auto",
              marginTop: 4,
            }}
          />
          <CardContent>
            <Box
              color="secondary.main"
              sx={{
                gap: "5px",
                textAlign: "center",
              }}
            >
              {department.department_name}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}
