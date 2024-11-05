import React, { useEffect, useState } from "react";
import { getLatestPost } from "../APIReq/APIReq";
import Layout from "../Layout/Layout";
import BlogList from "../component/BlogList";
import Loader from "../component/Loader";

const HomePage = () => {
  let [list, SetList] = useState(null);
  useEffect(() => {
    (async () => {
      let res = await getLatestPost();
      SetList(res);
    })();
  }, []);

  return (
    <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
  );
};

export default HomePage;
