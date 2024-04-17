/* eslint-disable react/prop-types */
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Rating } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { toast } from "react-hot-toast";

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



const width = window.innerWidth;

export default function ProfileCard({ review }) {
  const cardStyle = {
    bgcolor: "primary.main",
    width: (width > 870 && "400px") || "100%",
    height: "full",
    transition: "width 0.3s ease-out", // Add transition for smooth effect
    ":hover": {
      ...(width > 870 && { width: "410px" }), // Apply hover effect only if width > 870
    },
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Card
        sx={cardStyle}
        onClick={() => {
          toast.error("You can't edit your reviews yet");
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="secondary.main"
              sx={{ textAlign: "center" }}
            >
              {review.subject_name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="secondary.main"
              sx={{ paddingLeft: 2 }}
            >
              {review.department_name}
            </Typography>
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{ paddingLeft: 2 }}
            >
              {review.details}
            </Typography>
            <Box
              color="secondary.main"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "5px",
                paddingLeft: 2,
              }}
            >
              <Typography variant="body2" color="secondary.main">
                Overall
              </Typography>
              <Rating
                name={review.course_code}
                value={parseFloat(review.stars)}
                precision={0.1}
                sx={{ color: "#FDE047" }}
                readOnly
              />
            </Box>
            <Box
              color="secondary.main"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "5px",
                paddingLeft: 2,
              }}
            >
              <Typography variant="body2" color="secondary.main">
                Grades
              </Typography>
              <Rating
                name={review.course_code}
                value={parseFloat(review.grades_stars)}
                precision={0.1}
                sx={{ color: "#FDE047" }}
                readOnly
              />
            </Box>
            <Box
              color="secondary.main"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "5px",
                paddingLeft: 2,
              }}
            >
              <Typography variant="body2" color="secondary.main">
                Quality
              </Typography>
              <Rating
                name={review.course_code}
                value={parseFloat(review.quality_stars)}
                precision={0.1}
                sx={{ color: "#FDE047" }}
                readOnly
              />
            </Box>
            <Box
              color="secondary.main"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "5px",
                paddingLeft: 2,
              }}
            >
              <Typography variant="body2" color="secondary.main">
                Attendance
              </Typography>
              <Rating
                name={review.course_code}
                value={parseFloat(review.attendance_stars)}
                precision={0.1}
                sx={{ color: "#FDE047" }}
                readOnly
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* <Card
        sx={{
          width: (width > 870 && "400px") || "100%",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography variant="h5">{review.subject_name}</Typography>
            <Typography variant="body1">{review.details}</Typography>
            <Typography variant="body2">
              Grades: {review.grades_stars}
            </Typography>
            <Typography variant="body2">
              Quality: {review.quality_stars}
            </Typography>
            <Typography variant="body2">
              Attendance: {review.attendance_stars}
            </Typography>
            <Typography variant="body2">Overall: {review.stars}</Typography>
            <Typography variant="body2">Date: {review.review_date}</Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </ThemeProvider>
  );
}

// Path: frontend/src/components/ProfileCard.jsx
