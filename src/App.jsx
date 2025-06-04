import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost.jsx"
import PostDetail from "./pages/PostDetail"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import MyPosts from "./pages/MyPosts.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/my-posts" element={<MyPosts />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route
                path="/create"
                element={
                  <ProtectedRoute>
                    <CreatePost />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <ProtectedRoute>
                    <EditPost />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
