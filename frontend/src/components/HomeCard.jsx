import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Rating } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseCodeAtom, sortAtom } from "../store";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

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

export default function HomeCard({ review, rank, width }) {
  const navigate = useNavigate();
  const setCourseCode = useSetRecoilState(courseCodeAtom);
  const sortval = useRecoilValue(sortAtom);
  const rating =
    sortval === 0
      ? review.average_rating
      : sortval === 1
      ? review.average_quality_rating
      : sortval === 2
      ? review.average_grades_rating
      : review.average_attendance_rating;
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card
        sx={{
          bgcolor: "primary.main",
          width: (width > 870 && "360px") || "100%",
          height: "full",
          transition: "width 0.3s ease-out", // Add transition for smooth effect
          ":hover": {
            ...(width > 870 && { width: "370px" }), // Apply hover effect only if width > 870
          },
        }}
        onClick={() => {
          setCourseCode(review.course_code);
          navigate("/home/allReviews");
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={review.department_image}
            alt={review.subject_name}
            sx={{ height: 60, width: 60, margin: "auto", marginTop: 4 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="secondary.main"
              sx={{ textAlign: "center" }}
            >
              Rank {rank}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="secondary.main"
              sx={{ paddingLeft: 2 }}
            >
              {review.subject_name}
            </Typography>
            <Typography
              variant="body1"
              color="secondary.main"
              sx={{ paddingLeft: 2 }}
            >
              Department of {review.department_name}
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
              <Rating
                name={review.course_code}
                value={parseFloat(rating)}
                precision={0.1}
                sx={{ color: "#FDE047" }}
                readOnly
              />
              <Typography variant="body2" color="secondary.main">
                {review.average_rating}
                &nbsp;&nbsp;&nbsp;
                {review.comments} {review.comments > 1 ? "Reviews" : "Review"}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}

HomeCard.propTypes = {
  review: PropTypes.shape({
    department_image: PropTypes.string.isRequired,
    subject_name: PropTypes.string.isRequired,
    department_name: PropTypes.string.isRequired,
    course_code: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    average_quality_rating: PropTypes.number.isRequired,
    average_grades_rating: PropTypes.number.isRequired,
    average_attendance_rating: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
  rank: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};