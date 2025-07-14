import { Github, Linkedin, Mail } from "lucide-react";

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-4">Portfolio</div>
            <p className="text-gray-400 mb-6">Lianda Ramdahana | Android And Web Frontend Engineer</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/liandaraaa/" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/liandaramadhana/"  target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lianda.ramadhana31@gmail.com" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Lianda Ramadhana. Built with Next.js and Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}
export default FooterPage;