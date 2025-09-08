import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function DefaultNavbarMobile({ routes, open }) {
  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <Box my={2}>
        {routes.map(({ name, route }) => (
          <Box key={name} px={2} py={1}>
            <Typography
              component={Link}
              to={route}
              sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
            >
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Collapse>
  );
}

DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  open: PropTypes.bool.isRequired,
};

export default DefaultNavbarMobile;