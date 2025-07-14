import { BackgroundDecorative } from "@/components/background-decorative";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

const MainPage = () => {
  return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
           <BackgroundDecorative/>
    <div className="text-center z-10 px-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-orange-500 mb-6 tracking-tight">Portfolio</h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-orange-400 mb-8 font-medium">
                Lianda Ramadhana
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-orange-400 mb-8 font-medium">
                Android And Web Frontend Engineer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                onClick={() => window.open('#contact', '_self')}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 bg-transparent"
                  onClick={() => window.open("#projects", "_self")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>
            </div>
            </section>
  );
}
export default MainPage;