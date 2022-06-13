import React from "react";

const BlackNavbar = () => {
  return (
    <div className="bg-primary-dark text-white flex justify-between">
      <div className="flex items-center p-2 px-10 text-primary-light text-xs font-normal font-sans">
        <a className="m-1 mx-5 hover:text-white" href="https://www.mi.com/in/">
          MI INDONESIA
        </a>{" "}
        <span className="font-thin">|</span>
        <a
          className="m-1 mx-5 hover:text-white"
          href="https://in.event.mi.com/in/install-mi-store"
        >
          IKUTI KITA DI FACEBOOK
        </a>{" "}
        <span className="font-thin">|</span>
        <a
          className="m-1 mx-5 hover:text-white"
          href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1"
        >
          MI COMMUNITY
        </a>{" "}
        <span className="font-thin">|</span>
        <a
          className="m-1 mx-5 hover:text-white"
          href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1"
        >
          GERAI TERDEKAT
        </a>{" "}
        <span className="font-thin">|</span>
        <a
          className="m-1 mx-5 hover:text-white"
          href="https://www.mi.com/in/service/authorized_stores/"
        >
          SERCIVE CENTER RESMI
        </a>
      </div>
      <div className="flex items-center p-2 px-10 text-primary-light text-xs font-normal font-sans">
        <a className="m-1 mx-5 hover:text-white" href="https://www.mi.com/in/">
          MASUK
        </a>{" "}
        <span className="font-thin">|</span>
        <a
          className="m-1 mx-5 hover:text-white"
          href="https://in.event.mi.com/in/install-mi-store"
        >
          DAFTAR
        </a>{" "}
        <span className="font-thin">|</span>
        <a
          className="m-1 pr-5 hover:text-white"
          href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1"
        >
          KERANJANG (0)
        </a>{" "}
      </div>
    </div>
  );
};

export default BlackNavbar;
