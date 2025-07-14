"use client"

import { AppScreenshot } from "@/lib/entities/project"
import { ProjectScreenshot } from "./project-screenshot"
import { cn } from "@/lib/utils"


interface ScreenshotGalleryProps {
  screenshots: AppScreenshot[]
  title?: string
  className?: string
  layout?: "grid" | "masonry" | "carousel"
  columns?: 2 | 3 | 4
}

export function ScreenshotGallery({
  screenshots,
  title,
  className,
  layout = "grid",
  columns = 3,
}: ScreenshotGalleryProps) {
  const gridClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("mb-12", className)}>
      {title && <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{title}</h2>}

      <div className={cn("grid gap-4 md:gap-6", gridClasses[columns])}>
        {screenshots.map((screenshot, index) => (
          <ProjectScreenshot
            key={index}
            src={screenshot.src}
            alt={screenshot.alt}
            title={screenshot.title}
            aspectRatio={screenshot.aspectRatio}
            priority={index < 2} // Prioritize first 2 images
          />
        ))}
      </div>
    </div>
  )
}
