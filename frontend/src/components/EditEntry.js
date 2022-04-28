import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import gql from "graphql-tag";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Picker = ({ label, name }) => {
  const [value, setValue] = useState(new Date());

  return (
    <div style={{ marginTop: "20px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} name={name} />}
          label={label}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

const theme = createTheme();

const UPDATE_ENTRY = gql`
  mutation updateEntry($entryId: ID!, $clockIn: String!, $clockOut: String!) {
    updateEntry(
      input: { clockIn: $clockIn, clockOut: $clockOut, entryId: $entryId }
    ) {
      id
      clockIn
      clockOut
    }
  }
`;

const UpdateEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [update] = useMutation(UPDATE_ENTRY);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    update({
      variables: {
        clockIn: data.get("clockin"),
        clockOut: data.get("clockout"),
        entryId: id,
      },
    });
    navigate("../", { replace: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Entry
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Picker name="clockin" label="Clock In" />
            <Picker name="clockout" label="Clock Out" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Entry
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UpdateEntry;
