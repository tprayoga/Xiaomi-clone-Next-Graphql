import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="z-index[1000]  flex justify-between items-center ">
      <div className="">
        <div className="flex">
          <div className="absolute z-10 left-20 top-16">
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo-bg.svg"
              width={60}
              height={60}
            />
          </div>
          <div className="z-20 ml-7 ">
            <Image
              src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
              width={110}
              height={110}
            />
          </div>
        </div>
      </div>
      <div className="mr-20">
        <a className="m-1 font-normal text-primary-light">Xiomi Phones</a>
        <a className="m-1 font-normal text-primary-light">Redmi Phones</a>
        <a className="m-1 font-normal text-primary-light">Poco Phones</a>
        <a className="m-1 font-normal text-primary-light">TV</a>
        <a className="m-1 font-normal text-primary-light">Product Ekosistem</a>
        <a className="m-1 font-normal text-primary-light">Power Bank</a>
        <a className="m-1 font-normal text-primary-light">All Products</a>
        <a className="m-1 font-normal text-primary-light">Discover</a>
      </div>
    </div>
  );
};

export default Navbar;
