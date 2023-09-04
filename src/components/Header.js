import React from "react";

export default function Header({ data }) {
  return (
    <div>
      <h1 className=" border-t-2 border-b-2 border-black text-center py-1 px-0 m-8 text-lg tracking-wide w-32 mx-auto">
        OUR MENU
      </h1>
      {data.length === 0 ? (
        <p className=" w-[50%] mx-auto text-sm tracking-widest text-center">
          We are updating our menu...
        </p>
      ) : (
        <p className=" w-[50%] mx-auto text-sm tracking-widest text-center">
          Authentic Itelian cousine. 6 creative dishes to choose.All are oven
          baked.All organic.All delicious
        </p>
      )}
    </div>
  );
}
