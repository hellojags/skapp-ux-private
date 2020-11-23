import React from "react";
import {
  InputBase,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import withStyles from "../styles";


export default function searchInput(props) {

  var classes = withStyles();

  return (
    <div className={classes.searchfilter}>
        <InputBase
            placeholder="Search…"
            className={classes.search}
        />
        <SearchIcon className={classes.searchicon} />
    </div>
  );
}