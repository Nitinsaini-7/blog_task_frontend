"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"


const CreatePost = () => {
  const { backend_url } = useAuth()
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })
  const [imageFile, setImageFile] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { getAuthHeader } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
  const { name, value, files } = e.target
  if (name === "image") {
    setImageFile(files[0])
  } else {
    setFormData(prev => ({ ...prev, [name]: value }))
  }
}

  const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  setError("")

  const tokenHeader = getAuthHeader()
  const form = new FormData()
  form.append("title", formData.title)
  form.append("content", formData.content)
  if (imageFile) form.append("image", imageFile)

  try {
    const response = await fetch(`${backend_url}/api/posts`, {
      method: "POST",
      headers: {
        ...tokenHeader,
      },
      body: form,
    })

    const data = await response.json()
    console.log(data);
    

    if (response.ok) {
      navigate("/")
    } else {
      setError(data.message)
    }
  } catch (error) {
    setError("Network error. Please try again.")
  } finally {
    setLoading(false)
  }
}


  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 my-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create New Post</h2>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="10"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
    Main Image
  </label>
  <input
    type="file"
    required
    id="image"
    name="image"
    accept="image/*"
    onChange={handleChange}
    className="w-full"
  />
</div>


        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
