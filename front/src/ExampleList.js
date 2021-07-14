import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import api from "./constants/api";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const Example = ({ title, description }) => {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={title}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {description}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default function ExampleList() {
  const classes = useStyles();
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    axios
      .get(api.exampleUrl.getAll)
      .then((result) => {
        console.log(result.data);
        setExamples(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <List className={classes.root}>
      {examples.map((example) => (
        <Container>
          <Example {...example} />
        </Container>
      ))}
    </List>
  );
}
