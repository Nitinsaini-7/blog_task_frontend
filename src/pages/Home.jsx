"use client"

import { useState, useEffect } from "react"
import PostCard from "../components/PostCard.jsx"
import { useAuth } from "../contexts/AuthContext.jsx"
import Hero from "../components/Hero.jsx"

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const { getAuthHeader, backend_url } = useAuth()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${backend_url}/api/posts`)
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`${backend_url}/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          ...getAuthHeader(),
        },
      })

      if (response.ok) {
        setPosts(posts.filter((post) => post._id !== postId))
      } else {
        alert("Failed to delete post")
      }
    } catch (error) {
      console.error("Error deleting post:", error)
      alert("Error deleting post")
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className=" ">
      <Hero/>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Latest Blog Posts</h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No posts available yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 p-2">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} onDelete={handleDeletePost} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
