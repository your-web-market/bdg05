import blogData from "../data/blog-posts.json"

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  readTime: string
}

export function getAllPosts(): BlogPost[] {
  return blogData.posts
}

export function getPostById(id: number): BlogPost | undefined {
  return blogData.posts.find((post) => post.id === id)
}

