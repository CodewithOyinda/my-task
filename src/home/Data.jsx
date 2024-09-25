import React from 'react';
import PostList from '../components/PostList'; 
import { CiSearch } from "react-icons/ci";

const Data = ({ posts, onPostClick, searchQuery, setSearchQuery }) => {
  return (
    <div className="items-center m-[40px]">
      <h1 className='flex justify-center align-middle text-[20px] font-[500] pb-[20px]'>POSTS</h1>
       <div className='flex relative items-center w-[100%] mb-[20px]'>    
      <CiSearch  className='absolute left-[20px] text-[20px] text-[#666] mt-[-20px]'/>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search posts by title..." 
        className="p-[10px] pl-[50px] border-[1px] mb-[20px] w-[100%] rounded-[10px] outline-none" 
      />
      </div>
      <PostList posts={posts} onPostClick={onPostClick} />
    </div>
  );
}

export default Data;

