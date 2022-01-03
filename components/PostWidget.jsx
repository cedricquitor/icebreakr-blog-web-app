import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);

  return (
    <div className="p-8 mb-8 bg-teal-50 shadow-xl rounded-lg">
      <h3 className="mb-8 pb-4 border-b text-xl font-semibold">{slug ? "Related Posts" : "Recent Posts"}</h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="w-full mb-4 flex items-center">
          <div className="w-16 flex-none">
            <img alt={post.title} src={post.featuredImage.url} height="60px" width="60px" className="align-middle rounded-xl" />
          </div>
          <div className="ml-4 flex-row">
            <p className="font-xs text-gray-500">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
