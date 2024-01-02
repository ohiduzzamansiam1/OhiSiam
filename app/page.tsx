import Image from "next/image";
import { getHomePage } from "./lib/apollo";
import Project from "./projects/page";

export const revalidate = 5;

async function Home() {
  const { homePages } = await getHomePage();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 py-8 items-center">
        <Image
          src={homePages[0].profilePic.url}
          alt="Home"
          width={1000}
          height={1000}
          priority
          className="rounded-full shadow-2xl mx-auto w-56 h-56 md:w-72 md:h-72 object-cover"
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-4xl text-gray-900 md:text-4xl lg:text-6xl md:mx-auto flex gap-1 font-extrabold lg:mx-0">
              Ohiduzzaman <span className="text-primary"> Siam</span>
            </h1>
            <p className="text-gra text-sm leading-relaxed pt-4 max-w-[18rem] text-center mt-2">
              Happy to being a Full-Stack developer and a freelancer without a
              job. <span className="animate-ping">🙂</span>
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg mt-3 ">
            <h1 className="text-2xl text-gra font-bold py-2 w-full text-center md:mb-2">
              About me
            </h1>
            <div
              className="text-center md:text-base text-sm leading-[1.55rem] md:leading-[1.65rem] lg:leading-[1.65rem] tracking-tight text-gra md:max-w-xl"
              dangerouslySetInnerHTML={{ __html: homePages[0].aboutMe.html }}
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Project />
      </div>
    </>
  );
}

export default Home;
