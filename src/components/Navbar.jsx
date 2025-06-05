"use client"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"
import { useState } from "react"

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const [state, setState] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "/" },
        { title: "My Post", path: "my-posts" },
        
    ]

  return (
    // <nav className="bg-blue-600 text-white shadow-lg">
    //   <div className="container mx-auto px-4">
    //     <div className="flex justify-between items-center py-4">
    //       <Link to="/" className="text-2xl font-bold">
    //         MERN Blog
    //       </Link>

    //       <div className="flex items-center space-x-4">
    //         <Link to="/" className="hover:text-blue-200 transition-colors">
    //           Home
    //         </Link>

    //         {currentUser ? (
    //           <>
    //             <Link to="/create" className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded transition-colors">
    //               Create Post
    //             </Link>
    //             <span className="text-blue-200">Welcome, {currentUser.username}</span>
    //             <button
    //               onClick={handleLogout}
    //               className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded transition-colors"
    //             >
    //               Logout
    //             </button>
    //           </>
    //         ) : (
    //           <>
    //             <Link to="/login" className="hover:text-blue-200 transition-colors">
    //               Login
    //             </Link>
    //             <Link to="/register" className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded transition-colors">
    //               Register
    //             </Link>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className=" border-b w-full shadow-lg bg-slate-50 md:static md:text-lg md:font-semibold md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="none" viewBox="0 0 176 40"><path fill="#283841" fill-rule="evenodd" d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z" clip-rule="evenodd"></path><path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
                    </Link>
                    <div className="md:hidden">
                {/* <span className="text-blue-400 px-2">Welcome, {currentUser.username}</span> */}

                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 hover:text-indigo-600">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        {
                          currentUser ?
                          <>
                <span className="text-blue-400 font-semibold hidden md:block">Welcome, {currentUser.username}</span>
                <button onClick={()=>setState(false)} className=" mt-10 w-full md:w-auto  text-center bg-blue-500 text-white  hover:bg-blue-400 px-4 py-2 rounded transition-colors">
                    <Link to="/create" className="">
                  Create Post
                 </Link>
                </button>

                <button
                  onClick={ ()=>{
                      handleLogout
                        setState(false)
                  } 
                }
                  className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 w-full md:w-auto rounded transition-colors"
                >
                  Logout
                </button>
                          </>
                          
                : 

                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <Link onClick={()=>setState(false)} to={'/login'} className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
                                    Log in
                                </Link>
                            </li>
                            <li>
                                <Link onClick={()=>setState(false)} to={'/register'} className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                    Sign in
                                </Link>
                            </li>
                        </div>
                        }
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
