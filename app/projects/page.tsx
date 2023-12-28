import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../lib/apollo";

export const revalidate = 30;

async function Project() {
  const { projects } = await getProjects();
  return (
    <>
      <div className="bg-white py-4">
        <h1 className="text-3xl border-b pb-4 font-extrabold w-fit mb-6 text-start text-slate-900">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <>
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                slug={project.slug}
                image={project.coverImage.url}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;