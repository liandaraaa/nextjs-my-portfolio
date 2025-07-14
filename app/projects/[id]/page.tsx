import { projects } from "@/lib/dummies";
import ProjectDetailPage from "@/screens/projects/project-detail-page";

const ProjectDynamicDetailPage = (
  { params }: { params: { id: string } }
) => {

  const project = projects.find((project) => project.id === params.id);


  if(!project) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
   <ProjectDetailPage
    project={project}
   />
  );
};

export default ProjectDynamicDetailPage;