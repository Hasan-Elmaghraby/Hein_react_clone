import Loader from "@/shared/components/Loader";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Signup = React.lazy(() => import("./routes/Signup"));
const Signin = React.lazy(() => import("./routes/Signin"));
const ValidationCode = React.lazy(() => import("./routes/ValidationCode"));
const ForgetPSW = React.lazy(() => import("./routes/ForgetPSW"));
const ChangePSW = React.lazy(() => import("./routes/ChangePSW"));

const Auth = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/validation" element={<ValidationCode />} />
        <Route path="/forgetPassword" element={<ForgetPSW />} />
        <Route path="/change-password" element={<ChangePSW />} />
      </Routes>
    </Suspense>
  );
};

export default Auth;
