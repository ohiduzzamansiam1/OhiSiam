import Image from "next/image";
import { getHomePage } from "./lib/apollo";

export const revalidate = 30;

async function Home() {
  const { homePages } = await getHomePage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8 md:py-28 items-center">
      <Image
        src={homePages[0].profilePic.url}
        alt="Home"
        width={1000}
        height={1000}
        priority
        className="rounded-full shadow-xl mx-auto w-52 md:w-72"
      />
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-center md:items-start w-full">
          <h1 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl flex gap-1 font-extrabold">
            Ohiduzzaman <span className="text-primary">Siam</span>
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed pt-4 max-w-[18rem] text-center md:text-start mt-2">
            Happy to being a Full-Stack developer and a freelancer without a
            job. <span className="animate-ping">🙂</span>
          </p>
        </div>
        <h1 className="text-3xl border-b font-extrabold py-4 my-2 w-full text-center md:text-start text-slate-900">
          About me
        </h1>
        <div
          className="bg-gray-50 sm:text-center md:text-start md:text-base p-4 rounded-lg shadow-lg mt-3 text-sm leading-relaxed tracking-tight text-gray-500"
          dangerouslySetInnerHTML={{ __html: homePages[0].aboutMe.html }}
        />
      </div>
    </div>
  );
}

export default Home;
