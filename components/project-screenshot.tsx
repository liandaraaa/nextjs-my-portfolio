"use client"

import { LazyImage } from "./lazy-image"
import { cn } from "@/lib/utils"

interface ProjectScreenshotProps {
  src: string
  alt: string
  title: string
  className?: string
  aspectRatio?: "square" | "video" | "mobile" | "desktop"
  priority?: boolean
}

export function ProjectScreenshot({
  src,
  alt,
  title,
  className,
  aspectRatio = "video",
  priority = false,
}: ProjectScreenshotProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    mobile: "aspect-[9/16]",
    desktop: "aspect-[16/10]",
  }

  return (
    <div className={cn("group relative overflow-hidden rounded-lg shadow-lg", className)}>
      <div className={cn("relative", aspectRatioClasses[aspectRatio])}>
        <LazyImage
          src={src}
          alt={alt}
          fill
          className="group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white font-medium text-sm md:text-base">{title}</p>
        </div>
      </div>
    </div>
  )
}
