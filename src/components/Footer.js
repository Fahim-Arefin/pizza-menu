import React from "react";

export default function Footer() {
  let now = new Date();

  let startTime = new Date();
  startTime.setHours(11, 0, 0); // 11:00 am

  let endTime = new Date();
  endTime.setHours(23, 30, 0); // 11:30 pm

  const isOpen = now >= startTime && now <= endTime;

  console.log(isOpen);

  if (isOpen) {
    console.log("The current time is between 11 am and 11:30 pm.");
  } else {
    console.log("The current time is not between 11 am and 11:30 pm.");
  }

  return (
    <div className=" text-center p-4">
      {isOpen ? (
        <p className="text-sm">
          We are open now. Come visit us and also order online
        </p>
      ) : (
        <p>Oppss!! We are now closed !! We open from 11:00 am to 11:30 pm</p>
      )}
      <button
        disabled={!isOpen}
        onClick={() => console.log("clicked")}
        className={`${
          isOpen
            ? "hover:bg-yellow-500 active:bg-yellow-600"
            : " opacity-50 cursor-not-allowed"
        } bg-yellow-400 px-5 py-1 mt-4 broder border-2 border-slate-300 rounded-md`}
      >
        order
      </button>
    </div>
  );
}
