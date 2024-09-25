import React from 'react';

const PostList = ({ posts, onPostClick }) => {
  return (
    <ul className="p-0">
      {posts.map(post => (
        <li className='p-[10px] m-[5px] cursor-pointer border border-[#ccc] hover:bg-[#f0f0f0]' key={post.id} onClick={() => onPostClick(post)}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
