import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import { courseCodeAtom } from "../store";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  createTheme,
} from "@mui/material";

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

export const DeptSubjectsCard = ({ subject }) => {
  const navigate = useNavigate();
  const setCourseCode = useSetRecoilState(courseCodeAtom);

  const width = window.innerWidth;

  const cardStyles = {
    bgcolor: "primary.main",
    width: (width > 870 && "400px") || "100%",
    height: "full",
    transition: "width 0.3s ease-out", // Add transition for smooth effect
    ":hover": {
      ...(width > 870 && { width: "405px" }), // Apply hover effect only if width > 870
    },
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Card
        // sx={{
        //   bgcolor: "primary.main",
        //   width: (window.innerWidth > 870 && "400px") || "100%",
        //   height: "full",
        // }}
        sx={cardStyles}
        onClick={() => {
          setCourseCode(subject.course_code);
          navigate("/home/allReviews");
        }}
      >
        <CardActionArea>
          <CardContent>
            <Box
              color="secondary.main"
              sx={{
                gap: "5px",
                textAlign: "left",
                paddingTop: "20px",
              }}
            >
              <h5 style={{ fontSize: "30px" }}>{subject.course_code}</h5>
            </Box>
            <Box
              color="secondary.main"
              sx={{
                gap: "5px",
                textAlign: "left",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              <h5 style={{ fontSize: "18px" }}>{subject.subject_name}</h5>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

DeptSubjectsCard.propTypes = {
  subject: PropTypes.shape({
    course_code: PropTypes.string.isRequired,
    subject_name: PropTypes.string.isRequired,
  }),
};
