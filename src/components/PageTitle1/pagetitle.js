import React from "react";

// styles
import useStyles from "./styles";

// components
import { 
    Typography,
    FormControl,
    NativeSelect,
} from "@material-ui/core";

import BootstrapInput from './component/bootstrapInput';
import SearchInput from './component/searchInput';

export default function PageTitle1(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <div className={classes.d_flex}>
        <Typography className={classes.title} variant="h1" size="sm">
            {props.title}
        </Typography>
        <Typography className={classes.subtitle} variant="h1" size="sm">
            {props.subtitle}
        </Typography>
      </div>
      <div className={classes.filter}>
        <div className={classes.selectfield}>
            <FormControl>
                <NativeSelect
                    variant="outlined"
                    input={<BootstrapInput />}
                >
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                    <option value={3}>Category 3</option>
                    <option value={4}>Category 4</option>
                    <option value={5}>Category 5</option>
                    <option value={6}>Category 6</option>
                    <option value={7}>Category 7</option>
                    <option value={8}>Category 8</option>
                    <option value={9}>Category 9</option>
                    <option value={10}>Category 10</option>
                </NativeSelect>
            </FormControl>
        </div>
        <div className={classes.searchfiedl}>
            <SearchInput />
        </div>
      </div>
    </div>
  );
}
