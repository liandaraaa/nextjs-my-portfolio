import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone } from "lucide-react";

const SkillsPage = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600 text-xl">
                  <Smartphone className="w-6 h-6 mr-3" />
                  Android Development
                </CardTitle>
                <CardDescription>
                  Building native Android applications with modern tools and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500 hover:bg-orange-600">Kotlin</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Java</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Android Studio</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Jetpack Compose</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">MVVM</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Room Database</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Retrofit</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600 text-xl">
                  <Globe className="w-6 h-6 mr-3" />
                  Web Frontend
                </CardTitle>
                <CardDescription>
                  Creating responsive and interactive web applications with cutting-edge technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500 hover:bg-orange-600">React</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Next.js</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">TypeScript</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">JavaScript</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">HTML5</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">CSS3</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Tailwind CSS</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">Tamagui</Badge>
                  <Badge className="bg-orange-500 hover:bg-orange-600">XState</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </section>
  )
}

export default SkillsPage;