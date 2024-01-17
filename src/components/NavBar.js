import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";



const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block w-0 bg-yellow-400 absolute left-0 -bottom-1
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"} 
      `}
      >
        &nbsp;{" "}
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
  const router = useRouter();
const handleClick = () =>{
  toggle();
  router.push(href)
}


  return (
    <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[2px] inline-block w-0 bg-yellow-400 absolute left-0 -bottom-1
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"} 
      `}
      >
        &nbsp;{" "}
      </span>
    </Link>
  );
};

const NavBar = () => {
  
const { locale } = useRouter();

const homepage = {
  en: 'Home Page',
  vn: 'Trang Chủ'
}


const about = {
  en: 'About',
  vn: 'Thông Tin'
}
const service = {
  en: 'Service',
  vn: 'Dịch Vụ'
}

const posts = {
  en: 'Posts',
  vn: 'Bài Viết'
}

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

const handleClick = () =>{
  setIsOpen(!isOpen)
}

const router = useRouter();
const {locales, locale: activeLocale } = router;

const otherLocales = locales.filter(locale => locale !== activeLocale);


  return (
    <header className="w-full px-32 py-12 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    ">
<button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' :'-translate-y-0.5'}`}></span>
<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' :'translate-y-0.5'}`}></span>


</button>

<div className="w-full flex justify-between items-center lg:hidden ">


      <nav className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
     
        <CustomLink href="/" title={homepage[locale]} className="mr-4 " />
        <CustomLink href="/About" title={about[locale]} className="mx-4   " />
        <CustomLink href="/Projects" title={service[locale]} className="mx-4   " />
        <CustomLink href="/Articles" title={posts[locale]} className="ml-4   " />
      </nav>

      {/* <Logo /> */}
      <nav className="justify-center flex-wrap flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] ">
        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 "
          >
          <TwitterIcon />
        </motion.a>
          {otherLocales.map((locale,localeIndex) =>{
            const {pathname, query} = router;
            return (
              <Link  
              className="dark:text-primary bg-primary dark:bg-primaryDark px-3 py-2 rounded-xl uppercase text-sm  hover:bg-slate-700 active:bg-primary" key={localeIndex} href={{pathname, query}} locale={locale}>{activeLocale}</Link>
            )
          })}
        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light rounded-full"
        >
          <PinterestIcon />
        </motion.a>
        {/* <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3 "
        >
          <DribbbleIcon />
        </motion.a> */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          `}
        
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      </div>



      {
        isOpen ? 
        
      <motion.div
      initial={{scale: 0.5, opacity: 0.5,x: '-50%', y: '-50%'}}
      animate={{scale: 1,opacity: 1}}
      className="min-w-[60vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 
      ">


      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink href="/" title={homepage[locale]} className="" toggle={handleClick} />
        <CustomMobileLink href="/About" title={about[locale]} className="" toggle={handleClick} />
        <CustomMobileLink href="/Projects" title={service[locale]} className="" toggle={handleClick} />
        <CustomMobileLink href="/Articles" title={posts[locale]} className="" toggle={handleClick} />


      </nav>

      {/* <Logo /> */}
 
      <nav className="flex items-center justify-center flex-wrap mt-2">



        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3 sm:mx-1"
        >
          <TwitterIcon />
        </motion.a>
        {otherLocales.map((locale,localeIndex) =>{
            const {pathname, query} = router;
            return (
              <Link  
              className="dark:text-primary bg-primary dark:bg-primaryDark px-3 py-2 rounded-xl uppercase text-sm  hover:bg-slate-700 active:bg-primary" key={localeIndex} href={{pathname, query}} locale={locale}>{activeLocale}</Link>
            )
          })}
        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 sm:mx-1"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light rounded-full sm:mx-1"
        >
          <PinterestIcon />
        </motion.a>
        {/* <motion.a
          href="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3 sm:mx-1"
        >
          <DribbbleIcon />
        </motion.a> */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          `}
        
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark "} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      </motion.div>
        :null
      }
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
