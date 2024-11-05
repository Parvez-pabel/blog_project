// data fetching from the API with Axios


import axios from 'axios';

const BaseURL = "https://basic-blog.teamrabbil.com/api";

export const postCategories = async () => {
  let res = await axios.get(BaseURL+"/post-categories");
  if (res.status === 200) {
    return res.data;
    
  } else {
    return [];
    
  }

}


//latest post

export const getLatestPost = async () => {
  let res = await axios.get(BaseURL+"/post-newest");
  if (res.status === 200) {
    return res.data;
    
  } else {
    return null;
    
  }

}

// post by category

export const postByCategory = async (id) => {
  let res = await axios.get(BaseURL+"/post-list/"+id);
  if (res.status === 200) {
    return res.data;
    
  } else {
    return null;
    
  }

}


// post details

export const postDetails = async (id) => {
  let res = await axios.get(BaseURL+"/post-details/"+id);
  if (res.status === 200) {
    return res.data;
    
  } else {
    return null;
    
  }

}

