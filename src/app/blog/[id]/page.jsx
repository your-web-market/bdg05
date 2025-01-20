// 'use client'
import Image from "next/image"
import Link from "next/link"
import { getPostById } from "../utils/blog"
// import { notFound, useParams } from "next/navigation"


export default async function generateMetadata({params}) {
  // const { id } = await params;

  const post = await getPostById(Number((await params).id))
  // console.log(params)

  if (!post) {
    notFound()
  }
  // const params2 = useParams<{ tag: string; item: string }>()
  // console.log(params2)
// useParams
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <header className="bg-[#1e2532] text-white py-8 px-4 text-center">
       <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors m-4 absolute top-2 left-4">
            ← Back to Blog
          </Link>
        <div className="max-w-4xl mx-auto space-y-6 lg:flex lg:justify-between ">
          <h1 className="text-4xl font-bold text-blue-400 flex justify-center w-full lg:w-[200px] h-auto">
            {/* <img src="/logo2.png" alt="logo" className="w-36"/> */}
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
      <header className="bg-gray-100 text-gray-700 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          

          
          <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
          <div className="flex items-center mt-4 text-sm">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-[400px]">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
          <div className="p-8">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e2532] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 bdg05. All rights reserved.</p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
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

