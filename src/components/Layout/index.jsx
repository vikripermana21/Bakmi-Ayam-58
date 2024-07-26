/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import Logo from "../../assets/logo.svg";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <m.div
        initial={{ height: "100vh" }}
        animate={{ height: 0 }}
        exit={{ height: "100vh" }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="w-screen h-screen bg-primary fixed origin-bottom z-50 flex flex-col justify-center items-center"
      >
        <p className="font-title text-6xl text-secondary font-bold">
          BAKMIE AYAM 58
        </p>
        <div className="wave-line"></div>
      </m.div>
      <div className="fixed w-full flex justify-between py-5 px-10 border-b-2 border-b-primary text-primary bg-secondary z-40">
        <div className="flex items-center gap-3">
          <img src={Logo} />
          <span className="w-1 h-full bg-primary" />
          <p className="font-semibold">Bakmie Ayam 58</p>
        </div>
        <div className="flex gap-10 items-center">
          {routes.map((item, key) => (
            <div key={key}>
              <Link
                to={item.path}
                className="px-2 py-1 rounded-full hover:bg-[#96E5A0] transition-all"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary">{children}</div>
      <div className="w-full py-5 px-10 bg-black grid grid-cols-2 text-white">
        <div className="flex flex-col gap-5">
          <p className="font-title font-semibold text-2xl uppercase">
            Bakmie Ayam 58
          </p>
          <div className="grid grid-cols-2 w-1/2">
            <div className="flex gap-2 items-center text-sm">
              <IoLocationSharp />
              <p>Teuku Umar No.4/60</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <FaInstagram />
              <p>@bakmieayam58</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <IoLocationSharp />
              <p>Dalem Kaum No.114</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <FaWhatsapp />
              <p>082129679572</p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <p className="font-semibold">© 2024 BAKMIE AYAM 58</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
