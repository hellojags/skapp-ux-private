import localforage from "localforage";
import { SUBMIT_APP_JSON_DATA } from "../constants/submitApp";

//for storing data
let globalArr = [];
export const SubmitYourAppAction = (data) => async (dispatch) => {
  try {
    localforage.getItem("submitApp", function (err, value) {
      if (value) {
        value.push(data);
        localforage.setItem("submitApp", value);
        alert(data.id);
      } else {
        globalArr.push(data);
        localforage.setItem("submitApp", globalArr);
        alert(data.id);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

//for fetching data
export const GetYourAppDataAction = (data) => async (dispatch) => {
  try {
    await localforage.getItem("submitApp", function (err, value) {
      dispatch({
        type: SUBMIT_APP_JSON_DATA,
        payload: value,
      });
    });
  } catch (err) {
    console.log(err);
  }
};
