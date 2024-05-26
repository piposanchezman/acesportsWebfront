import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MainMenu from "./Home";
import RegisterForm from "./RegisterForm";
import { LoadingAnimation } from "../components/Loading";

export const Dashboard: React.FC = () => {
  const { userData, appContextIsFetching } = useContext(AppContext);
  if (appContextIsFetching) {
    return <LoadingAnimation />;
  }
  return (
    <>
      <MainMenu />
    </>
  );
};
