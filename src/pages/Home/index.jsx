import { IoChatbubblesOutline } from "react-icons/io5";
import HeroImage from "src/assets/hero-image.svg";
import HeroImage2 from "src/assets/hero-image-2.svg";
import HeroPattern from "src/assets/hero-pattern.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useMemo } from "react";

const Home = () => {
  const swiper = useSwiper();

  const review = useMemo(() => [
    {
      message:
        "Mienya unik, warnanya hitam, teksturnya enak kenyal. Topping ayamnya juga enak, saya suka yang ayam jamur. Pangsitnya juga enak. Pelayanannya cepet",
      reviewer: "Anggoro Prasetyo Utomo",
    },
    {
      message:
        "Cocok buat sarapan sehabis jalan, Mie ayam rica enak dengan ditutup sama roti bakar yang renyah dan kopi hitam, Outdoornya enak dan nyaman.",
      reviewer: "Benny Arisusanto",
    },
    {
      message:
        "Bakminya guring kuah baso nya juga guring passlah👍. Coba datang ke cabang nya jl dalam kaum tempatnya luas mantap sama bangunan vitagen ya pas banget enak kalau suasana malam buat nongkrong diluar",
      reviewer: "Bagong Balap",
    },
    {
      message:
        "Udah enam kali makan disini, rasa bakmienya tuh enak, kenyal, wangi dan porsi bakmienya tuh lumayan banyak. terus pelayanannya juga cepet lagi. Paling enak sih Bakmie kalong rica-rica😍",
      reviewer: "Ghania Salsabila",
    },
  ]);

  return (
    <>
      <div className="pt-24 px-10">
        <div className="flex items-center py-24 relative">
          <img
            src={HeroPattern}
            className="absolute top-10 left-20 z-0 scale-125"
          />
          <div className="flex flex-col flex-1 gap-5">
            <p className="font-title text-7xl font-bold text-primary z-20">
              Makan <br />
              Bakmie Ayam 58 <br />
              Biar{" "}
              <span className="bg-primary text-secondary p-1">
                #selalumapan
              </span>
            </p>
            <p className="text-4xl text-primary">NO PORK, NO LARD, NO ANGCIU</p>
          </div>
          <div>
            <img src={HeroImage} />
          </div>
        </div>
      </div>
      <div className="w-full bg-review bg-primary p-10 flex items-center relative">
        <div className="wave"></div>
        <div className="wave-bottom"></div>
        <div className="w-full flex flex-col gap-10 items-center justify-center text-white">
          <div className="flex gap-5">
            <IoChatbubblesOutline className="text-3xl scale-x-[-1]" />
            <p className="font-title text-secondary text-4xl font-semibold">
              Review dari Kawan Mapan
            </p>
            <IoChatbubblesOutline className="text-3xl" />
          </div>
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay
            >
              {review.map((item, index) => (
                <SwiperSlide key={index}>
                  <ReviewSection
                    message={item?.message}
                    reviewer={item?.reviewer}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-10 py-20">
        <div>
          <img src={HeroImage2} />
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <p className="font-title text-6xl text-primary font-bold">
            Nikmati pagi yang Lebih seru dengan Bakmie Ayam 58!
          </p>
          <p className="text-primary text-lg">
            Tahu nggak sih, apa yang bikin hari kamu jadi lebih asik? Bakmie!
            Dan kalau bakmie-nya itu buatan rumahan, halal, dan punya rasa khas
            yang bikin lidah bergoyang, pagi kamu pasti bakal makin cerah!
          </p>
          <p className="text-primary text-lg">
            Siap dalam hitungan menit, Bakmie Ayam 58 jadi santapan yang cepat,
            aman, dan pastinya nikmat banget buat kamu yang aktif dan selalu
            on-the-go.
          </p>
          <p className="text-primary text-lg">
            Yuk, cobain Bakmie Ayam 58 dan rasakan sensasi lezatnya warisan cita
            rasa yang nggak ada duanya.
          </p>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const ReviewSection = ({ message, reviewer }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <p className="text-2xl max-w-[40rem]">“{message}”</p>
      <p className="font-semibold text-2xl">
        ~ {reviewer} | On Google Reviews ~
      </p>
    </div>
  );
};

export default Home;
