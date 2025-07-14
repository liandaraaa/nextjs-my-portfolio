import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Smartphone, Activity, Target, Calendar, Users, Award, Download, Star, Zap, Database, Code } from "lucide-react"
import { Project } from "@/lib/entities/project"
import Image from "next/image"
import { ScreenshotGallery } from "@/components/screenshot-gallery"

interface ProjectDetailPageProps {
  project: Project
}

const ProjectDetailPage = ({project}:ProjectDetailPageProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Image
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-full rounded-3xl"
            width={128}
            height={128}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
         {project.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Github className="w-5 h-5 mr-2" />
            View Source Code
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Download APK
          </Button>
        </div>
      </div>

      {/* Project Stats */}
      {
        project.appStatistics && project.appStatistics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {project.appStatistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  {stat.icon}
                  <div className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      }

      {/* Screenshots Section with Lazy Loading */}
      { project.appScreenshots && project.appScreenshots.length > 0 && (  
      <ScreenshotGallery screenshots={project.appScreenshots} title="App Screenshots" columns={3} />
        )
        }

      {/* Features Section */}
      {
        project.keyFeatures && project.keyFeatures.length > 0 && (  
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-600">
                      {feature.icon}
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      }

      {/* Technical Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Technology Stack</CardTitle>
          </CardHeader>
          {
            project.stacks && project.stacks.length > 0 && (  
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((stack, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {stack.title}: {stack.stacks.join(", ")}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            )
          }
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Architecture & Patterns</CardTitle>
          </CardHeader>
          {
            project.architecture && project.architecture.length > 0 && (  
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            )
          }
        </Card>
      </div>

      {/* Challenges & Solutions */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-orange-600">Challenges & Solutions</CardTitle>
        </CardHeader>
        {
          project.challenges && project.challenges.length > 0 && (  
            <CardContent>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-800 mb-2">{challenge.title}</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>Challenge:</strong> {challenge.chalenge}
                    </p>
                    <p className="text-gray-600">
                      <strong>Solution:</strong> {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          )
        }
      </Card>

      {/* Project Links */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore the Project</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Github className="w-5 h-5 mr-2" />
            GitHub Repository
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Google Play Store
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
          >
            <Download className="w-5 h-5 mr-2" />
            Download APK
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage;