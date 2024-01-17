import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
import { useRouter } from "next/router";

import {  useTranslation } from "next-i18next";
const Footer = () => {
  const { locale } = useRouter();

  const map = {
    en: 'Hotel',
    vn: 'Khách Sạn'
  }

  const menu = {
    en: 'Menu Wedding',
    vn: 'Thực Đơn Nhà Hàng'
  }
  const home = {
    en: 'Home Page',
    vn: 'Trang Chủ'
  }


  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout
        className="py-8 flex items-center justify-between
      w-full px-32 lg:flex-col lg:py-16
      "
      >
        <span>
        <MotionLink
            href="https://www.google.com/maps/@13.9766025,108.013479,3a,75y,347.3h,122t/data=!3m8!1e1!3m6!1sAF1QipPkfq9qrzX5O-Eixl1fjuptPJlpAJraNvUqRXSV!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPkfq9qrzX5O-Eixl1fjuptPJlpAJraNvUqRXSV%3Dw203-h100-k-no-pi-0-ya237.99513-ro0-fo100!7i7200!8i3600?hl=vi-VN&entry=ttu"
            className="
            
          
            hover:bg-light px-1 rounded-lg text-lg font-semibold
            hover:text-dark border-2 border-solid border-transparent hover:border-dark
            dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
            "
            target={"_blank"}
            whileHover={{ 
              scale: 1.2,
              // backgroundColor: [ "rgba(255,255,255, 0.9)","rgba(131,58,180,1)","rgba(30,139,195,1)","rgba(252,176,69,1)"],
              transition: {duration:1, repeat: Infinity}
             }}
            
          >
                    {map[locale]}

 &#127980;Map &#128506;
          {new Date().getFullYear()} 
          </MotionLink>
   
        </span>
        <span>
        <Link
            href="tel:0269 3735 555"
            className="
            
            dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
              hover:bg-light px-1 rounded-lg text-lg font-semibold
              hover:text-dark border-2 border-solid border-transparent hover:border-dark
            "
            target={"_blank"}

            
          >&#9742;
          0269 3735 555.
          </Link>
        </span>
        <div className="flex items-center lg:py-2">
        {home[locale]}
          {" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 ">&#9825;</span>
          <Link
            href="https://www.facebook.com/hotelkhanhlinhvn"
            className="underline underline-offset-2
            dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
          
              hover:bg-light px-1 rounded-lg text-lg font-semibold
              hover:text-dark border-2 border-solid border-transparent hover:border-dark
            "
            target={"_blank"}

            
          >
            Khánh Linh Hotel
          </Link>
        </div>
        <Link
          href="https://wedding.hotelkhanhlinh.vn/"
          className="underline underline-offset-2
          hover:bg-light px-1 rounded-lg text-lg font-semibold
          hover:text-dark border-2 border-solid border-transparent hover:border-dark
          dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
          "
          target={"_blank"}
        >
         &#127977;{menu[locale]}

        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
