import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Data from './home/Data';
import Modal from './components/Modal';
import { ThreeDots } from 'react-loader-spinner';


function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching posts:", err); 
        setError('Failed to fetch posts. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className=" flex justify-center align-middle items-center mt-[150px] text-[25px]"><ThreeDots height="150" width="150" radius="9" color="black" ariaLabel="loading" WrapperStyle WrapperClass/></div>;
  if (error) return <div>{error}</div>;

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Data posts={filteredPosts} onPostClick={handlePostClick} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
      </Routes>
      {selectedPost && <Modal post={selectedPost} onClose={closeModal} />}
    </Router>
  );
}

export default App;
