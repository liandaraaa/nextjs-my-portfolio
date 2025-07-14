"use client"

import NavigationPage from "@/screens/navigation/navigation-page"
import MainPage from "@/screens/main/main-page"
import AboutMePage from "@/screens/about-me/aboutme-page"
import SkillsPage from "@/screens/skills/skills-page"
import ProjectsPage from "@/screens/projects/projects-page"
import ContactPage from "@/screens/contact/contact-page"
import FooterPage from "@/screens/footer/footer-page"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationPage />
      <MainPage/>
      <AboutMePage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <FooterPage/>
    </div>
  )
}
