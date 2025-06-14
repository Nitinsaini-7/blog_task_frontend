"use client"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to="/login" />
}

export default ProtectedRoute
