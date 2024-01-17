import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
// import acticle1 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";


import { useRouter } from "next/router";




const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        width={2500}
        height={2000}
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {


  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 ,zIndex: 10}}
      transition={{ duration: 0.2 }}
      className="relative w-full p-4 py-6 my-6 rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col   dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
    >
      <MovingImg title={title} img={img} link={link} />
      <motion.span
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-star sm:pl-0 xs:text-sm">{date}</motion.span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {

  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light
    
    ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl
        dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
       dark:bg-light
      " />
      <Link
        href={link}
        target="_bank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};

const Articles = () => {

  const { locale } = useRouter();
  const map = {
    en: 'Article Overview',
    vn: 'Tổng Quan Bài Viết'
  }
  const title1 = {
    en: 'Hotel Overview',
    vn: 'Tổng Quan Về Khách Sạn'
  }
  const title2 = {
    en: 'Overview of Room Reception',
    vn: 'Tổng Quan Về Nhân Sự Khối Phòng'
  }


  const map1 = {
    en: 'A hotel is a business that provides temporary accommodation for tourists and people traveling on business. This is usually a place that provides services such as accommodation, food, entertainment, and other amenities to meet customer needs. Below is an overview of the aspects',
    vn: 'Khách sạn là một doanh nghiệp cung cấp dịch vụ lưu trú tạm thời cho du khách và những người đi công tác. Đây thường là nơi cung cấp các dịch vụ như chỗ ở, ẩm thực, giải trí, và các tiện ích khác để đáp ứng nhu cầu của khách hàng. Dưới đây là một tổng quan về các khía cạnh'
  }


  const map2 = {
    en: 'An overview of an organization`s human resources, including in the context of a hotel, includes many important aspects related to the people working within the organization. Below is an overview of key staffing factors',
    vn: 'Tổng quan về nhân sự của một tổ chức, kể cả trong ngữ cảnh của một khách sạn, bao gồm nhiều khía cạnh quan trọng liên quan đến con người làm việc trong tổ chức. Dưới đây là một cái nhìn tổng quan về các yếu tố chính về nhân sự'
  }
  const blog = {
    en: 'Certificate of Merit from the Provincial Police Agency',
    vn: 'Bằng Khen Từ Cơ Quan Cảnh Sát Tỉnh'
  }
  const blog1 = {
    en: 'Model Commercial Urban Area',
    vn: 'Khu Đô Thị Thương Mại Kiểu Mẫu'
  }
  const blog2 = {
    en: 'Organizing Trade Union Events',
    vn: 'Tổ Chức Sự Kiện Công Đoàn'
  }
  const blog3 = {
    en: 'The convoy of vehicles organizes the wedding reception and bridal procession',
    vn: 'Đoàn Xe Tổ Chức Tiệc Cưới Rước Dâu'
  }
  const blog4 = {
    en: 'Citywide Sports Events',
    vn: 'Sự Kiện Thể Thao Toàn Thành Phố'
  }
  const blog5 = {
    en: 'Bank Leadership Team Copy of Jobs and Human Resources Expenditure Events',
    vn: 'Đội Ngũ Lãnh Đạo Ngân Hàng Bản Việc Và Sự Kiện Chi Ấn Nhân Sự'
  }
  const aticles = {
    en: 'Featured Articles',
    vn: 'Bài Viết Nổi Bật'
  }

  

  return (
    <>
      <Head>
        <title>Khánh Linh Hotel | Aticles Page</title>
        <meta name="description atic" content="any description actic" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text={map[locale]}
 className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title={title1[locale]}
              summary={map1[locale]}
              time="9 min read"
              link="/"
              img='https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/61657714_2666579676703914_8545975279602892800_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=r5yi7pOFCqQAX-gc9QF&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCFjbQxsVQvI2OQMT0IcIOccfjwJh06kYZBKmrJc1Wpxw&oe=65CDAC02'
            />
            <FeaturedArticle
              title={title2[locale]}
              summary={map2[locale]}
              time="9 min read"
              link="/"
              img='https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/311983726_637566371203020_234616970452197318_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uda1FpIIkAYAX9yrb6Y&_nc_ht=scontent.fdad1-2.fna&oh=00_AfC2aaVyTlb7xyvDulYsWE0wZpEtUj2ZpV6FkUYB5qRrTA&oe=65AB7CB0'
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16">
          {aticles[locale]}
          </h2>
          <ul className="mb-24 flex flex-col">
            <Article
              title={blog[locale]}
              date="19-12,2022"
              link="https://www.facebook.com/photo/?fbid=690318265927830&set=a.598725065087151&locale=vi_VN"
              img='https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/320361474_1206368999981471_2323152961669009886_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=0FUkmB6ESNUAX-2XzUe&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCk5jM_U8OFT981ESN8FE3eOwLPbmVcrGYwweeNy9fBSw&oe=65ABAD10'
            />
            <Article
              title={blog1[locale]}
              date="19-3-2021"
              link="https://www.facebook.com/photo/?fbid=4378822708812927&set=a.598725065087151"
              img='https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/161265441_4378822712146260_759648536134685023_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=474j360M7tYAX_P1e7t&_nc_ht=scontent.fdad1-3.fna&oh=00_AfB8Ug2II1YohAAClQQU2pG6Fmc_DEt8cQns0YIQ1TvJKQ&oe=65CDA4CF'
            />
            <Article
              title={blog2[locale]}
              date="12-8-2020"
              link="https://www.facebook.com/photo/?fbid=3717579981603873&set=a.598725065087151"
              img='https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/116927991_3717579984937206_8522962130036993764_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=mre30l2ubl8AX-Mjv26&_nc_oc=AQnE0xbxE9cS40Imu9ny62dW_6okIMhsdg7eyAPyn_ST4fAnYrFQjW0Rksz8bAtQRRo&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBYykXkotBGH-9Z5z3q9Iv29pf9YyhEKEMCrYDLo069CQ&oe=65CDA694'
            />

            <Article
              title={blog3[locale]}
              date="22-3-2019"
              link="https://www.facebook.com/photo/?fbid=2545885785439971&set=a.598725065087151&locale=vi_VN"
              img='https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/54514502_2545885788773304_3315412262260310016_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=tD4KJ3lh_pIAX-KX1QG&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCBUX7lKTTIOBJlJLAIdA8taOPWRcoonecobyUfq1EDWw&oe=65CDC3A4'
            />

            <Article
              title={blog4[locale]}
              date="20-3-2019"
              link="https://www.facebook.com/photo/?fbid=2541456835882866&set=a.598725065087151"
            img='https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/54521125_2541456842549532_7541001723167375360_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=obhmX6BvIHcAX-YEMVu&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBz4jcBsywSeF4jKPao8HM9Y4B3qiOUVz0U8JqTIB6L3A&oe=65CD9BB3'
            />
            <Article
              title={blog5[locale]}
              date="15-8-2018"
              link="https://www.facebook.com/photo/?fbid=2201315999896953&set=a.598725065087151"
              img='https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/39165978_2201316009896952_4148846568650309632_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=HFSU2j0MgrEAX_l0VrI&_nc_ht=scontent.fdad1-2.fna&oh=00_AfDxXWEfQ4Wikp_Hfnp99hStJFFhz7lP-uh1Metafd2Kow&oe=65CD96ED'
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;


