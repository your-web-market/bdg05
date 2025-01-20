"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const carouselData = [
  {
    id: 1,
    title: "Welcome to bdg05",
    description: "Experience the best gaming platform",
    image: "/image1.png",
  },
  {
    id: 2,
    title: "Safe & Secure Gaming",
    description: "Licensed by Curacao Gaming Commission",
    image: "/image2.jpg",
  },
  {
    id: 3,
    title: "Multiple Payment Options",
    description: "UPI, Paytm, NetBanking and more",
    image: "/image3.jpg",
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
  <div className="relative w-full max-w-6xl mx-auto h-[600px] overflow-hidden rounded-xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="h-fit" priority />
            {/* <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

