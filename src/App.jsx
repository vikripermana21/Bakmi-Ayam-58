import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routes } from "./constants";
import Layout from "./components/Layout";

// Import Swiper styles
import "swiper/css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, key) => {
          const { component: Component } = route;
          return (
            <Route
              key={key}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
