import Image from "next/image"
import Link from "next/link"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with bdg05",
    excerpt: "Learn how to set up your account and start playing on bdg05.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Top 5 Games on bdg05",
    excerpt: "Discover the most popular and lucrative games available on bdg05.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-18",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Maximizing Your Earnings on bdg05",
    excerpt: "Tips and strategies to increase your winnings while playing on bdg05.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-20",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Understanding bdg05's Payment Options",
    excerpt: "A comprehensive guide to the various payment methods available on bdg05.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-22",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "bdg05 vs Other Gaming Platforms",
    excerpt: "A comparison of bdg05 with other popular online gaming and earning platforms.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-25",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Staying Safe While Gaming on bdg05",
    excerpt: "Important safety tips and best practices for bdg05 users.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2025-01-28",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      
      {/* Header */}
      <header className="bg-[#1e2532] text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 lg:flex lg:justify-between ">
          <h1 className="text-4xl font-bold text-blue-400 flex justify-center ">
            <img src="./logo2.png" alt="logo" className="w-36"/>

            </h1>
          <div className="space-y-3 ">
            <button className="w-full max-w-md bg-[#1e2532] border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors m-4">
              bdg05 Register
            </button>
            <button className="w-full max-w-md bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors m-4">
              bdg05 Login
            </button>
          </div>
        </div>
      </header>
      {/* <header className="bg-[#1e2532] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="mt-2 text-xl">Stay updated with the latest news and tips</p>
        </div>
      </header> */}
    
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
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

