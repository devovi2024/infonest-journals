import React from 'react'; 
import { useSpring, animated } from 'react-spring'; // React Spring for animations

const SportsPosts = ({ posts }) => {
  // Filter only sports category posts
  const sportsPosts = posts.filter(post => post.category.toLowerCase() === 'sports');

  // Animation for each post's hover effect
  const hoverSpring = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.98)' },
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className="bg-white p-4 font-serif">
      {/* Header */}
      <h2 className="text-xl font-light text-[#333] mb-6 border-b-[2px] border-gray-300 pb-2">
        Sports News
      </h2>

      {/* Scrollable News Container with increased height */}
      <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
        {sportsPosts.length > 0 ? (
          sportsPosts.map((item, index) => (
            <animated.div
              key={index}
              style={hoverSpring}
              className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm mb-6 hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.headline}
                  className="w-full h-48 object-cover transition-all duration-500 ease-in-out hover:grayscale-0"
                />
                {/* Red Circle with Lightning Bolt */}
                <div className="absolute top-2 left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="text-xs text-[#007bff] font-semibold">
                  {item.category} <span className="text-gray-400">| {item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2f2f2f] mt-2 mb-4 hover:text-[#0056b3] cursor-pointer transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                <button className="px-4 py-1.5 border border-[#ddd] text-[#555] text-xs font-medium rounded hover:bg-gray-100 transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </animated.div>
          ))
        ) : (
          <p className="text-gray-400 font-serif text-sm">No sports news available.</p>
        )}
      </div>
    </div>
  );
};

export default SportsPosts;
