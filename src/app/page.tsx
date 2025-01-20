// "use client"

import Carousel from "@/components/carousel"
import Image from "next/image"
// import { useState } from "react"
import Link from "next/link"
import ScrollToTop from '@/components/ScrollToTop'


export default function Home() {
  // const [isScrolled, setIsScrolled] = useState(false)

  const advantages = [
    "Potential to make money",
    "Simple and easy to play",
    "Diverse games",
    "Safe and reliable gaming environment",
    "Welcome rewards",
    "Many payment options",
    "24/7 customer support",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1e2532] text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 lg:flex lg:justify-between ">
          <h1 className="text-4xl font-bold text-blue-400 flex justify-center "><img src="./logo2.png" alt="logo" className="w-36"/></h1>
          <div className="space-y-3 ">
          <a href="https://bdg05.in/#/register?invitationCode=305243021284" className="">
            <button className="w-full max-w-md bg-[#1e2532] border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors m-4">

              bdg05 Register
            </button>
              </a>
            <a href="https://bdg05.in/#/login">
            <button className="w-full max-w-md bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors m-4">

              bdg05 Login
            </button>
            </a>
          </div>
        </div>
      </header>


     

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">

       {/* Carousel Section */}
       <section className="w-full py-8 bg-[#1e2532]">
        <Carousel />
      </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1e2532]">What is bdg05?</h2>
          <p className="text-gray-600 leading-relaxed">
            bdg05 is a mobile application that combines gaming opportunities and making money, attracting users who want
            to earn while enjoying themselves. This application also provides many other features, such as daily
            bonuses, introduction rewards, and rankings.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1e2532]">Is bdg05 Reputable?</h2>
          <p className="text-gray-600 leading-relaxed">
            bdg05 is licensed and managed by the team of developer and provides a safe and reliable gaming
            environment. bdg05 is a popular choice for  players due to its many payment options, including UPI,
            Paytm, and NetBanking.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1e2532]">Advantages:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1e2532]">Conclusion</h2>
          <p className="text-gray-600 leading-relaxed">
            Overall, bdg05 is an application that offers a great experience, especially in India. Many players have made
            a large amount of money from bdg05, but it's important to be cautious due to financial-related risks. If you
            have any questions or need assistance, feel free to contact us for the fastest support.
          </p>
          <p className="text-gray-600">Contact us for support or more information.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1e2532]">Blogs</h2>
          <p className="text-xl text-gray-600">Read our blogs and get to know more about online money earning games.</p>
          <button className="bg-[#2f3a4c] text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
          <Link href={`/blog`}>
            Click here
       </Link>
          </button>

        </section>


      </main>
            
      {/* Footer */}
      <footer className="bg-[#1e2532] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 bdg05. All rights reserved.</p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog/1" className="hover:text-blue-400 transition-colors">
                  Discover
                </Link>
              </li>
              <li>
                <Link href="/blog/2" className="hover:text-blue-400 transition-colors">
                  Best
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      {/* Scroll to top button */}
     
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors"
      >
        ↑
      </button> */}
      {/* <div className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors"> */}
        {/* <ScrollToTop/> */}
        {/* fghfhggfh */}
      {/* </div> */}
    </div>
  )
}

