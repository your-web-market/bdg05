import Image from "next/image"
import Link from "next/link"
import { getAllPosts } from "./utils/blog"

export default function BlogPage() {
  const blogPosts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-[#1e2532] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">bdg05 Blog</h1>
          <p className="mt-2 text-xl">Stay updated with the latest news and tips</p>
        </div>
      </header> */}

<header className="bg-[#1e2532] text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 lg:flex lg:justify-between ">
          <h1 className="text-4xl font-bold text-blue-400 flex justify-center w-full lg:w-[200px] h-auto">
            {/* <img src="./logo2.png" alt="logo" className="w-36"/> */}
            {/* <Image src="/logo2.png" alt="logo" fill className="w-36" priority /> */}
            <Image src="/logo2.png" alt="logo" width={300} height={150}  className="w-36" priority />
            </h1>
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
      {/* Blog Grid */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
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
    </div>
  )
}

