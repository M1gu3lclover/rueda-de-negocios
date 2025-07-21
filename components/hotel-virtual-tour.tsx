"use client"

import { Progress } from "@/components/ui/progress"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, RotateCcw, Fullscreen, Volume2, VolumeX } from "lucide-react"

export default function HotelVirtualTour() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0) // 0-100
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / video.duration) * 100)
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
    }
  }, [])

  const togglePlayPause = () => {
    const video = videoRef.current
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  const resetVideo = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 0
      video.pause()
      setIsPlaying(false)
      setProgress(0)
      setCurrentTime(0)
    }
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if (video.webkitRequestFullscreen) {
        /* Safari */
        video.webkitRequestFullscreen()
      } else if (video.msRequestFullscreen) {
        /* IE11 */
        video.msRequestFullscreen()
      }
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Tour Virtual del Hotel Serrano</h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Explora nuestras instalaciones con un recorrido inmersivo en 360 grados.
      </p>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Recorrido 360°</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for 360 video or actual video */}
            <video
              ref={videoRef}
              src="/IMG_0711.MP4" // Replace with actual 360 video URL or embed
              poster="/placeholder.svg?height=450&width=800"
              className="w-full h-full object-cover"
              loop
            >
              Tu navegador no soporta el elemento de video.
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xl font-semibold">
              {/* This text will be hidden when video plays */}
              {/* For a true 360 tour, you'd integrate a 360 viewer library here */}
            </div>
          </div>

          {/* Video Controls */}
          <div className="mt-4 p-4 bg-gray-100 rounded-lg flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Progress value={progress} className="flex-1 h-2" />
              <span className="text-sm text-gray-600">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Button variant="ghost" size="icon" onClick={togglePlayPause}>
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span className="sr-only">{isPlaying ? "Pausar" : "Reproducir"}</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={resetVideo}>
                <RotateCcw className="w-5 h-5" />
                <span className="sr-only">Reiniciar</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleMute}>
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                <span className="sr-only">{isMuted ? "Desmutear" : "Mutear"}</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
                <Fullscreen className="w-5 h-5" />
                <span className="sr-only">Pantalla Completa</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">¿Interesado en una visita personalizada?</h3>
        <p className="text-gray-700 mb-6">
          Contacta a nuestro equipo para coordinar un recorrido exclusivo por nuestras instalaciones.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">Solicitar Visita</Button>
      </div>
    </div>
  )
}
