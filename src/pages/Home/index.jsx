import { IoChatbubblesOutline } from "react-icons/io5";
import HeroImage from "src/assets/hero-image.svg";
import HeroImage2 from "src/assets/hero-image-2.svg";
import HeroPattern from "src/assets/hero-pattern.svg";

const Home = () => {
  return (
    <>
      <div className="pt-24 px-10">
        <div className="flex items-center py-24 relative">
          <img
            src={HeroPattern}
            className="absolute top-10 left-20 z-0 scale-125"
          />
          <div className="flex flex-col flex-1 gap-5">
            <p className="font-title text-8xl font-bold text-primary">
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
      <div className="w-full min-h-[70vh] bg-review bg-cover p-10 flex items-center">
        <div className="w-full flex flex-col gap-10 items-center justify-center text-white">
          <div className="flex gap-5">
            <IoChatbubblesOutline className="text-3xl scale-x-[-1]" />
            <p className="font-title text-secondary text-4xl font-semibold">
              Review dari Kawan Mapan
            </p>
            <IoChatbubblesOutline className="text-3xl" />
          </div>
          <p className="text-2xl text-secondary text-center max-w-3xl">
            “Mienya unik, warnanya hitam, teksturnya enak kenyal. Topping
            ayamnya juga enak, saya suka yang ayam jamur. Pangsitnya juga enak.
            Pelayanannya cepet”
          </p>
          <p className="text-secondary font-semibold text-2xl">
            ~ Anggoro Prasetyo Utomo | On Google Reviews ~
          </p>
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

export default Home;
