import React from "react";
import Image from "next/dist/client/image";

const Top = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="absolute z-10">
          <Image
            src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/top001.png"
            width={2550}
            height={1400}
            className=""
          />
        </div>
        <div className="absolute z-20 items-center mt-56 right-32">
          <h1 className="text-6xl">Redmi 10C</h1>
          <h1 className="mt-5 ml-1 text-2xl">
            Snapdragon® 680 |<br /> Kamera 50MP
            <br /> beresolusi tinggi
          </h1>
          <div className="ml-1 mt-36">
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-10c/section01-icon02.png"
              width={90}
              height={35}
            />
            <h1 className="text-xs">
              Android Enterprise Recommended offers an ecosystem of devices
              <br /> and services verified by Google™ against enterprise grade
              <br />
              requirements for performance, consistency and security updates.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
