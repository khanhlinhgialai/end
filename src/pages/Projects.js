import AnimatedText from "@/components/AnimatedText";
import { Booking } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
// import project from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

const FramerImage = motion(Image);
const MotionLink = motion(Link);



const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  const { locale } = useRouter();
 
  const service = {
    en: 'View News',
    vn: 'Xem Tin'
  }

  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl
     rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     
     ">
<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]   dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
"/>
      <Link
        href={link}
        target="_bank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          width={2500}
          height={2000}
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <motion.span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base"  whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.2 }}>{type}</motion.span>
        <Link
          href={link}
          target="_bank"
          className="hover:underline underline-offset-2
          ml-4 rounded-lg  p-2 px-6 text-lg font-semibold
          hover:bg-light  
          hover:text-dark border-2 border-solid border-transparent hover:border-dark  
          "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light dark:hover:text-dark sm:text-sm">{title}</h2>
        </Link>
        <motion.p  className="my-2 font-medium text-dark dark:text-light sm:text-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        >{summary}</motion.p>
        <div className="mt-2 flex items-center">
          <MotionLink href={github} target="_bank" className="w-10 "
               whileHover={{ scale: 1.4 }}
               transition={{ duration: 0.2 }}
          
          >
            <Booking />
          </MotionLink>
          <MotionLink
            href={link}
            target="_bank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            
            hover:bg-light  
            hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light
            sm:px-4 sm:text-base
            "
            whileHover={{ 
              scale: 1.1,
              // backgroundColor: [ "#121212","rgba(255,255,255, 0.9)","rgba(131,58,180,1)","rgba(30,139,195,1)","rgba(252,176,69,1)"],
              transition: {duration:1, repeat: Infinity}
             }}
          >
            {service[locale]}
          </MotionLink>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  const { locale } = useRouter();
 
  const service = {
    en: 'View News',
    vn: 'Xem Tin'
  }
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark   dark:border-light xs:p-4
    ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
rounded-br-3xl  dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
"/>
      <Link
        href={link}
        target="_bank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          width={2500}
          height={2000}
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <motion.span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base"
         whileHover={{ scale: 1.1 }}
         transition={{ duration: 0.2 }}
        >{type}</motion.span>
        <MotionLink
          href={link}
          target="_bank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold
              ml-4 rounded-lg  p-2 px-6 
              hover:bg-light  
            hover:text-dark border-2 border-solid border-transparent hover:border-dark
            md:text-base 
          ">{title}</h2>
        </MotionLink>
        <div className="w-full mt-2 flex items-center justify-between">
        <MotionLink
            href={link}
            target="_bank"
            className="ml-4  text-lg font-semibold underline
             rounded-lg  p-2 px-6 
            hover:bg-light  
            hover:text-dark border-2 border-solid border-transparent hover:border-dark
            md:text-base
            "
            whileHover={{ 
              scale: 1.1,
              transition: {duration:1, repeat: Infinity}
             }}
          >
            {service[locale]}
          </MotionLink>
          <MotionLink href={github} target="_bank" className="w-8 md:w-6"
             whileHover={{ scale: 1.4 }}
             transition={{ duration: 0.2 }}
          >
            <Booking />
          </MotionLink>
        
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { locale } = useRouter();



  const service = {
    en: 'Service Image',
    vn: 'Hình Ảnh Dịch Vụ'
  }

  const title = {
    en: 'Hotel Khánh Linh',
    vn: 'Khách Sạn Khánh Linh'
  }
  const app = {
    en: 'Facade',
    vn: 'Mặt Tiền'
  }
  const summary = {
    en: 'The 8-storey building with panoramic views of the city landscape is a special feature of Hotel Khanh Linh',
    vn: 'Tòa nhà 8 Tầng với tầm nhìn bao quát về phong cảnh thành phố là điểm đặc biệt của Hotel Khánh Linh'
  }
 
  const hall = {
    en: 'Phu Quy Wedding Hall',
    vn: 'Sảnh Cưới Phú Quý'
  }
 
  const hall1 = {
    en: 'Song Hy Wedding Hall',
    vn: 'Sảnh Cưới Song Hỷ'
  }


  const type = { 
    en: 'View',
    vn: 'Cảnh Quan'
  }

  const type1 = { 
    en: 'View',
    vn: 'Không Gian'
  }

  const lobby = { 
    en: 'Lobby',
    vn: 'Sảnh Chính'
  }

  const room = { 
    en: 'The lobby is the center of every experience when customers enter the hotel. This is the first space that customers touch and is often the first impression of the importance and professionalism of the hotel.',
    vn: 'Sảnh tiếp khách là trung tâm của mọi trải nghiệm khi khách hàng bước vào khách sạn. Đây là không gian đầu tiên mà khách hàng chạm vào và thường là ấn tượng đầu tiên về sự quan trọng và chuyên nghiệp của khách sạn. '
  }

  const room1 = { 
    en: 'Room Vip',
    vn: 'Phòng Vip'
  }
  const room2 = { 
    en: 'Room Single',
    vn: 'Phòng Đơn'
  }


  return (
    <>
      <Head>
        <title>Khánh Linh Hotel | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={service[locale]}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12 ">
              <FeaturedProject
                title={title[locale]}
              img='https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/324144812_1605140379960839_9026001399821300240_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=j-dBU2zhqs4AX85PS6W&_nc_ht=scontent.fdad1-4.fna&oh=00_AfD3WEeAZMkrJwt3aP6Z3i-WxMhwWma7tpFOWSNZtJMLUA&oe=65ABB527'
                summary={summary[locale]}
                github="https://www.booking.com/hotel/vn/khanh-linh-play-ku.vi.html?activeTab=main"
                link="https://www.facebook.com/hotelkhanhlinhvn/?locale=vi_VN"
                type={app[locale]}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
            <Project
                title={hall[locale]}
                img='https://scontent.fdad1-2.fna.fbcdn.net/v/t31.18172-8/14468504_1390296634332231_6913848855148976933_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=KgSrG8TAu1UAX_sj0WS&_nc_ht=scontent.fdad1-2.fna&oh=00_AfD1U5ONkOZv9R8-68npyGT7kc6r5FU17bBlr9hFmoBhEg&oe=65C3580E'
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                github="/"
                link="/"
                type={type1[locale]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
             <Project
                title={hall1[locale]}
                img='https://scontent.fdad2-1.fna.fbcdn.net/v/t31.18172-8/14556532_1390293984332496_8685787344490215123_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=4dc865&_nc_ohc=KlNx2PwUcQcAX87aq6z&_nc_ht=scontent.fdad2-1.fna&oh=00_AfDOxWUzJIRXiyimyYb2-znNmBBNFPBW_qnDItkl1zbZ_g&oe=65C37325'
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                github="/"
                link="/"
                type={type[locale]}
              /></div>
            <div className="col-span-12">
              <FeaturedProject
                title={lobby[locale]}
              img='https://scontent.fdad1-4.fna.fbcdn.net/v/t31.18172-8/14500557_1390312684330626_8028390387342879057_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_ohc=ZdB6g8WvMMgAX_sgrBt&_nc_oc=AQkhKy0qQt-9oB11G1NT5Xp4EedKHn35qPG7fFaIJEAYJfOWzRxncUQEsmfr2BTncak&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCnnXZVtQvJIqubrhFZxbwOKpmKHietCdYlGYAe78rLFQ&oe=65C38393'
                summary={room[locale]}
                github="/"
                link="/"
                type={type[locale]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">

            <Project
                title={room1[locale]}
              img='https://scontent.fdad1-4.fna.fbcdn.net/v/t31.18172-8/14524513_1390327167662511_6504577979536722170_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_ohc=wwFMO1qhpZwAX-BA22b&_nc_ht=scontent.fdad1-4.fna&oh=00_AfAiom3A_BuTY6l3QFFoJ3syHS6X-m8Mldz-oqdbcR2QbQ&oe=65C3820F'
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                github="https://www.facebook.com/media/set/?set=a.1390307820997779&type=3&locale=vi_VN"
                link="https://www.booking.com/hotel/vn/khanh-linh-play-ku.vi.html?activeTab=photosGallery"
                type={type[locale]}
              />

            </div>
            <div className="col-span-6 sm:col-span-12">
            <Project
                title={room2[locale]}
              img='https://scontent.fdad1-1.fna.fbcdn.net/v/t31.18172-8/14567482_1390328370995724_5747976926283288715_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=Nlx64OFg_QIAX9VQQHv&_nc_ht=scontent.fdad1-1.fna&oh=00_AfA7P0Fz0n4q50Idt0r4C3WBqduAcWE0ql9D_3TRw4ek0w&oe=65C35721'
                summary="  A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                github="https://www.facebook.com/media/set/?set=a.1390307820997779&type=3&locale=vi_VN"
                link="https://www.facebook.com/media/set/?set=a.1390307820997779&type=3&locale=vi_VN"
                type={type[locale]}
              />

            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
