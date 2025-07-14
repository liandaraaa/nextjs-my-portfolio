import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Globe, Zap, Smartphone, Palette, Search } from "lucide-react"

export default function PortfolioWebsiteProject() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Code className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Portfolio Website</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Modern, responsive portfolio website built with Next.js, featuring smooth animations and optimized performance
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
            Live Website
          </Button>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Website Views</h2>
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/portfolio-website/desktop-hero.png"
              alt="Desktop Hero Section"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium">Desktop Hero Section</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/projects/portfolio-website/projects-section.png"
                alt="Projects Showcase"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-medium">Projects Section</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/projects/portfolio-website/mobile-responsive.png"
                alt="Mobile Responsive Design"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-medium">Mobile Responsive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Website Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Smartphone className="w-5 h-5 mr-2" />
                Responsive Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Fully responsive layout that works perfectly on all devices</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Zap className="w-5 h-5 mr-2" />
                Fast Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Optimized for speed with Next.js and modern web technologies</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Palette className="w-5 h-5 mr-2" />
                Modern Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Clean, modern design with smooth animations and transitions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Search className="w-5 h-5 mr-2" />
                SEO Optimized
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Search engine optimized with proper meta tags and structure</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Code className="w-5 h-5 mr-2" />
                Type Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Built with TypeScript for better code quality and maintainability</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Globe className="w-5 h-5 mr-2" />
                Easy Deployment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">One-click deployment to Vercel with automatic CI/CD</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend Framework</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js 14</Badge>
                  <Badge>React 18</Badge>
                  <Badge>TypeScript</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Styling & UI</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Tailwind CSS</Badge>
                  <Badge>shadcn/ui</Badge>
                  <Badge>Lucide Icons</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Deployment & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Vercel</Badge>
                  <Badge>ESLint</Badge>
                  <Badge>Prettier</Badge>
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
                <span>Lighthouse Score</span>
                <Badge variant="outline">100/100</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>First Contentful Paint</span>
                <Badge variant="outline">{"< 1s"}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Largest Contentful Paint</span>
                <Badge variant="outline">{"< 1.2s"}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Cumulative Layout Shift</span>
                <Badge variant="outline">0</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Time to Interactive</span>
                <Badge variant="outline">{"< 1.5s"}</Badge>
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
            Live Website
          </Button>
        </div>
      </div>
    </div>
  )
}
