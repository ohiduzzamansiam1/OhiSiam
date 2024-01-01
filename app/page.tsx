import Image from "next/image";
import { getHomePage } from "./lib/apollo";

export const revalidate = 5;

async function Home() {
  const { homePages } = await getHomePage();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-8 lg:py-28 items-center">
      <Image
        src={homePages[0].profilePic.url}
        alt="Home"
        width={1000}
        height={1000}
        priority
        className="rounded-full shadow-2xl mx-auto w-56 md:w-72"
      />
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-center lg:items-start w-full">
          <h1 className="text-4xl text-gray-900 md:text-4xl lg:text-6xl md:mx-auto flex gap-1 font-extrabold lg:mr-auto text-center">
            Ohiduzzaman <span className="text-primary"> Siam</span>
          </h1>
          <p className="text-gra text-sm leading-relaxed pt-4 max-w-[18rem] text-center mt-2 lg:text-start">
            Happy to being a Full-Stack developer and a freelancer without a
            job. <span className="animate-ping">🙂</span>
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-lg mt-3 ">
          <h1 className="text-2xl text-gra font-bold py-2 w-full text-start md:text-center md:mb-2 lg:text-start">
            About me
          </h1>
          <div
            className="md:text-center lg:text-start md:text-base text-sm leading-[1.55rem] md:leading-[1.65rem] lg:leading-[1.65rem] tracking-tight text-gra"
            dangerouslySetInnerHTML={{ __html: homePages[0].aboutMe.html }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
