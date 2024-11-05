import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postByCategory } from "../APIReq/APIReq";
import Layout from "../Layout/Layout";
import BlogList from "../component/BlogList";
import Loader from "../component/Loader";

const ByCatPage = () => {
  let { categoryID } = useParams(); // Assuming categoryID is passed as a parameter in the URL

  const [list, SetList] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await postByCategory(categoryID);
      SetList(res);
    })();
  }, [categoryID]);

  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default ByCatPage;
