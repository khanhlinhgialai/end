import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "./Lilcon";
import { useRouter } from "next/router";



const Details = ({ position, company, companyLink, time, address, work }) => {

  const ref = useRef(null)

  const { scrollYProgress  } = useScroll({
    
    target: ref,
    offset: ["center end", "center center"]
  }
  );


  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] 
    mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <Lilcon  scrollYProgress={scrollYProgress}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:'spring'}}
      whileHover={{ scale: 1.1 }}
      
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize
            ml-1 rounded-lg  p-1
              hover:bg-light  
              hover:text-primary border-2 border-solid border-transparent hover:border-dark
              dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
            "
           
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} |{address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const { locale } = useRouter();

  const Experience = {
    en: 'Experience',
    vn: 'Kinh Nghiệm'
  }


  const Experience1 = {
    en: 'Wedding Services',
    vn: 'Dịch Vụ Tiệc Cưới'
  }
  const Experience2 = {
    en: 'Hotel Service',
    vn: 'Dịch Vụ Khách Sạn'
  }
  const Experience3 = {
    en: 'Event Services',
    vn: 'Tổ Chức Sự Kiện'
  }
  
  const position = {
    en: 'Wedding',
    vn: 'Lễ Cưới'
  }
  const position1 = {
    en: 'Room',
    vn: 'Phòng'
  }
  const position2 = {
    en: 'Lobby',
    vn: 'Sảnh'
  }
  const work = {
    en: 'Under the organization of Khanh Linh Wedding team, the wedding program is carefully scripted and coordinated, it will definitely be an unforgettable wedding for the bride & groom - a new page to preserve sweet moments.',
    vn: 'Dưới sự tổ chức của đội ngũ Khanh Linh Wedding, chương trình tiệc cưới được lên kịch bản và điều phối chỉn chu, chắc chắn sẽ là một đám cưới khó quên cho cô dâu & chú rể - một trang mới lưu giữ những khoảnh khắc ngọt ngào của các cặp đôi..'
  }
  
  const work1 = {
    en: 'Offering a peaceful space and luxurious amenities, creating a perfect vacation experience for travelers looking to enjoy relaxation and spiritual renewal.',
    vn: 'Mang đến không gian yên bình và tiện nghi sang trọng, tạo ra một trải nghiệm kỳ nghỉ hoàn hảo cho du khách muốn tận hưởng sự thư giãn và làm mới tinh thần.'
  }
  
  const work2 = {
    en: 'With luxurious space, modern amenities, and professional staff, we are committed to bringing a classy space experience to customers.',
    vn: 'Với không gian sang trọng, tiện nghi hiện đại, và đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết mang đến trải nghiệm không gian đẳng cấp cho khách hàng.'
  }
  
  


  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });




  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">{Experience[locale]}</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px]
          dark:bg-primaryDark dark:shadow-3xl

 dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]

          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={position[locale]}
            company={Experience1[locale]}
            companyLink="https://www.facebook.com/media/set/?set=a.598725065087151&type=3"
            time= {new Date().getFullYear()} 
            address="232 Nguyễn Tất Thành, Pleiku, Vietnam"
            work={work[locale]}
          />
          <Details
            position={position1[locale]}
            company={Experience2[locale]}
            companyLink="https://www.facebook.com/media/set/?set=a.1390318767663351&type=3"
            time= {new Date().getFullYear()} 
            address="232 Nguyễn Tất Thành, Pleiku, Vietnam"
            work={work1[locale]}
          />
          <Details
            position={position2[locale]}
            company={Experience3[locale]}
            companyLink="https://www.facebook.com/media/set/?set=a.1662296907132201&type=3"
            time= {new Date().getFullYear()} 
            address="232 Nguyễn Tất Thành, Pleiku, Vietnam"
            work={work2[locale]}
          />
         
        </ul>
      </div>
    </div>
  );
};

export default Experience;
