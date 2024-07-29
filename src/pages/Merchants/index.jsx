import Layout from "src/components/Layout";
import MerchantBg from "src/assets/merchant-image.svg";
import GoFood from "src/assets/gofood.svg";
import GrabFood from "src/assets/grabfood.svg";
import { FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";

const Merchants = () => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {}, [selected]);

  return (
    <Layout>
      <div className="pt-28">
        <div className="flex w-full justify-center bg-primary relative">
          <div className="wave"></div>
          <img src={MerchantBg} loading="lazy" className="object-cover" />
        </div>
        <div className="px-10 py-24">
          <div className="grid grid-cols-2 gap-5">
            <div className="p-2 flex items-center">
              <iframe
                src={
                  selected
                    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.370921495633!2d107.607305303479!3d-6.922886179790663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e700635fbf9d%3A0xa6beff259fe28ecf!2sBakmie%20Ayam%2058%20-%20Dalem%20Kaum!5e0!3m2!1sen!2sid!4v1722222435984!5m2!1sen!2sid"
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9890604450607!2d107.61408347567972!3d-6.891911167443324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e785262a9147%3A0x3c20feda8193943e!2sBakmie%20Ayam%2058%20-%20Teuku%20Umar!5e0!3m2!1sen!2sid!4v1722223683789!5m2!1sen!2sid"
                }
                width="100%"
                height="100%"
                allowFullScreen=""
                className="rounded-md"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col max-w-[30rem] justify-center">
              <div className="border-b-2 border-primary">
                <p className="text-primary font-title text-4xl font-semibold">
                  Temukan Bakmie Ayam 58
                </p>
              </div>
              <div className="flex flex-col gap-5 p-5 border-b-2 border-primary">
                <p className="font-semibold text-primary">
                  Bakmi Ayam 58 - Teuku Umar
                </p>
                <p className="text-primary">
                  Jl. Teuku Umar No.4/60, RT.01/ RW.10, Lebakgede, Kecamatan
                  Coblong, Kota Bandung, Jawa Barat 40132
                </p>
                <div className="flex gap-5 text-primary items-center">
                  <FaClock className="text-xl" />
                  <p>10:00 - 21:00 WIB</p>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    className="px-2 py-1 bg-primary text-secondary"
                    onClick={() => setSelected(false)}
                  >
                    Arah
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-5 ">
                <p className="font-semibold text-primary">
                  Bakmi Ayam 58 - Dalem Kaum
                </p>
                <p className="text-primary">
                  Jl. Dalem Kaum No.114, Balonggede, Kec. Lengkong, Kota
                  Bandung, Jawa Barat 40261
                </p>
                <div className="flex gap-5 text-primary items-center">
                  <FaClock className="text-xl" />
                  <p>10:00 - 21:00 WIB</p>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    className="px-2 py-1 bg-primary text-secondary"
                    onClick={() => setSelected(true)}
                  >
                    Arah
                  </button>
                </div>
              </div>
              <div className="flex items-end gap-10">
                <div className="mt-10 max-w-32 border-b-2 border-primary">
                  <p className="text-primary font-semibold">
                    Pesan Sekarang Juga
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10">
                    <img
                      src={GoFood}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-10 h-10">
                    <img
                      src={GrabFood}
                      loading="lazy"
                      className="object-contain"
                    />
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

export default Merchants;
