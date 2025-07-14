import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScreenshotGallery } from "@/components/screenshot-gallery"
import { Github, ExternalLink, Code, Users, Star, Download, Play, BookOpen, Award } from "lucide-react"

const screenshots = [
  {
    src: "/projects/learnhub/course-catalog.png",
    alt: "Course Catalog",
    title: "Course Catalog",
    aspectRatio: "mobile" as const,
  },
  {
    src: "/projects/learnhub/video-player.png",
    alt: "Video Learning Interface",
    title: "Video Player",
    aspectRatio: "mobile" as const,
  },
  {
    src: "/projects/learnhub/quiz-interface.png",
    alt: "Interactive Quiz",
    title: "Quiz Interface",
    aspectRatio: "mobile" as const,
  },
  {
    src: "/projects/learnhub/progress-tracking.png",
    alt: "Progress Dashboard",
    title: "Progress Tracking",
    aspectRatio: "mobile" as const,
  },
]

export default function LearnHubProject() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Code className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">LearnHub</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Cross-platform e-learning mobile application with video streaming, offline downloads, and interactive learning
          features
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
            Expo Demo
          </Button>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Download className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">25K+</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">8K+</div>
            <div className="text-sm text-gray-600">Active Learners</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">150+</div>
            <div className="text-sm text-gray-600">Courses</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">2K+</div>
            <div className="text-sm text-gray-600">Certificates</div>
          </CardContent>
        </Card>
      </div>

      {/* Screenshots Section with Lazy Loading */}
      <ScreenshotGallery screenshots={screenshots} title="App Screenshots" columns={4} />

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Play className="w-5 h-5 mr-2" />
                Video Streaming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">High-quality video streaming with adaptive bitrate and subtitle support</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Download className="w-5 h-5 mr-2" />
                Offline Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Download courses for offline viewing with smart storage management</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <BookOpen className="w-5 h-5 mr-2" />
                Interactive Quizzes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Engaging quizzes and assessments with instant feedback and explanations</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Award className="w-5 h-5 mr-2" />
                Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Digital certificates upon course completion with blockchain verification</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Users className="w-5 h-5 mr-2" />
                Discussion Forums
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Community-driven discussions and peer-to-peer learning support</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Star className="w-5 h-5 mr-2" />
                Progress Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Detailed learning analytics and personalized progress insights</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Mobile Framework</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React Native</Badge>
                  <Badge>Expo</Badge>
                  <Badge>TypeScript</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Redis</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Media & Storage</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS S3</Badge>
                  <Badge>CloudFront CDN</Badge>
                  <Badge>FFmpeg</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Key Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Cross-platform compatibility (iOS & Android)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Offline-first architecture with sync capabilities</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Adaptive video streaming (240p to 1080p)</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Real-time progress synchronization</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Push notifications for course updates</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

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
            Expo Snack Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
          >
            <Play className="w-5 h-5 mr-2" />
            Video Demo
          </Button>
        </div>
      </div>
    </div>
  )
}
