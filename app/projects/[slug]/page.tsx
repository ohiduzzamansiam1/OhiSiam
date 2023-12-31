import BackButton from "@/app/components/BackButton";
import { getProjectBySlug } from "@/app/lib/apollo";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function ProjectPage({ params }: { params: { slug: string } }) {
  const { project } = await getProjectBySlug(params.slug);
  console.log(project.description.html);
  return (
    <>
      <div className="flex flex-col w-full pb-6">
        <BackButton />
        <Image
          src={project.coverImage.url}
          alt={project.name}
          width={1000}
          height={1000}
          className="w-full sm:h-[30rem] object-cover border-2 border-primary shadow-lg rounded-lg bg-gray-200"
        />
        <h1 className="my-6 text-xl font-bold text-gra">{project.name}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: project.description.html }}
          className="text-gra"
        />
        <Link
          href={project.url}
          target="_blank"
          className="flex gap-1 text-blue-500 underline font-bold tracking-wide mt-3 w-fit"
        >
          <span>Visit </span>
          <MoveUpRight size={15} />
        </Link>
      </div>
    </>
  );
}

export default ProjectPage;
