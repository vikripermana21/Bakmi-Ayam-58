import About from "../pages/About";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Merchants from "../pages/Merchants";

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Menu",
    path: "/menu",
    component: Menu,
  },
  {
    name: "Merchant",
    path: "/merchant",
    component: Merchants,
  },
];
