import React from "react";

const Nav = ({ products }) => {
  console.log(products);
  return (
    <div className="flex items-center justify-between bg-primary-light-2 ">
      <div className="">
        <div className="flex">
          {products?.map((name, index) => (
            <h1 key={index} className="ml-20 text-3xl">
              {name}
            </h1>
          ))}
        </div>
      </div>
      <div className="p-3 mr-20">
        <a className="m-3 font-normal text-primary-light">Ringkasan</a>
        <a className="m-3 font-normal text-primary-light">Spesifikasi</a>
        <a className="m-3 font-normal text-primary-light">Ulasan</a>
        <a className="p-1 m-3 font-normal text-white bg-orange-500 ">
          Beli Sekarang
        </a>
      </div>
    </div>
  );
};

export default Nav;
