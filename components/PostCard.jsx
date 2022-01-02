import React from "react";
import moment from "moment";
import Link from "next/link";


const PostCard = ({ post }) => {
  return (
    <div className="p-0 mb-8 pb-12 bg-teal-50 shadow-xl rounded-lg lg:p-8">
      <div className="pb-80 mb-6 relative overflow-hidden shadow-md">
        <img src={post.featuredImage.url} alt={post.title} className="h-80 absolute w-full shadow-lg rounded-t-lg object-top object-cover lg:rounded-lg"/>
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-blue-600">
        <Link href={`/post/${post.slug}`}>
          {post.title} 
        </Link>
      </h1>
      <div className="mb-8 w-full justify-center items-center text-center block lg:flex">
        <div className="mb-4 mr-8 w-full flex items-center justify-center lg:mb-0 lg:w-auto">
          <img alt={post.author.name} src={post.author.photo.url} height="30px" width="30px" className="align-middle rounded-full"/>
          <p className="ml-2 text-lg inline align-middle text-gray-700">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className="px-4 mb-8 text-center text-lg text-gray-700 font-normal lg:px-20">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="px-8 py-3 cursor-pointer text-lg text-white font-medium rounded-full inline-block bg-blue-600 transition duration-500 transform hover:-translate-y-1">Continue Reading</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
