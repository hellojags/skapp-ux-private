import localforage from "localforage";
import { IS_APP_IN_FAV, IS_APP_IN_LIKED } from "../constants/appStats";

// app stats actions
let checkLikedArr = [];
export const LikeAction = (data, id) => async (dispatch) => {
  try {
    await localforage.getItem("appStats", async function (err, value) {
      value.map(async (item) => {
        if (item[`${id}#stats`]) {
          if (data === "addLike") {
            item[`${id}#stats`].content.liked = 1;
            checkLikedArr.push(item[`${id}#stats`]);
          } else {
            item[`${id}#stats`].content.liked = 0;
            checkLikedArr.push(item[`${id}#stats`]);
          }
        } else {
        }
      });
      if (checkLikedArr.length) {
        await localforage.setItem("appStats", value);
        dispatch(isAppInFavAction(id));
      }
    });
  } catch (err) {
    console.log(err);
  }
};

let checkFavArr = [];
export const FavoriteAction = (data, id) => async (dispatch) => {
  try {
    await localforage.getItem("appStats", async function (err, value) {
      value.map(async (item) => {
        if (item[`${id}#stats`]) {
          if (data === "addFav") {
            item[`${id}#stats`].content.favorite = 1;
            checkFavArr.push(item[`${id}#stats`]);
          } else {
            item[`${id}#stats`].content.favorite = 0;
            checkFavArr.push(item[`${id}#stats`]);
          }
        } else {
        }
      });
      if (checkFavArr.length) {
        await localforage.setItem("appStats", value);
        dispatch(isAppInFavAction(id));
      }
    });
  } catch (err) {
    console.log(err);
  }
};

let checkArr = [];
export const ViewAction = (data, pushRoute) => async (dispatch) => {
  try {
    // console.log("called====>", data);
    await localforage
      .getItem("appStats", function (err, value) {
        if (value) {
          value.map(async (item) => {
            if (item[`${data}#stats`]) {
              item[`${data}#stats`].content.viewed++;
              checkArr.push(item[`${data}#stats`]);
            } else {
              // console.log("not founded brooooO====>");
            }
          });
        }
        if (checkArr.length) {
          localforage.setItem("appStats", value);
        }
      })
      .then(() => {
        pushRoute(data);
      });
  } catch (err) {
    console.log(err);
  }
};

//get isApp Fav
export const isAppInFavAction = (id) => async (dispatch) => {
  try {
    await localforage.getItem("appStats", function (err, value) {
      if (value) {
        value.map(async (item) => {
          if (item[`${id}#stats`]) {
            dispatch({
              type: IS_APP_IN_FAV,
              payload: item[`${id}#stats`].content.favorite,
            });

            dispatch({
              type: IS_APP_IN_LIKED,
              payload: item[`${id}#stats`].content.liked,
            });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
