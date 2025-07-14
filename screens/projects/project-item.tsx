import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/lib/entities/project";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectItemProps {
  project: Project;
}

const TechnologyBadge = ({ technology }: { technology: string }) => (
  <Badge variant="outline" className="text-xs">
    {technology}
  </Badge>
);

const ProjectItem = ({ project }:ProjectItemProps): ReactNode => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <CardHeader>
      <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full rounded-lg"
          width={400}
          height={200}
        />
      </div>
      <CardTitle className="text-orange-600">{project.title}</CardTitle>
      <CardDescription>
      {project.description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="gap-2">
      {project.technologies.map((tech) => (
        <TechnologyBadge key={tech} technology={tech} />
      ))}
      </div>
      <div className="flex gap-8 mt-4">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 group-hover:bg-orange-500 group-hover:text-white transition-colors bg-transparent"
          onClick={() => window.open(project.githubUrl, "_blank")}
        >
          <Github className="w-4 h-4 mr-2" />
          Code
        </Button>
        <Link href={`/projects/${project.id}`} className="flex-1">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 group-hover:bg-orange-500 group-hover:text-white transition-colors bg-transparent"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
  )
}
export default ProjectItem;