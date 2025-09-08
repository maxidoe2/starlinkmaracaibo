import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import MKBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function DefaultNavbarDropdown({ name, route }) {
  return (
    <MKBox mx={1} p={1} display="flex" alignItems="baseline">
      <Typography
        variant="button"
        fontWeight="bold"
        component={Link}
        to={route}
        sx={{ textDecoration: "none", color: "white" }}
      >
        {name}
      </Typography>
    </MKBox>
  );
}

DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default DefaultNavbarDropdown;