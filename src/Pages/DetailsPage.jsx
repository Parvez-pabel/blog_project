import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetails } from "../APIReq/APIReq";
import Layout from "../Layout/Layout";
import BlogDetails from "../component/BlogDetails";
import Loader from "../component/Loader";

const DetailsPage = () => {
  // Add your details page logic here, such as fetching data from an API or handling form submissions.
  // Make sure to handle any necessary state management or error handling as needed.
  let { postID } = useParams();
  const [list, SetList] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      SetList(res);
    })();
  }, [postID]);

  return (
    <Layout>{list === null ? <Loader /> : <BlogDetails list={list} />}</Layout>
  );
};

export default DetailsPage;
