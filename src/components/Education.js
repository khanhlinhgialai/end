import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "./Lilcon";

import { useRouter } from "next/router";

const Details = ({ type, time,place, info}) => {
  

  const ref = useRef(null)

  const { scrollYProgress  } = useScroll({
    
    target: ref,
    offset: ["center end", "center center"]
  }
  );

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <Lilcon scrollYProgress={scrollYProgress}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:'spring'}}
      whileHover={{ scale: 1.1 }}
      >
        <h3 className="capitalize font-bold text-2xl text-primary dark:text-primaryDark sm:text-xl xs:text-lg  dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
          {type}
       
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} |{place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {


  const { locale } = useRouter();

  const Mission = {
    en: 'Vision Mission',
    vn: 'Tầm Nhìn Sứ Mệnh'
  }


  const type = {
    en: 'Help employees know the purpose of existence',
    vn: 'Giúp nhân viên biết được mục đích tồn tại'
  } 
  const type1 = {
    en: 'Strict organization',
    vn: 'Tổ chức chặt chẽ'
  } 
  const type2 = {
    en: 'Take action, listen and make amends',
    vn: 'Ban hành, lắng nghe và sửa đổi '
  }


  const info = {
    en: 'Mission lets employees know the purpose of their own existence and that of the organization. Mission is like a declaration, which contains the values, meanings, and development goals that the business will bring to customers, community, and society. Mission also contributes to fixing goals and how to approach them in the future, while also orienting leaders on what activities to do next.',
    vn: 'Sứ mệnh cho đội ngũ nhân viên biết được mục đích tồn tại của bản thân và của tổ chức. Sứ mệnh được ví như một bản tuyên ngôn, trong đó có những giá trị, ý nghĩa, mục đích phát triển mà doanh nghiệp sẽ mang lại cho khách hàng, cộng đồng, xã hội. Sứ mệnh cũng góp phần cố định mục tiêu và cách thức tiếp cận chúng trong tương lai, đồng thời định hướng cho nhà lãnh đạo những hoạt động cần làm tiếp theo. '
  }
  const info1 = {
    en: 'Vision and mission allow leaders to effectively allocate resources within the business, developing each department according to different tasks and expertise. Thanks to that, it constitutes a tight, interconnected and professional organization.',
    vn: 'Tầm nhìn và sứ mệnh cho phép các nhà lãnh đạo phân bổ hiệu quả nguồn lực trong doanh nghiệp, phát triển từng phòng ban theo nhiệm vụ, chuyên môn khác nhau. Nhờ đó cấu thành một tổ chức chặt chẽ, liên kết và chuyên nghiệp. '
  } 
   const info2 = {
    en: 'Once there is consensus from company members, the business should issue information to everyone. It can be through the media, newspapers,... so that they can listen and understand what the business wants to convey.',
    vn: 'Khi đã có sự đồng thuận từ những thành viên trong công ty, doanh nghiệp nên ban hành thông tin với tất cả mọi người. Có thể thông qua truyền thông, báo chí,... để họ đều có thể lắng nghe, hiểu được những gì mà doanh nghiệp muốn truyền tải. '
  }
  const place = {
    en: 'Corporate Vision and Culture',
    vn: 'Tầm nhìn và Văn hóa doanh nghiệp '
  }
  const place1 = {
    en: 'Mission and Corporate Culture',
    vn: 'Sứ mệnh và Văn hóa doanh Nghiệp'
  }
  const place2 = {
    en: 'Vision, Mission and Culture as a system',
    vn: 'Tầm nhìn, Sứ mệnh và Văn hóa như một hệ thống '
  }


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">{Mission[locale]}</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type={type[locale]}
            time="1980-2012"
            place={place[locale]}
            info={info[locale]}
          />
          <Details
            type={type1[locale]}
            time="2012-2020"
            place={place1[locale]}
            info={info1[locale]}
          />
           <Details
            type={type2[locale]}
            time="2020-2024"
            place={place2[locale]}
            info={info2[locale]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
