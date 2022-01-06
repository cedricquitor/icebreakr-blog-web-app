import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services";
import { comment } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
      {comment.length > 0 && (
        <div className="p-8 pb-12 mb-8 bg-teal-50 shadow-lg rounded-lg">
          <h3 className="mb-8 pb-4 font-semibold border-b text-xl">
            {comments.length} {comments.length == 1 ? "Comment" : "Comments"}
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className="mb-4 pb-4 border-b border-gray-100">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="w-full text-gray-600 whitespace-pre-line">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
