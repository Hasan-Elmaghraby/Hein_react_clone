import React from "react";
import { Routes, Route } from "react-router-dom";

const Signup = React.lazy(() => import("./routes/Signup"));
const Signin = React.lazy(() => import("./routes/Signin"));
const ValidationCode = React.lazy(() => import("./routes/ValidationCode"));

const Auth = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/validation" element={<ValidationCode />} />
    </Routes>
  );
};

export default Auth;
