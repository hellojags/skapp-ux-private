import React, { useEffect, useState } from "react";
import AppDetailsHeader from "./AppDetailsHeader";
import AppInfo from "./AppInfo";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetYourAppDataAction } from "../../redux/actions/submitYourAppAction";

const AppDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetYourAppDataAction());
  }, []);

  const { submitAppformData } = useSelector((state) => state.SubmitAppReducer);
  const [data, setData] = useState();

  useEffect(() => {
    if (submitAppformData) {
      submitAppformData.filter((items) => {
        if (items.id === id) {
          setData(items);
        }
      });
    }
  }, [submitAppformData, id]);

  return (
    <div>
      <AppDetailsHeader data={data} />
      <AppInfo data={data}/>
    </div>
  );
};

export default AppDetailsPage;
