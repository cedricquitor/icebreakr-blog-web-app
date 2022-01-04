import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObject = {
      name,
      email,
      comment,
      slug,
    };

    if (storeDataEl) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObject).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="p-8 pb-12 mb-8 bg-teal-50 shadow-lg rounded-lg">
      <h3 className="pb-4 mb-8 font-semibold border-b text-xl">Leave a comment</h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea ref={commentEl} placeholder="Comment" name="comment" className="p-4 w-full outline-none rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input ref={nameEl} placeholder="Name" name="name" type="text" className="py-2 px-4 w-full outline-none rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
        <input ref={emailEl} placeholder="Email" name="email" type="text" className="py-2 px-4 w-full outline-none rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="ml-2 text-gray-500 cursor-pointer" htmlFor="storeData">
            Save my email and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required!</p>}
      <div className="mt-8">
        <button type="button" onClick={handleCommentSubmission} className="py-3 px-8 text-lg rounded-full text-white transition duration-500 ease inline-block cursor-pointer bg-blue-600 hover:bg-blue-700">
          Post Comment
        </button>
        {showSuccessMessage && <span className="mt-3 text-xl text-green-500 float-right font-semibold">Comment submitted for review.</span>}
      </div>
    </div>
  );
};

export default CommentsForm;
