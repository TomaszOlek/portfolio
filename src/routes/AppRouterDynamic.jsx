import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";

const Home = lazy(() => import("../Container"));
const Lush = lazy(() => import("../pages/lush/App"));
const Gercht = lazy(() => import("../pages/gercht/App"));

export default () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="/lush"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <Lush />
        </Suspense>
      }
    />
    <Route
      path="/gericht"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <Gercht />
        </Suspense>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
