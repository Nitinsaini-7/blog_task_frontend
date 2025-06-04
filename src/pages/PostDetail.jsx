"use client"

import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"
import AOS from "aos";
import "aos/dist/aos.css";


const PostDetail = () => {
  useEffect(() => {
      AOS.init(
        {
  
          duration: 1000,
        }
      );
      AOS.refresh();
    }, []);
  const { backend_url } = useAuth()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { id } = useParams()
  const { currentUser, getAuthHeader } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`${backend_url}/api/posts/${id}`)
      const data = await response.json()

      if (response.ok) {
        setPost(data)
      } else {
        setError("Post not found")
      }
    } catch (error) {
      setError("Error fetching post")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch(`${backend_url}/api/posts/${id}`, {
          method: "DELETE",
          headers: {
            ...getAuthHeader(),
          },
        })
        console.log(response);
        

        if (response.ok) {
          navigate("/")
        } else {
          alert("Failed to delete post")
        }
      } catch (error) {
        console.error("Error deleting post:", error)
        alert("Error deleting post")
      }
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">{error}</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    )
  }

  const isAuthor = currentUser && currentUser.id === post.author

  return (
    <div className=" mx-auto bg-white px-10 py-5">
      <div className="mb-6">
        <Link to="/" className="text-blue-400 hover:text-blue-800 mb-4 inline-block">
          ← Back to Posts
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 uppercase mb-4 text-center">{post.title}</h1>
        <div className=" flex items-center justify-center">

        <img data-aos="fade-up" src={`${backend_url}${post.image}`} alt="" />
        </div>

        <div className="text-gray-600 mb-6" data-aos="fade-up">
          <span>By {post.authorName}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          {post.updatedAt !== post.createdAt && (
            <>
              <span className="mx-2">•</span>
              <span>Updated {new Date(post.updatedAt).toLocaleDateString()}</span>
            </>
          )}
        </div>

       
      </div>

      <div className="prose max-w-none" data-aos="fade-up">
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</div>
      </div>
       {isAuthor && (
          <div className="my-6 space-x-2">
            <Link
              to={`/edit/${post._id}`}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors"
            >
              Edit Post
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
            >
              Delete Post
            </button>
          </div>
        )}
    </div>
  )
}

export default PostDetail
