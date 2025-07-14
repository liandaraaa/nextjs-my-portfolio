import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Globe, Cloud, BarChart, MapPin, Calendar, Thermometer } from "lucide-react"

export default function WeatherDashboardProject() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Globe className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">WeatherPro Dashboard</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Interactive weather analytics dashboard with real-time data visualization, forecasting, and historical
          analysis
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
            Live Dashboard
          </Button>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard Views</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/weather-dashboard/main-dashboard.png"
              alt="Main Weather Dashboard"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium">Main Dashboard</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/weather-dashboard/forecast-view.png"
              alt="7-Day Forecast View"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium">Forecast View</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/weather-dashboard/charts-analytics.png"
              alt="Weather Analytics Charts"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">Analytics</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/weather-dashboard/map-view.png"
              alt="Interactive Weather Map"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">Map View</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/projects/weather-dashboard/mobile-responsive.png"
              alt="Mobile Responsive Design"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-sm font-medium">Mobile View</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Cloud className="w-5 h-5 mr-2" />
                Real-time Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Live weather data with automatic updates every 15 minutes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <BarChart className="w-5 h-5 mr-2" />
                Interactive Charts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Dynamic charts and graphs with customizable time ranges</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <MapPin className="w-5 h-5 mr-2" />
                Location-based
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">GPS-based location detection with global city search</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Calendar className="w-5 h-5 mr-2" />
                7-Day Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Detailed weekly forecasts with hourly breakdowns</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Thermometer className="w-5 h-5 mr-2" />
                Historical Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Access to historical weather patterns and trends</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-orange-600">
                <Globe className="w-5 h-5 mr-2" />
                Multiple Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Track weather for multiple cities simultaneously</p>
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
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Vue.js 3</Badge>
                  <Badge>Nuxt.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Visualization</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Chart.js</Badge>
                  <Badge>D3.js</Badge>
                  <Badge>Leaflet Maps</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">APIs & Services</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>OpenWeather API</Badge>
                  <Badge>Geolocation API</Badge>
                  <Badge>PWA</Badge>
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
                <span>Load Time</span>
                <Badge variant="outline">{"< 1.5s"}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Lighthouse Score</span>
                <Badge variant="outline">98/100</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Data Update Frequency</span>
                <Badge variant="outline">15 min</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Mobile Responsive</span>
                <Badge variant="outline">100%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>PWA Ready</span>
                <Badge variant="outline">Yes</Badge>
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
            Live Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}
