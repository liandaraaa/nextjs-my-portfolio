import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

const AboutMePage = () => {
  return (
    <section id="about" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/img-profile.jpeg"
                alt="Profile Image"
                width={320}
                height={320}
                className="object-cover"
              />
             </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Android and Web Frontend Engineer with expertise in creating beautiful, functional
                applications that provide exceptional user experiences. I love turning complex problems into simple,
                elegant solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong foundation in both mobile and web technologies, I bring a unique perspective to
                cross-platform development and user interface design. My goal is to create applications that not only
                look great but also perform flawlessly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1">
                  Problem Solver
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1">
                  Creative Thinker
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1">
                  Team Player
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1">
                  Detail Oriented
                </Badge>
              </div>
            </div>
          </div>
        </div>
        </section>
          );
};

export default AboutMePage;
