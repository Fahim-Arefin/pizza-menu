import React from "react";

export default function PizzaMenu({ data }) {
  return (
    <div
      className={`flex w-[40%] m-4 items-center ${
        data.soldOut ? "text-[#888]" : ""
      }`}
    >
      <img
        className={`w-24 ${data.soldOut ? "grayscale" : ""}`}
        src={data.photoName}
        alt={data.name}
      />
      <div className="ml-6 w-[60%]">
        <p className="text-lg font-bold">{data.name}</p>
        <p className="text-xs italic">{data.ingredients}</p>
        <p className="text-sm">{data.soldOut && "SOLD OUT"}</p>
      </div>
    </div>
  );
}
