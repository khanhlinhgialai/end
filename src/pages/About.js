import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/hotel.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

import { useRouter } from "next/router";

const FramerImage = motion(Image);

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 5000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const { locale } = useRouter();

  const About = {
    en: "Business Information",
    vn: "Thông Tin Doanh Nghiệp",
  };

  const Content = {
    en: "Featuring a sun terrace and barbecue facilities, Khanh Linh Hotel located in Pleiku city, Gia Lai province and away from Kom Tum city 42 km. Guests can dine at the on-site restaurant capsules or sip a drink at the bar",
    vn: " Với sân hiên phơi nắng và tiện nghi tiệc nướng, Khanh Linh Hotel nằm ở thành phố Pleiku, tỉnh Gia Lai và cách thành phố Kom Tum 42 km. Du khách có thể dùng bữa tại nhà hàng ngay trong khuôn viên hoặc nhâm nhi đồ uống ở quầy bar",
  };

  const Content1 = {
    en: "Every room at this hotel is air conditioned and is equipped with a TV Local as well as international TV channels. Some rooms include includes a seating area for guests to relax after a busy day busy. The room also has a kettle. All rooms are included private bathroom with bathtub. Bathrobes, slippers and toiletries Complimentary amenities are also provided in the room.",
    vn: " Mỗi phòng tại khách sạn này được trang bị máy lạnh và TV với các kênh truyền hình địa phương cũng như quốc tế. Một số phòng bao gồm khu vực tiếp khách để du khách thư giãn sau một ngày bận rộn. Phòng cũng có ấm đun nước. Tất cả các phòng còn đi kèm  phòng tắm riêng với bồn tắm. Áo choàng tắm, dép và đồ vệ sinh cá  nhân miễn phí cũng được cung cấp trong phòng.",
  };

  const Content2 = {
    en: "The hotel also has a gift shop. Communicative staff Available in 2 languages, the 24-hour front desk can assist guests Services such as free shuttle, ticket booking, tour arrangement and foreign currency exchange. The hotel has bicycles for guests to rent. Walk Long distance is a very popular activity in this area. Guest The hotel offers car rental services. Pleiku Airport is far from Khanh Linh Hotel 7 km.",
    vn: "Khách sạn còn có cửa hàng quà tặng. Đội ngũ nhân viên giao tiếp được bằng 2 ngôn ngữ tại lễ tân 24 giờ có thể trợ giúp khách vớicác dịch vụ như đưa đón miễn phí, đặt vé, sắp xếp tour du lịch và thu đổi ngoại tệ. Khách sạn có xe đạp cho khách thuê. Đi bộ đường dài là hoạt động rất được ưa thích tại khu vực này. Khách sạn cung cấp dịch vụ cho thuê xe hơi. Sân bay Pleiku cách Khánh Linh Hotel 7 km.",
  };

  const Clinet = {
    en: "Clinet",
    vn: "Khách Hàng",
  };

  const Ex = {
    en: "Experience",
    vn: "Kinh Nghiệm",
  };

  const Member = {
    en: "Member",
    vn: "Nhân Sự",
  };

  return (
    <>
      <Head>
        <title>Khánh Linh Hotel | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={About[locale]}
            className="mb-16 !text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl sm:!text-3xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {" "}
                Hotel KHánh Linh
              </h2>
              <p className="font-medium">{Content[locale]}</p>
              <p className="font-medium">{Content1[locale]}</p>
              <p className="font-medium">{Content2[locale]}</p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
            xl:col-span-4 md:order-1 md:col-span-8
            "
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
              dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
              "
              />
              <FramerImage
                priority
                width={2500}
                height={2000}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.18169-9/13718594_1316337328394829_3754418211615195294_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7a1959&_nc_ohc=dBXA6VteTnIAX8ugESs&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAQCXHbXDSNXLrCvvHnv0yvRaxHnNf8IgZLqlGsOEJHew&oe=65CED500"
                alt="code"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm
                "
                >
                  {Ex[locale]}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={250} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  md:text-lg sm:text-base
                xs:text-sm"
                >
                  {Member[locale]}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={10450} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  md:text-lg sm:text-base
                xs:text-sm"
                >
                  {Clinet[locale]}
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
