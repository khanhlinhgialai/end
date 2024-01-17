import React, { useEffect, useState } from "react";
import { CircularText, MoonIcon, KhanhLinh } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/router";

const HireMe = () => {
  const { locale } = useRouter();


const booking = {
  en: 'Booking',
  vn: 'Đặt Phòng'
}

  return (
    <div className="fixed sm:right-0 left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-28 md:bottom-auto md:absolute">


      <div className="w-48 h-auto flex items-center justify-center relative md:w-28">
        <MoonIcon className={"fill-dark animate-spin-slow dark:fill-light"} />

        <Link
          href="mailto:sales@hotelkhanhlinh.vn"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light
shadow-md  border-dark w-28 h-28 rounded-full font-semibold 
hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
md:w-16 md:h-16 md:text-[12px]
dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
"
        >
          {booking[locale]}
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
