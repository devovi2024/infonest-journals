import React from 'react';

const RecentTechnologyPosts = ({ posts }) => {
  const recentTechnology = posts
    .filter((item) => item.category === 'Technology')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="mt-12 px-4 font-serif bg-[#f5f2eb]">
      
      <div className="grid  p-4 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentTechnology.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 border border-[#e0dcd3] p-4 bg-[#fcfbf7] shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-md hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-[1.02]"
            style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <div className="text-xs text-[#555] italic mb-1">
                {item.category} &mdash; {item.date}
              </div>
              <h3 className="text-lg font-bold text-[#2a2a2a] leading-snug hover:text-[#1a4b7d] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTechnologyPosts;
