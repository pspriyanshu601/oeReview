/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
// import { useSetRecoilState } from 'recoil';
// import { departmentIdAtom } from '../store';
// import { useNavigate } from 'react-router-dom';

// export const AllDepartmentCard = ({ department }) => {
//     const navigate = useNavigate()
//     const setDepartmentId = useSetRecoilState(departmentIdAtom)

//     return (
//         <div className="w-64 p-4">
//             <div className="bg-gray-900 text-white p-6 flex flex-col justify-between h-full shadow-whiteBottom">
//                 <div>
//                     <img src={department.department_image} className="w-16 h-16 mx-auto mb-8" style={{ fill: 'white' }} />
//                     <p className="text-center font-bold mb-10">{department.department_name}</p>
//                 </div>
//                 <div className="flex justify-center">
//                     <button
//                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                      onClick={() => {
//                         setDepartmentId(department.department_id);
//                         navigate('/home/deptSubjects')
//                     }}
//                      >
//                         Visit
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// AllDepartmentCard.propTypes = {
//     department: PropTypes.shape({
//         department_id: PropTypes.number.isRequired,
//         department_image: PropTypes.string,
//         department_name: PropTypes.string.isRequired
//     }).isRequired
// };

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Rating } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseCodeAtom, departmentIdAtom, sortAtom } from "../store";
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

export default function HomeCard({ department, width }) {
  const navigate = useNavigate();
  const setDepartmentId = useSetRecoilState(departmentIdAtom);
  console.log(department);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card
        sx={{
          bgcolor: "primary.main",
          width: (width > 870 && "400px") || "300px",
          height: "full",
        }}
        onClick={() => {
          //   setCourseCode(review.course_code);
          //   navigate("/home/allReviews");
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
