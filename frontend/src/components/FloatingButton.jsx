import { Fab,Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FloatingButton = ({ onClick }) => {
    return (
      <Tooltip title="Add a Review" arrow placement="top">
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            zIndex: 1000, // Adjust the zIndex as needed
            backgroundColor: "#797474",
            "&:hover": {
              backgroundColor: "#7c7979", // Darken the background color on hover
            },
          }}
          onClick={onClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    );
};

export default FloatingButton;
