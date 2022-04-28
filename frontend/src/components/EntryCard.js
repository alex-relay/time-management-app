import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const convertToIsoString = (date) => {
  return new Date(date).toISOString();
};

const createDate = (date) => {
  return convertToIsoString(date).split("T")[0];
};

const createTime = (date) => {
  return convertToIsoString(date).split("T")[1].slice(0, 5);
};

const OutlinedCard = ({ entry, handleClick }) => {
  const { clockIn, clockOut, userName, id } = entry;
  const clockInDate = createDate(clockIn);
  const clockInTime = createTime(clockIn);
  const clockOutTime = clockOut ? createTime(clockOut) : null;
  const clockOutDate = clockOut ? createDate(clockOut) : null;

  return (
    <Box
      style={{
        display: "inline-block",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      flexDirection="column"
      sx={{ mt: 10, ml: 25 }}
    >
      <Card
        variant="outlined"
        sx={{ mr: 10, height: 200, width: 400 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ceeff5",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {userName}
          </Typography>
          <Typography variant="body2">
            Clocked In: {clockInDate} at {clockInTime}
          </Typography>
          {clockOut && (
            <Typography variant="body2">
              Clocked Out: {clockOutDate} at {clockOutTime}
            </Typography>
          )}
          <Typography sx={{ mt: 7 }} variant="body2">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button>
                <Link style={{ color: "black" }} to={`/entries/${id}/edit`}>
                  Edit Entry
                </Link>
              </Button>
              {!clockOut && (
                <Button
                  size="small"
                  style={{ textDecoration: "underline", color: "black" }}
                  onClick={() => {
                    handleClick({
                      variables: {
                        clockOut: new Date(),
                        entryId: entry.id,
                      },
                    });
                  }}
                >
                  Clock Out
                </Button>
              )}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
