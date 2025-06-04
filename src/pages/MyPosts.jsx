import { useState, useEffect } from "react"
import PostCard from "../components/PostCard.jsx"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"


const MyPosts = () => {
  const { backend_url } = useAuth()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { getAuthHeader } = useAuth()

  useEffect(() => {
    fetchMyPosts()
  }, [])

  const fetchMyPosts = async () => {
    try {
      const response = await fetch(`${backend_url}/api/my-posts`, {
        headers: {
          ...getAuthHeader(),
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch your posts")
      }

      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (postId) => {
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
      alert("Error deleting post")
    }
  }

  if (loading) return <div className="text-center py-12">Loading...</div>
  if (error) return <div className="text-center text-red-600 py-12">{error}</div>

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-20 text-center">My Blog Posts</h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">You haven't created any posts yet.</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post._id} post={post} onDelete={handleDelete} />
        ))
      )}
    </div>
  )
}

export default MyPosts
