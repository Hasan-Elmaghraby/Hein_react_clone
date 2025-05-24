import React from "react";
import { useUser } from "@/shared/context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

const PrivatePage = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return user?.active ? <Outlet /> : <>{navigate("/auth/login")}</>;
};

export default PrivatePage;
