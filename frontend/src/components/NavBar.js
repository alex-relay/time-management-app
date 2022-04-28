import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ciao Papa
          </Typography>
          <Typography variant="h7">
            <Link
              style={{
                color: "white",
                marginRight: "10px",
              }}
              to="/"
            >
              {" "}
              All Entries{" "}
            </Link>
            <Link
              to="/entries/new"
              style={{
                color: "white",
                marginRight: "10px",
              }}
            >
              {" "}
              Create Entry{" "}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
