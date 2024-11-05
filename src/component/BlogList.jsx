import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  return (
    <div className="container mx-auto px-4 mt-32">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {props.list.map((item, index) => {
          return (
            <Link
              key={index.toString()}
              to={"/post-details/" + item["id"]}
              className=" rounded-lg overflow-hidden p-4"
            >
              <div className="card bg-base-100 w-100 shadow-xl ">
                <figure>
                  <img
                    src={item["img"]}
                    alt="image"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title">{item["title"]}</h2>
                  <p>{item["short"]}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
