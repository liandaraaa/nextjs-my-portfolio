import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Let's Work Together</h2>
    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
      I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
      to life and create something amazing together!
    </p>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="flex flex-col items-center group">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
        <p className="text-gray-600">lianda.ramadhana31@gmail.com</p>
      </div>

      <div className="flex flex-col items-center group">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
        <p className="text-gray-600">(+62) 8956-1191-8545</p>
      </div>

      <div className="flex flex-col items-center group">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
        <p className="text-gray-600">Bogor, Indonesia</p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8"
      onClick={() => window.open("https://github.com/liandaraaa/", "_blank")}>
        <Github className="w-5 h-5 mr-2" />
        GitHub Profile
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => window.open("https://www.linkedin.com/in/liandaramadhana/", "_blank")}
        className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 bg-transparent"
      >
        <Linkedin className="w-5 h-5 mr-2" />
        LinkedIn Profile
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=lianda.ramadhana31@gmail.com", "_blank")}
        className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 bg-transparent"
      >
        <Mail className="w-5 h-5 mr-2" />
        Send Email
      </Button>
    </div>
  </div>
  </section>
  )
}
export default ContactPage;
