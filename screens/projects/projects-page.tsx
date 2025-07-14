import { Button } from "@/components/ui/button";
import ProjectItem from "./project-item";
import { projects } from "@/lib/dummies";
import { Github } from "lucide-react";

const ProjectsPage = () => {
  return(
    <section id="projects" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 px-8"
              onClick={() => window.open("https://github.com/liandaraaa", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
        </section>
  )
}

export default ProjectsPage;