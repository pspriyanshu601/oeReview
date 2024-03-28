/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { courseCodeAtom, sortAtom } from '../store';
// import Rating from '@mui/material/Rating'
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const HomeCard = ({ review }) => {
//     const navigate = useNavigate();
//     const setCourseCode = useSetRecoilState(courseCodeAtom)

//     const [rating, setRating] = useState(0);
//     const sortValue = useRecoilValue(sortAtom);

//     useEffect(() => {
//         if (sortValue === 'overall') {
//             setRating(parseInt(review.average_rating));
//         } else {
//             setRating(parseInt(review["average_" + sortValue + "_rating"]));
//         }
//     }, [sortValue, review]);

//     return (
//         <div className="w-64 p-4">
//             <div
//                 className="bg-gray-900 text-white p-6 flex flex-col justify-between h-64 shadow-whiteBottom rounded-lg transform transition-transform hover:scale-105 cursor-pointer"
//                 onClick={() => {
//                     setCourseCode(review.course_code)
//                     navigate('/home/allReviews')
//                 }}
//             >
//                 <div>
//                     <p className="font-medium mb-1 text-lg">{review.course_code}</p>
//                     <p className="text-xl h-20 mb-3">{review.subject_name}</p>
//                     <p className="text-sm h-10 mb-3"><i>{review.department_name}</i></p>
//                     <Rating name="half-rating" value={rating} precision={0.1} readOnly />
//                 </div>
//             </div>
//         </div>
//     )
// }

// HomeCard.propTypes = {
//     review: PropTypes.shape({
//         course_code: PropTypes.string.isRequired,
//         subject_name: PropTypes.string.isRequired,
//         department_name: PropTypes.string.isRequired,
//         average_rating: PropTypes.string.isRequired
//     })
// }

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Rating } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseCodeAtom, sortAtom } from "../store";
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
          width: (width > 870 && "400px") || "100%",
          height: "full",
          transition: "width 0.3s ease-out", // Add transition for smooth effect
          ":hover": {
            ...(width > 870 && { width: "420px" }), // Apply hover effect only if width > 870
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
