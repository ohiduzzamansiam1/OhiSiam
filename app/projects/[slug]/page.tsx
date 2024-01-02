import BackButton from "@/app/components/BackButton";
import { getProjectBySlug } from "@/app/lib/apollo";
import Image from "next/image";
import Link from "next/link";

async function ProjectPage({ params }: { params: { slug: string } }) {
  const { project } = await getProjectBySlug(params.slug);
  return (
    <>
      <div className="flex flex-col w-full pb-6">
        <BackButton />
        <Image
          src={project.coverImage.url}
          alt={project.name}
          width={1000}
          height={1000}
          className="w-full object-cover shadow-lg rounded-lg bg-gray-200"
        />
        <h1 className="mt-6 text-2xl font-bold text-gra">{project.name}</h1>
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            className="text-blue-500 underline font-medium tracking-wide mt-3 w-fit"
          >
            Click here to visit
          </Link>
        )}
        <div
          className="leading-[1.8rem] mt-3 text-lg text-justify"
          dangerouslySetInnerHTML={{ __html: project.description.html }}
        />
      </div>
    </>
  );
}

export default ProjectPage;
