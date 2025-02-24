import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Beta from "./pages/Beta";
import Blog from "./pages/Blog";
import React from "react";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense
      fallback={
        <p>
          Loading...<div className="w-[800px] h-[600px]"></div>
        </p>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beta" element={<Beta />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
