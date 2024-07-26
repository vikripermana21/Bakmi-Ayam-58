import { Route, Routes, useLocation } from "react-router-dom";

import { routes } from "./constants";

// Import Swiper styles
import "swiper/css";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        {routes.map((route, key) => {
          const { component: Component } = route;
          return <Route key={key} path={route.path} element={<Component />} />;
        })}
      </Routes>
    </AnimatePresence>
  );
}
