import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import RecentPosts from '../RecentPosts/RecentPosts'; 
import RelatedPosts from '../RelatedPosts/RelatedPosts'; 
import PopularPosts from '../PopularPosts/PopularPosts'; 

const NewsTabs = ({ posts }) => {
  const [activeTab, setActiveTab] = useState('RECENT');
  const handleTabClick = (tab) => setActiveTab(tab);

  const currentCategory = posts[0]?.category || 'Technology';
  const limitedPosts = posts.slice(0, 5);

  return (
    <div className="p-4 font-ubuntu">
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-200 ${activeTab === 'RECENT' ? 'bg-[#a34d2d] text-white' : 'text-[#5b341b] hover:text-[#a34d2d]'} `}
          onClick={() => handleTabClick('RECENT')}
        >
          RECENT
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-200 ${activeTab === 'RELATED' ? 'bg-[#a34d2d] text-white' : 'text-[#5b341b] hover:text-[#a34d2d]'} `}
          onClick={() => handleTabClick('RELATED')}
        >
          RELATED
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold tracking-wide transition duration-200 ${activeTab === 'POPULAR' ? 'bg-[#a34d2d] text-white' : 'text-[#5b341b] hover:text-[#a34d2d]'} `}
          onClick={() => handleTabClick('POPULAR')}
        >
          POPULAR
        </button>
      </div>

      {activeTab === 'RECENT' && <RecentPosts posts={limitedPosts} />}
      {activeTab === 'RELATED' && <RelatedPosts posts={limitedPosts} currentCategory={currentCategory} />}
      {activeTab === 'POPULAR' && <PopularPosts posts={limitedPosts} />}
    </div>
  );
};

export default NewsTabs;
