import React from "react";
import { useGetMyAds } from "./api/useGetMyAds";

const MyAds = () => {
  const { data } = useGetMyAds();
  console.log(data);
  return <div>MyAds</div>;
};

export default MyAds;
