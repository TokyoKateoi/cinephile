import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
