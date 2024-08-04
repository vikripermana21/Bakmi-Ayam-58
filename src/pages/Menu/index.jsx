import Layout from "src/components/Layout";
import CircleText from "src/assets/circle-name.svg";
import MieKalong from "src/assets/mie-kalong.svg";
import MiePutih from "src/assets/mie-putih.svg";
import Jamur from "src/assets/rica-rica.svg";
import RicaRica from "src/assets/jamur.svg";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { IoPlayCircle } from "react-icons/io5";
import { motion as m, stagger, useAnimate } from "framer-motion";

const Menu = () => {
  const ref = useRef();
  const [selected, setSelected] = useState("kalong");

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "p,img,button",
      { opacity: [0, 1], y: [-20, 0] },
      { delay: stagger(0.1, { startDelay: 3 }) }
    );
  }, []);

  return (
    <Layout>
      <div className="py-20 xl:py-32 px-10 overflow-hidden">
        <div className="flex w-full gap-28">
          <div className="flex justify-end relative pt-10 min-w-[45%] max-w-[45%] z-20">
            <m.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 2 }}
              src={CircleText}
              loading="lazy"
              className="animate-[spin_20s_linear_infinite] absolute right-5 top-12 w-[26rem] xl:w-auto xl:top-auto xl:right-auto"
            />
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.3 }}
              className="h-full w-full "
            >
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                watchSlidesProgress
                loop
              >
                <SwiperSlide>
                  <SlideComponent
                    src={MieKalong}
                    name="kalong"
                    btnRef={ref}
                    onChange={setSelected}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SlideComponent
                    src={MiePutih}
                    name="putih"
                    btnRef={ref}
                    onChange={setSelected}
                  />
                </SwiperSlide>
              </Swiper>
            </m.div>
          </div>
          <div className="flex-1 relative z-0">
            <m.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute w-full h-full bg-primary z-0 -bottom-72 2xl:scale-x-[2] scale-x-[2.5]"
            >
              <div className="relative w-full h-full">
                <div className="wave"></div>
              </div>
            </m.div>
            <div className="z-20 flex flex-col justify-between w-full h-full">
              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.3 }}
                className="font-title text-6xl xl:text-7xl text-primary font-bold mt-20"
              >
                Menu Andalan <br /> Bakmi Ayam 58
              </m.p>
              <div ref={scope} className="z-20 flex flex-col gap-3 xl:gap-10 pt-36 xl:pt-24">
                <p className="font-semibold font-title text-3xl xl:text-5xl text-secondary">
                  {selected === "kalong" ? "BAKMIE KALONG" : "BAKMIE ORIGINAL"}
                </p>
                <p className="font-semibold font-title text-3xl xl:text-5xl text-secondary">
                  Isi :
                </p>
                <p className="text-secondary text-sm xl:text-xl">
                  {selected === "kalong"
                    ? "Mie Hitam (asin atau manis), sayur, kuah."
                    : "Mie Kuning (asin atau manis), sayur, kuah."}
                </p>
                <div className="flex">
                  <div className="flex flex-col flex-1 gap-10">
                    <p className="font-title text-secondary text-3xl xl:text-5xl font-semibold">
                      Topping :
                    </p>
                    <div className="flex gap-10 text-secondary">
                      <div className="flex flex-col items-center gap-5">
                        <img src={Jamur} loading="lazy" className="w-28 xl:w-auto" />
                        <p>Ayam Jamur</p>
                      </div>
                      <div className="flex flex-col items-center gap-5">
                        <img src={RicaRica} loading="lazy" className="w-28 xl:w-auto" />
                        <p>Ayam Rica Rica</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => ref.current.click()}>
                      <IoPlayCircle className="text-3xl xl:text-5xl text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// eslint-disable-next-line react/prop-types
const SlideComponent = ({ src, name, btnRef, onChange }) => {
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  if (swiperSlide.isActive) {
    onChange(name);
  }

  return (
    <div className="flex justify-end px-9 pt-5">
      <button ref={btnRef} onClick={() => swiper.slideNext()}></button>
      <img src={src} loading="lazy" className="w-96 xl:w-auto" />
    </div>
  );
};

export default Menu;
