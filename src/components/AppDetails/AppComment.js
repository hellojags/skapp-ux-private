import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as unFilledStar } from "@fortawesome/free-regular-svg-icons";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { GetYourCommentsAction } from "../../redux/actions/submitYourAppAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const useStyles = makeStyles({
  ratingDiv: {
    marginLeft: "1rem",
    "& svg": {
      color: "#FFD700",
      "@media only screen and (max-width: 575px)": {
        fontSize: "10px",
      },
    },
  },
  AppComment: {
    maxWidth: 715,
    marginBottom: 10,
  },
  opcity60: {
    opacity: ".60",
    "@media only screen and (max-width: 575px)": {
      fontSize: "10px",
    },
  },
  commenterName: {
    "@media only screen and (max-width: 575px)": {
      fontSize: "14px",
    },
  },
  ratingAndName: {
    marginLeft: "1.1rem",
    "@media only screen and (max-width: 575px)": {
      marginLeft: "10px",
    },
  },
  commenterImg: {
    maxWidth: 80,
    "@media only screen and (max-width: 575px)": {
      minWidth: 80,
    },
    "& > img": {
      borderRadius: 5,
      width: "100%",
    },
  },
});
const AppComment = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.SubmitAppReducer);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    dispatch(GetYourCommentsAction());
  }, []);

  React.useEffect(() => {
    if (comments) {
      setData(comments);
    }
  }, [comments]);

  return (
    <div>
      {data && data.content
        ? data.content.comments.map((i, index) => {
            return (
              <Box key={index} display="flex" className={classes.AppComment}>
                <Box
                  className={classes.commenterImg}
                  borderRadius="5px"
                  overflow="hidden"
                >
                  <img src="https://i.pravatar.cc/80" alt="" />
                </Box>
                <Box className={classes.ratingAndName}>
                  <Box display="flex" alignItems="center">
                    <h3 className={classes.commenterName}>Marquise Vasquez</h3>
                    <Box
                      className={classes.ratingDiv}
                      display="flex"
                      alignItems="center"
                    >
                      <Box marginRight=".5rem" display="flex">
                        <FontAwesomeIcon icon={filledStar} />
                        <FontAwesomeIcon icon={filledStar} />
                        <FontAwesomeIcon icon={filledStar} />
                        <FontAwesomeIcon icon={filledStar} />
                        <FontAwesomeIcon icon={unFilledStar} />
                      </Box>
                      <span className={classes.opcity60}>3.8</span>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="caption" className={classes.opcity60}>
                      {/* October 3, 2019 */}
                      {moment(i.timestamp).format("MMMM D, YYYY")}
                    </Typography>
                    <Typography
                      variant="caption"
                      component="div"
                      className={classes.opcity60}
                    >
                      {i.comment}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })
        : null}
    </div>
  );
};

export default AppComment;
