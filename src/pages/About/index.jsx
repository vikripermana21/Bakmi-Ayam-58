import Layout from "src/components/Layout";
import AboutImage from "src/assets/about-image.svg";
import About1 from "src/assets/about-1.svg";
import About2 from "src/assets/about-2.svg";
import About3 from "src/assets/about-3.svg";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { motion as m } from "framer-motion";

const About = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "p",
      { opacity: [0, 1], y: [-20, 0] },
      { delay: stagger(0.3, { startDelay: 1 }) }
    );
  }, []);

  return (
    <Layout>
      <div className="flex px-10 py-36 flex-wrap">
        <div className="hero-container flex-1 flex flex-col gap-5">
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="font-title text-6xl xl:text-8xl font-bold text-primary"
          >
            Dari Dapur Keluarga ke Lidah Kota{" "}
          </m.p>
          <div ref={scope} className="flex flex-col gap-5 text-xs xl:text-base">
            <p className="text-primary">
              Kawan Mapan! Pernah dengar cerita keren di balik Bakmie Ayam 58?
              Nih, kita spill sedikit ya!
            </p>
            <p className="text-primary">
              Jadi, ada dua saudara, Rio dan Yovi, yang super bangga sama
              masakan ayah mereka. Sebagai bentuk rasa sayang dan hormat, mereka
              memutuskan untuk meneruskan gerai Bakmie Ayam 58. Nama “58” punya
              makna spesial, lho! Itu merupakan angka kelahiran ayah mereka,
              sang jagoan di balik resep bakmie yang super lezat ini.
            </p>

            <p className="text-primary">
              Bayangin deh, dari bumbu hingga mie-nya, semuanya dibuat dengan
              tangan terampil sang ayah. Tujuannya? Biar kita semua bisa
              ngerasain bakmie ayam khas China yang halal dan pastinya nikmat
              abis, dengan bahan-bahan yang aman dan berkualitas.
            </p>
            <p className="text-primary">
              Gerai pertama Bakmie Ayam 58 dibuka di Jln. Teuku Umar pada tahun
              2023. Sejak saat itu, Bakmie Ayam58 langsung jadi incaran banyak
              orang, terutama menu bakmi kalong yang jadi best seller! Sekarang,
              buat kalian yang ada di Bandung, bisa mampir juga ke cabang baru
              kami di Jln. Dalem Kaum No.114.{" "}
            </p>
          </div>
        </div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2 }}
        >
          <img src={AboutImage} className="w-96 xl:w-auto" />
        </m.div>
      </div>
      <div className="w-full bg-review bg-primary p-10 flex flex-col items-center relative">
        <div className="wave"></div>
        <div className="flex flex-col items-center w-full gap-20">
          <p className="font-title text-secondary text-2xl font-semibold sticky top-32">
            Keunggulan Bakmie Ayam 58
          </p>
          <div className="grid grid-cols-3 w-full">
            <div className="min-h-[400vh]">
              <div className="flex flex-col items-center text-white text-center gap-5 sticky top-60">
                <img src={About3} alt="" className="w-36 xl:w-auto" />
                <div className="flex flex-col text-xs xl:text-base">
                  <p className="font-semibold">Tanpa air abu:</p>
                  <p className="max-w-52">
                    Jangan khawatir, Bakmie Ayam 58 nggak pake air abu, jadi
                    lebih sehat dan aman buat kamu nikmati setiap hari.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[400vh] pt-[100vh]">
              <div className="flex flex-col items-center text-white text-center gap-5 sticky top-60">
                <img src={About1} alt="" className="w-36 xl:w-auto" />
                <div className="flex flex-col text-xs xl:text-base">
                  <p className="font-semibold">Mie Kenyal dan Lembut:</p>
                  <p className="max-w-52">
                    Rahasianya ada di telur! Yup, bakmie kita pakai banyak
                    telur, bikin teksturnya kenyal dan lembut banget di mulut.
                    Nggak ada lagi mie keras yang susah dikunyah
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[400vh] pt-[200vh]">
              <div className="flex flex-col items-center text-white text-center gap-5 sticky top-60">
                <img src={About2} alt="" className="w-36 xl:w-auto" />
                <div className="flex flex-col text-xs xl:text-base">
                  <p className="font-semibold">Cepat Saji:</p>
                  <p className="max-w-52">
                    Waktu kamu berharga, jadi bakmie kita cuma butuh 2 menit
                    buat siap dihidangin. Cepet banget, kan? Pas buat kamu yang
                    super sibuk tapi pengen makan enak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
