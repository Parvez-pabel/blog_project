import React from "react";

const BlogDetails = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-gray-50  mt-32">
      {/* Left Section */}
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-500">
        {props.list["postDetails"]["title"]}

        <br />
      </blockquote>
      <div className="md:w-1/2 space-y-6 text-gray-700">
        <p className="text-lg">{props.list["postDetails"]["content"]}</p>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <img
          src={props.list["postDetails"]["img"]} // Replace with the actual image path
          alt="Scenic View"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default BlogDetails;
