import localforage from "localforage";
import { SUBMIT_APP_JSON_DATA, ALL_COMMENTS } from "../constants/submitApp";
import { SkynetClient } from "skynet-js";
import imageCompression from "browser-image-compression";

const client = new SkynetClient("https://siasky.net/");

//for storing data
let globalArr = [];
export const SubmitYourAppAction = (data, manageSubmitLoader) => async (
  dispatch
) => {
  try {
    localforage.getItem("submitApp", async function (err, value) {
      if (value) {
        value.push(data);
        await localforage.setItem("submitApp", value);
        alert(data.id);
        manageSubmitLoader(false);
      } else {
        globalArr.push(data);
        await localforage.setItem("submitApp", globalArr);
        alert(data.id);
        manageSubmitLoader(false);
      }
    });
  } catch (err) {
    manageSubmitLoader(false);
    console.log(err);
  }
};

export const SubmitCommentAction = (data) => async (dispatch) => {
  try {
    localforage.getItem("appComments", async function (err, value) {
      if (value) {
        console.log("here is the value", value);
        let obj = {
          timestamp: new Date(),
          comment: data.content.comments[0].comment,
        };
        value.content.comments.push(obj);
        await localforage.setItem("appComments", value);
        // alert("commented!");
        dispatch(GetYourCommentsAction())
      } else {
        await localforage.setItem("appComments", data);
        // alert("commented!");
        dispatch(GetYourCommentsAction())

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

//for fetching data
export const GetYourCommentsAction = (data) => async (dispatch) => {
  try {
    await localforage.getItem("appComments", function (err, value) {
      dispatch({
        type: ALL_COMMENTS,
        payload: value,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

//action for upload videos and images

export const UploadAppLogo = (
  file,
  setLogoUploaded,
  logoLoaderHandler
) => async (dispatch) => {
  try {
    const getCompressed = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 256,
      useWebWorker: true,
    });
    const skylinkForCompressed = await client.uploadFile(getCompressed);
    const skylink = await client.uploadFile(file);

    let obj = {
      thumbnail: skylinkForCompressed.skylink,
      image: skylink.skylink,
    };
    setLogoUploaded(obj);
    logoLoaderHandler(false);
  } catch (err) {
    logoLoaderHandler(false);
  }
};

export const UploadImagesAction = (file, getUploadedFile, getFun) => async (
  dispatch
) => {
  try {
    const getCompressed = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 256,
      useWebWorker: true,
    });

    const skylinkForCompressed = await client.uploadFile(getCompressed);

    const skylink = await client.uploadFile(file);

    let obj = {
      thumbnail: skylinkForCompressed.skylink,
      image: skylink.skylink,
    };

    getUploadedFile(obj);
    getFun(false);
  } catch (err) {
    getFun(false);
    console.log(err);
  }
};

export const UploadVideoAction = (
  file,
  thumb,
  getUploadedFile,
  videoUploadLoader
) => async (dispatch) => {
  try {
    const skylinkForCompressed = await client.uploadFile(thumb);

    const skylink = await client.uploadFile(file);

    let obj = {
      thumbnail: skylinkForCompressed.skylink,
      video: skylink.skylink,
    };

    getUploadedFile(obj);
    videoUploadLoader(false);
  } catch (err) {
    videoUploadLoader(false);
    console.log(err);
  }
};
