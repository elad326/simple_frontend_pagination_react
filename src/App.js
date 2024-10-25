import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Posts from './components/Posts';
import Paginations from './components/Paginations';



function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPape] = useState(10);

  useEffect(()=> {
    const fetchPosts = async () => {
      //set to true because we load posts 
      setLoading(true);

      //make request using axios 
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

      //insert posts to the posts state 
      setPosts(res.data);

      //because we end fetch data 
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // get current post 
  // index of last post per page 
  const indexOfLastPost = currentPage * postsPerPage;
  // index of first post per page 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change pagr number -- the pageNumber pass as arg at the Pagination.js comp 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Paginations postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
