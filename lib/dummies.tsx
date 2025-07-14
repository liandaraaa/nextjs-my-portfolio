import { Download, Github, Star, Users, Zap } from "lucide-react";
import { Project } from "./entities/project";

export const projects:Project[] = [
  {
    id: "chathub-android",
    title: "Chathub Android App",
    description: "A React Native Android app that connects WhatsApp Personal Accounts to Chathub Web using pair code links.",
    imageUrl: "/images/ic_mobileapp_wapers_1.jpg",
    technologies: ["React Native", "Android", "WhatsApp API"],
    githubUrl:"",
    appStatistics: [
      {
        title: "Downloads",
        value: "10K+",
        icon: <Download className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Rating",
        value: "4.5",
        icon: <Star className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Users",
        value: "5K+",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Reviews",
        value: "500+",
        icon: <Zap className="w-6 h-6 text-orange-600" />
      }
    ],
    appScreenshots: [
      {
        src: "/images/screenshots/chathub-1.png",
        alt: "Chathub Screenshot 1",
        title: "Chathub Home Screen",
        aspectRatio: "mobile"
      },
      {
        src: "/images/screenshots/chathub-2.png",
        alt: "Chathub Screenshot 2",
        title: "Chathub Chat Screen",
        aspectRatio: "mobile"
      },
      {
        src: "/images/screenshots/chathub-3.png",
        alt: "Chathub Screenshot 3",
        title: "Chathub Settings",
        aspectRatio: "mobile"
      }
    ],
    keyFeatures: [
      {
        title: "WhatsApp Integration",
        description: "Seamlessly connects to WhatsApp Personal Accounts.",
        icon: <Zap className="w-5 h-5 text-orange-600" />
      },
      {
        title: "User-Friendly Interface",
        description: "Intuitive design for easy navigation.",
        icon: <Users className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Secure Connections",
        description: "Ensures secure and private connections.",
        icon: <Star className="w-5 h-5 text-orange-600" />
      }
    ],
    stacks: [
      { title: "Mobile Development", stacks: ["React Native", "Android"] },
      { title: "Backend Integration", stacks: ["WhatsApp API"] }
    ],
    architecture: ["MVVM", "Clean Architecture"],
    challenges: [
      {
        title: "WhatsApp API Limitations",
        chalenge: "Integrating with WhatsApp's API for personal accounts was challenging due to strict limitations.",
        solution: "Utilized pair code links for secure connections and ensured compliance with WhatsApp's policies."
      },
      {
        title: "Performance Optimization",
        chalenge: "Ensuring smooth performance on various Android devices.",
        solution: "Implemented performance optimizations and tested on multiple devices to ensure a consistent user experience."
      }
    ],
  },
  {
    id: "heroes-academy-android",
    title: "Heroes Acedemy Ruangguru Feature App",
    description: "A React Native Android app that designed by integrated the React Native module into the existing native Ruangguru Android app to run the Heroes Academy feature",
    imageUrl: "/images/ic_mobileapp_heroesacademy_1.jpg",
    technologies: ["React Native", "Android", "Firebase"],
    githubUrl:"",
    appStatistics: [
      {
        title: "Downloads",
        value: "5K+",
        icon: <Download className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Rating",
        value: "4.0",
        icon: <Star className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Users",
        value: "2K+",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Reviews",
        value: "300+",
        icon: <Zap className="w-6 h-6 text-orange-600" />
      }
    ],
    appScreenshots: [
      {
        src: "/images/screenshots/heroes-academy-1.png",
        alt: "Heroes Academy Screenshot 1",
        title: "Heroes Academy Home Screen",
        aspectRatio: "mobile"
      },
      {
        src: "/images/screenshots/heroes-academy-2.png",
        alt: "Heroes Academy Screenshot 2",
        title: "Heroes Academy Quiz Screen",
        aspectRatio: "mobile"
      },
      {
        src: "/images/screenshots/heroes-academy-3.png",
        alt: "Heroes Academy Screenshot 3",
        title: "Heroes Academy Leaderboard",
        aspectRatio: "mobile"
      }
    ],
    keyFeatures: [
      {
        title: "Interactive Quizzes",
        description: "Engaging quizzes to enhance learning.",
        icon: <Zap className="w-5 h-5 text-orange-600"  />
      },
      {
        title: "Leaderboard",
        description: "Track progress and compete with friends.",
        icon: <Users className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Firebase Integration",
        description: "Real-time data synchronization and user management.",
        icon: <Star className="w-5 h-5 text-orange-600" />
      }
    ],
    stacks:[
      { title: "Mobile Development", stacks: ["React Native", "Android"] },
      { title: "Backend Integration", stacks: ["Firebase"] }
    ],
    architecture: ["MVVM", "Clean Architecture"],
    challenges: [
      {
        title: "Feature Integration",
        chalenge: "Integrating the React Native module into the existing native Ruangguru Android app.",
        solution: "Collaborated with the native team to ensure smooth integration and compatibility."
      },
      {
        title: "Real-time Data Sync",
        chalenge: "Ensuring real-time data synchronization with Firebase.",
        solution: "Implemented Firebase listeners and optimized data fetching strategies."
      }
    ],
  },
  {
    id: "ruangguru-features-android",
    title: "Ruangguru Features Android App",
    description: " Contributed to the Learning Engagement team by maintaining and improving features like Pet Level for gamification using LibGdx, Friends Hub to find friends by integrating Contacts Phone Number on device that registered in Ruangguru App, and League Ranking feature gamification to motivate user learning in Ruangguru app",
    imageUrl: "/images/ic_mobileapp_leeg_1.png",
    technologies: ["Android Native Kotlin", "MvRx", "Retrofit", "Firebase", "LibGdx"],
    githubUrl:"",
    appStatistics: [
      {
        title: "Downloads",
        value: "1M+",
        icon: <Download className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Rating",
        value: "4.5",
        icon: <Star className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Users",
        value: "500K+",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Reviews",
        value: "10K+",
        icon: <Zap className="w-6 h-6 text-orange-600" />
      }
    ],
    appScreenshots: [
      {
        src: "/images/screenshots/ruangguru-1.png",
        alt: "Ruangguru Screenshot 1",
        title: "Ruangguru Home Screen",
        aspectRatio: "mobile"
      },
      {
        src: "/images/screenshots/ruangguru-2.png",
        alt: "Ruangguru Screenshot 2",
        title: "Ruangguru Friends Hub",
        aspectRatio: "mobile"
      },
      {
        src: "/images/screenshots/ruangguru-3.png",
        alt: "Ruangguru Screenshot 3",
        title: "Ruangguru League Ranking",
        aspectRatio: "mobile"
      }
    ],
    keyFeatures: [
      {
        title: "Gamification",
        description: "Implemented Pet Level and League Ranking features to enhance user engagement.",
        icon: <Zap className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Social Features",
        description: "Friends Hub to connect with peers and share progress.",
        icon: <Users className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Firebase Integration",
        description: "Used Firebase for real-time data synchronization and user management.",
        icon: <Star className="w-5 h-5 text-orange-600" />
      }
    ],
    stacks:[
      { title: "Mobile Development", stacks: ["Android Native Kotlin", "MvRx"] },
      { title: "Backend Integration", stacks: ["Retrofit", "Firebase", "LibGdx"] },
    ],
    architecture: ["MVVM", "Clean Architecture"],
    challenges: [
      {
        title: "Gamification Features",
        chalenge: "Implementing engaging gamification features like Pet Level and League Ranking.",
        solution: "Utilized LibGdx for game-like features and collaborated with the design team to ensure a smooth user experience."
      },
      {
        title: "Social Features",
        chalenge: "Integrating social features like Friends Hub to enhance user interaction.",
        solution: "Implemented contact integration to find friends and used Firebase for real-time updates."
        }
    ],
  },
  {
    id: "saas-omnichannel-website",
    title:"SaaS Omnichannel",
    description:"eveloped features for the Omnichannel module (formerly Chathub) within a SaaS platform, including a WhatsApp template management page for configuring broadcast messages and a setup interface for scheduling and managing message distribution",
    imageUrl: "/images/ic_webapp_saasomni_1.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    githubUrl:"",
    appStatistics: [
      {
        title: "Users",
        value: "10K+",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Active Sessions",
        value: "5K+",
        icon: <Zap className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Templates Created",
        value: "1K+",
        icon: <Star className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Messages Sent",
        value: "50K+",
        icon: <Download className="w-6 h-6 text-orange-600" />
      }
    ],
    appScreenshots: [
      {
        src: "/images/screenshots/saas-1.png",
        alt: "SaaS Omnichannel Screenshot 1",
        title: "Omnichannel Dashboard",
        aspectRatio: "desktop"
      },
      {
        src: "/images/screenshots/saas-2.png",
        alt: "SaaS Omnichannel Screenshot 2",
        title: "WhatsApp Template Management",
        aspectRatio: "desktop"
      },
      {
        src: "/images/screenshots/saas-3.png",
        alt: "SaaS Omnichannel Screenshot 3",
        title: "Message Scheduling Setup",
        aspectRatio: "desktop"
      }, 
      {
        src: "/images/screenshots/saas-4.png",
        alt: "SaaS Omnichannel Screenshot 4",
        title: "Message Distribution Management",
        aspectRatio: "desktop"
      }
    ],
    keyFeatures: [
      {
        title: "WhatsApp Template Management",
        description: "Easily create and manage WhatsApp templates for broadcast messages.",
        icon: <Zap className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Message Scheduling",
        description: "Schedule messages to be sent at specific times for better engagement.",
        icon: <Users className="w-5 h-5 text-orange-600" />
      },
      {
        title: "User-Friendly Interface",
        description: "Intuitive design for easy navigation and management of templates and messages.",
        icon: <Star className="w-5 h-5 text-orange-600" />
      }
    ], 
    stacks: [
      { title: "Frontend Development", stacks: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Backend Development", stacks: ["Node.js"] }
    ],
    architecture: ["Microservices", "REST API"],
    challenges: [
      {
        title: "Template Management Complexity",
        chalenge: "Developing a robust template management system for WhatsApp broadcast messages.",
        solution: "Implemented a flexible template system with validation and preview features to ensure compliance with WhatsApp's policies."
      },
      {
        title: "Scheduling and Distribution",
        chalenge: "Creating a reliable scheduling system for message distribution.",
        solution: "Utilized cron jobs and a task queue to manage scheduled messages efficiently, ensuring timely delivery."
      }
    ],
  },
  {
    id:'rg-payment-website',
    title: "Ruangguru Payment Website",
    description: "Developed a payment website for Ruangguru, integrating various payment gateways and ensuring secure transactions for users.",
    imageUrl: "/images/ic_webapp_payment_1.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Stripe"],
    githubUrl:"",
    appStatistics: [
      {
        title: "Transactions",
        value: "100K+",
        icon: <Download className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Users",
        value: "50K+",
        icon: <Users className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Payment Methods",
        value: "5",
        icon: <Star className="w-6 h-6 text-orange-600" />
      },
      {
        title: "Success Rate",
        value: "98%",
        icon: <Zap className="w-6 h-6 text-orange-600" />
      }
    ],
    appScreenshots: [
      { src: "/images/screenshots/rg-payment-1.png", alt: "Ruangguru Payment Screenshot 1", title: "Payment Dashboard", aspectRatio: "desktop" },
      { src: "/images/screenshots/rg-payment-2.png", alt: "Ruangguru Payment Screenshot 2", title: "Payment Method Selection", aspectRatio: "desktop" },
      { src: "/images/screenshots/rg-payment-3.png", alt: "Ruangguru Payment Screenshot 3", title: "Transaction History", aspectRatio: "desktop" }
    ],
    keyFeatures: [
      {
        title: "Multiple Payment Gateways",
        description: "Supports various payment methods including credit cards, bank transfers, and e-wallets.",
        icon: <Zap className="w-5 h-5 text-orange-600" />
      },
      {
        title: "Secure Transactions",
        description: "Ensures secure payment processing with encryption and compliance with industry standards.",
        icon: <Users className="w-5 h-5 text-orange-600" />
      },
      {
        title: "User-Friendly Interface",
        description: "Intuitive design for easy navigation and transaction management.",
        icon: <Star className="w-5 h-5 text-orange-600" />
      }
    ],
    stacks: [
      { title: "Frontend Development", stacks: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Backend Development", stacks: ["Node.js", "Stripe"] }
    ],
    architecture: ["Microservices", "REST API"],
    challenges: [
      {
        title: "Payment Gateway Integration",
        chalenge: "Integrating multiple payment gateways while ensuring security and compliance.",
        solution: "Implemented a modular payment system that allows easy integration of new gateways and adheres to security best practices."
      },
      {
        title: "Transaction Security",
        chalenge: "Ensuring secure transactions and protecting user data.",
        solution: "Utilized encryption, secure APIs, and compliance with PCI DSS standards to safeguard user information."
      },
    ],
  }
]