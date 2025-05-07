import React from "react";
import { Routes, Route } from "react-router-dom";

const Signup = React.lazy(() => import("./routes/Signup"));
const Signin = React.lazy(() => import("./routes/Signin"));

const Auth = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default Auth;
