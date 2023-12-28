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
    <div className="bg-white border-gray-200 rounded-lg shadow-xl">
      <Image
        src={image}
        alt={name}
        width={1000}
        height={1000}
        priority
        className="w-full shadow-sm max-h-[13rem] object-cover"
        quality={100}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
          {description}
        </p>
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
