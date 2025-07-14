import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import '../../app/globals.css'; // Import global styles
import styles from "../../app/portfolio.module.css"; // Assuming you have some styles defined

const NavigationPage = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-orange-500">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-700 hover:text-orange-500 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 hover:text-orange-500 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>
  );
};

export default NavigationPage;