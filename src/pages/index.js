import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/khanhlinh.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/abc.png";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

export default function Home() {
  //  const {t} = useTranslation('common');

  const { locale } = useRouter();

  const head = {
    en: "Welcome to Khanh Linh Hotel",
    vn: "Chào mừng bạn đến với Khách sạn Khánh Linh",
  };
  const profile = {
    en: "Profile",
    vn: "Trang",
  };
  const welcome = {
    en: "Located in the middle of the Central Highlands, Hotel Khanh Linh is an ideal destination for those who want to stay away from the noise of the city. The hotel is nestled among wonderful natural beauty and fresh air, only 30 minutes from the city center. driving minutes.",
    vn: "Nằm giữa tây nguyên, Hotel Khánh Linh là điểm đến lý tưởng cho những người muốn tránh xa sự ồn ào của thành phố. Khách sạn nằm ẩn mình giữa cảnh đẹp thiên nhiên tuyệt vời và không khí trong lành, chỉ cách trung tâm thành phố 30 phút lái xe.",
  };
  const email = {
    en: "Email",
    vn: "Hộp Thư",
  };

  return (
    <>
      <Head>
        <title>Khánh Linh Hotel</title>
        <meta name="description" content="KhanhLinh | Home" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                alt="CodeBucks"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={head[locale]}
                className="!text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {welcome[locale]}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
              md:p-2 md:px-4 md:text-base
              dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
              "
                  download={true}
                >
                  {profile[locale]}
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:sales@hotelkhanhlinh.vn"
                  target={"_blank"}
                  className="ml-4 capitalize text-dark underline
              hover:bg-light px-6 rounded-lg text-lg font-semibold
              hover:text-dark border-2 border-solid border-transparent hover:border-dark
              dark:text-light  dark:bg-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
              md:text-base
              dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
              "
                >
                  {email[locale]}
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-5 bottom-5 inline-block w-52 md:hidden">
          <Image
            src={lightBulb}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            alt="codebucks"
            className={"w-full h-auto"}
          />
        </div>
      </main>
    </>
  );
}
