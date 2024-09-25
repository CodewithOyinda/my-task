import React from 'react';

const Modal = ({ post, onClose }) => {
  const handleClick = (e) => {
    if (e.target.className.includes('modal')) {
      onClose();
    }
  };

  return (
    <div
      className="modal bg-[#dad9d9] bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center" 
      onClick={handleClick}
    >
      <div className="bg-white p-[20px] rounded-[4px] md:w-[450px] w-[300px] h-[300px] text-left relative">
        <h2 className="mt-[0] font-[600] text-[18px] mb-[20px] leading-6">
          {post.title}
        </h2>
        <p className="">
          {post.body}
        </p>
        <button 
          className="bg-[#7c7c7d] text-[#ffff] absolute bottom-[20px] right-[20px] p-[10px] rounded-[4px] cursor-pointer" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

