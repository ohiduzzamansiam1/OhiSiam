import parse from "html-react-parser";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  slug: string;
}

function ProjectCard({ image, description, name, slug }: ProjectCardProps) {
  return (
    <div className="bg-white border-gray-200 rounded-xl shadow-xl">
      <Image
        src={image}
        alt={name}
        width={1000}
        height={1000}
        priority
        className="w-full max-h-[15rem] rounded-t-lg shadow-sm"
        quality={100}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl line-clamp-1 font-bold tracking-tight text-gra">
          {name}
        </h5>
        <div className="mb-3 font-normal line-clamp-3 text-gra">
          {parse(description)}
        </div>
        <Link
          href={`projects/${slug}/`}
          className="text-primary flex items-center text-sm rounded-lg w-fit font-medium"
        >
          Learn more
          <ArrowRight size={20} className="ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
