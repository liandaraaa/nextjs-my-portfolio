import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScreenshotGallery } from "@/components/screenshot-gallery"
import { Github, ExternalLink, Globe, Users, Star, Calendar, Code, Database, Zap, BarChart } from "lucide-react"

const screenshots = [
  {
    src: "/projects/taskflow/dashboard.png",
    alt: "TaskFlow Dashboard Overview",
    title: "Dashboard",
    aspectRatio: "desktop" as const,
  },
  {
    src: "/projects/taskflow/kanban-board.png",
    alt: "Interactive Kanban Board",
    title: "Kanban Board",
    aspectRatio: "desktop" as const,
  },
  {
    src: "/projects/taskflow/team-analytics.png",
    alt: "Team Analytics and Reports",
    title: "Team Analytics",
    aspectRatio: "desktop" as const,
  },
]

export default function TaskFlowProject() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Globe className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">TaskFlow</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          A comprehensive project management platform with real-time collaboration, advanced analytics, and intuitive
          kanban boards
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
            Live Demo
          </Button>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">500+</div>
            <div className="text-sm text-gray-600">Active Teams</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <BarChart className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">10K+</div>
            <div className="text-sm text-gray-600">Tasks Managed</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">4.9</div>
            <div className="text-sm text-gray-600">User Rating</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">8 Months</div>
            <div className="text-sm text-gray-600">Development</div>
          </CardContent>
        </Card>
      </div>

      {/* Screenshots Section with Lazy Loading */}
      <ScreenshotGallery screenshots={screenshots} title="Application Screenshots" columns={3} />

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Zap className="w-5 h-5 mr-2" />
                Real-time Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Live updates, comments, and notifications for seamless team collaboration</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Database className="w-5 h-5 mr-2" />
                Drag & Drop Kanban
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Intuitive kanban boards with customizable columns and task management</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <BarChart className="w-5 h-5 mr-2" />
                Advanced Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Comprehensive project insights, time tracking, and productivity metrics</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Users className="w-5 h-5 mr-2" />
                Team Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Role-based permissions, team invitations, and member management</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Calendar className="w-5 h-5 mr-2" />
                Timeline View
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Gantt charts and timeline visualization for project planning</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Code className="w-5 h-5 mr-2" />
                API Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Connect with popular tools like Slack, GitHub, and Google Workspace</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technical Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Prisma ORM</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Redis</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Real-time & Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Socket.io</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>Docker</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Page Load Speed</span>
                <Badge variant="outline">{"< 2s"}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Lighthouse Score</span>
                <Badge variant="outline">95/100</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Real-time Latency</span>
                <Badge variant="outline">{"< 100ms"}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Uptime</span>
                <Badge variant="outline">99.9%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Mobile Responsive</span>
                <Badge variant="outline">100%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Architecture Diagram */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-orange-600">System Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Frontend Layer</h3>
                <p className="text-sm text-gray-600">React/Next.js with real-time updates via Socket.io</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">API Layer</h3>
                <p className="text-sm text-gray-600">RESTful APIs with GraphQL for complex queries</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Data Layer</h3>
                <p className="text-sm text-gray-600">PostgreSQL with Redis caching for optimal performance</p>
              </div>
            </div>
          </div>
        </CardContent>
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
            Live Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
          >
            <Code className="w-5 h-5 mr-2" />
            API Documentation
          </Button>
        </div>
      </div>
    </div>
  )
}
