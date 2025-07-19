"use client"
import { useEffect, useRef, useState } from "react"

interface OptimizedVideoProps {
  src: string
  className?: string
  poster?: string
}

export const OptimizedVideo = ({ src, className = "", poster }: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Delay video loading to prioritize critical content
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load()
    }
  }, [shouldLoad])

  return (
    <div className="relative w-full h-full">
      {/* Fallback background while video loads */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900"
          style={{
            backgroundImage: poster ? `url(${poster})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {shouldLoad && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)} // Show fallback on error
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
