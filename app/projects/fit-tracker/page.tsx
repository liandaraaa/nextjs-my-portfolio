import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Smartphone, Activity, Target, Calendar, Users, Award } from "lucide-react"

export default function FitTrackerProject() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Smartphone className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">FitTracker</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Comprehensive fitness tracking Android app with workout planning, nutrition logging, and social features
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
            Google Play Store
          </Button>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">App Interface</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/fit-tracker/workout-tracking.png"
              alt="Workout Tracking Interface"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">Workout Tracking</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/fit-tracker/nutrition-logging.png"
              alt="Nutrition Logging"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">Nutrition Logging</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/fit-tracker/progress-analytics.png"
              alt="Progress Analytics"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">Progress Analytics</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/fit-tracker/social-features.png"
              alt="Social Features"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">Social Features</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Activity className="w-5 h-5 mr-2" />
                Workout Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Track workouts with exercise library and custom routines</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Target className="w-5 h-5 mr-2" />
                Goal Setting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Set and track fitness goals with progress visualization</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Calendar className="w-5 h-5 mr-2" />
                Nutrition Logging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Log meals and track macronutrients with barcode scanning</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Users className="w-5 h-5 mr-2" />
                Social Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Connect with friends and share fitness achievements</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Award className="w-5 h-5 mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Unlock badges and achievements for reaching milestones</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Smartphone className="w-5 h-5 mr-2" />
                Wearable Sync
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Sync with fitness wearables and health apps</p>
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
                <h4 className="font-semibold mb-2">Android Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Kotlin</Badge>
                  <Badge>Jetpack Compose</Badge>
                  <Badge>Room Database</Badge>
                  <Badge>WorkManager</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Health & Fitness</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Health Connect</Badge>
                  <Badge>Google Fit API</Badge>
                  <Badge>ML Kit</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend & Analytics</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Firebase</Badge>
                  <Badge>Analytics</Badge>
                  <Badge>Cloud Functions</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">App Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Downloads</span>
                <Badge variant="outline">50K+</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>User Rating</span>
                <Badge variant="outline">4.7/5</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Users</span>
                <Badge variant="outline">15K+</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Retention Rate</span>
                <Badge variant="outline">78%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Crash-free Rate</span>
                <Badge variant="outline">99.8%</Badge>
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
            Google Play Store
          </Button>
        </div>
      </div>
    </div>
  )
}
