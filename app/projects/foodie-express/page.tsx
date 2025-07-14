import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScreenshotGallery } from "@/components/screenshot-gallery"
import { Github, ExternalLink, Smartphone, Users, Star, Download, Calendar, Code, Database, Zap } from "lucide-react"

const screenshots = [
  {
    src: "/projects/foodie-express/home-screen.png",
    alt: "FoodieExpress Home Screen",
    title: "Home Screen",
    aspectRatio: "mobile" as const,
  },
  {
    src: "/projects/foodie-express/restaurant-list.png",
    alt: "Restaurant List View",
    title: "Restaurant List",
    aspectRatio: "mobile" as const,
  },
  {
    src: "/projects/foodie-express/order-tracking.png",
    alt: "Real-time Order Tracking",
    title: "Order Tracking",
    aspectRatio: "mobile" as const,
  },
]

export default function FoodieExpressProject() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Smartphone className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">FoodieExpress</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          A comprehensive food delivery Android application with real-time tracking, seamless payments, and intuitive
          user experience
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Download className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">10K+</div>
            <div className="text-sm text-gray-600">Downloads</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Star className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">4.8</div>
            <div className="text-sm text-gray-600">Rating</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">5K+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">6 Months</div>
            <div className="text-sm text-gray-600">Development</div>
          </CardContent>
        </Card>
      </div>

      {/* Screenshots Section with Lazy Loading */}
      <ScreenshotGallery screenshots={screenshots} title="App Screenshots" columns={3} />

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Zap className="w-5 h-5 mr-2" />
                Real-time Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Live order tracking with GPS integration and estimated delivery times</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Users className="w-5 h-5 mr-2" />
                User Authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Secure login with email, phone, and social media integration</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Database className="w-5 h-5 mr-2" />
                Order Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Complete order history, favorites, and repeat order functionality</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Star className="w-5 h-5 mr-2" />
                Reviews & Ratings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Restaurant and food item ratings with photo reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Code className="w-5 h-5 mr-2" />
                Payment Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Multiple payment options including cards, wallets, and cash on delivery</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Smartphone className="w-5 h-5 mr-2" />
                Push Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Real-time updates on order status, offers, and promotions</p>
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
                  <Badge>Kotlin</Badge>
                  <Badge>Jetpack Compose</Badge>
                  <Badge>Material Design 3</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Firebase Firestore</Badge>
                  <Badge>Firebase Auth</Badge>
                  <Badge>Room Database</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">APIs & Services</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Google Maps API</Badge>
                  <Badge>Stripe Payment</Badge>
                  <Badge>FCM</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Architecture & Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>MVVM Architecture Pattern</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Repository Pattern for Data Layer</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Dependency Injection with Hilt</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Reactive Programming with Flow</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span>Clean Architecture Principles</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Challenges & Solutions */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-orange-600">Challenges & Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Real-time Order Tracking</h4>
              <p className="text-gray-600 mb-2">
                <strong>Challenge:</strong> Implementing accurate real-time location tracking for delivery personnel
                while maintaining battery efficiency.
              </p>
              <p className="text-gray-600">
                <strong>Solution:</strong> Used Firebase Realtime Database with optimized location updates and
                implemented smart batching to reduce battery consumption by 40%.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Payment Security</h4>
              <p className="text-gray-600 mb-2">
                <strong>Challenge:</strong> Ensuring secure payment processing while maintaining a smooth user
                experience.
              </p>
              <p className="text-gray-600">
                <strong>Solution:</strong> Integrated Stripe SDK with tokenization and implemented biometric
                authentication for enhanced security.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Offline Functionality</h4>
              <p className="text-gray-600 mb-2">
                <strong>Challenge:</strong> Providing core functionality even when users have poor internet
                connectivity.
              </p>
              <p className="text-gray-600">
                <strong>Solution:</strong> Implemented Room database for local caching and created a sync mechanism for
                when connectivity is restored.
              </p>
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
