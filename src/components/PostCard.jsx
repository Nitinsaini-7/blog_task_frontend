"use client"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx"
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PostCard = ({ post, onDelete }) => {

  useEffect(() => {
    AOS.init(
      {

        duration: 1000,
      }
    );
    AOS.refresh();
  }, []);

  const { currentUser,backend_url } = useAuth()
  const isAuthor = currentUser && currentUser.id === post.author

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDelete(post._id)
    }
  }

  return (
    
     

 <div data-aos="fade-up" className="mx-5 border relative flex flex-col rounded-xl mb-10 bg-white hover:scale-105 duration-200 cursor-pointer bg-clip-border  shadow-sm hover:shadow-lg">
      <div className="relative flex items-center justify-center mx-4 -mt-6 h-40 overflow-hidden bg-white rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
        <img src={`${backend_url}${post.image}`} alt="" />
      </div>
      <div className=" px-5">
        <h5 className="my-2 uppercase block text-black font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {post.title}
        </h5>
        <p className="block font-sans text-gray-400 text-base font-semibold leading-relaxed text-inherit antialiased">
          {post.content.substring(0, 100)}... 
        </p>
      </div>
      <div className="text-gray-600 mb-4 px-5">
       
       By<span className=" text-blue-400 font-semibold"> {post.authorName}</span>
        <br />
        <span className=" text-black">{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="px-5">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg mb-3  hover:bg-blue-400 hover:text-white duration-200 border-blue-400 border text-blue-400 p-3 text-center align-middle font-sans text-xs font-bold uppercase ">
         <Link onClick={()=>{window,scroll(0,0)}} to={`/posts/${post._id}`} className=" font-medium">
          Read More →
        </Link>
        </button>
      </div>
       {isAuthor && (
          <div className="space-x-2 p-5 flex ">
            
            <Link
              to={`/edit/${post._id}`}
              className="bg-yellow-500 flex items-center justify-center gap-2 w-20 hover:bg-yellow-600 text-white px-3 py-2 rounded text-sm transition-colors"
            >
              <span>Edit</span> <FaRegEdit />
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 flex items-center justify-center w-32 gap-2 text-white px-3 py-2 rounded text-sm transition-colors"
            >
              <span>Delete</span>
               <MdOutlineDelete />

            </button>
          </div>
        )}
        
    </div>
  )
}

export default PostCard
