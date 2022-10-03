import React from "react";
import { Route, Routes } from "react-router-dom";

// import useToken from "../hooks/use-token";
import PrincipalSkeleton from "../skeletons/Principal";

const Home = React.lazy(() => import("../pages/Home"));
const User = React.lazy(() => import("../pages/User"));

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  // useToken();

  return (
    <React.Suspense fallback={<PrincipalSkeleton />}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<User />} path="user" />
        </Route>
        <Route index element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}
