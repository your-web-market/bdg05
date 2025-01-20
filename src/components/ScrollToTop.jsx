'use client'
import React ,{useState}from 'react'
// import { useState } from "react"


const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <>
     <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors"
      >
        ↑
      </button> 
    </>
  )
}

export default ScrollToTop