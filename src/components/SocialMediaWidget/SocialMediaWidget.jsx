import React, { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
} from 'react-icons/fa';

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/,/g, ''), 10);
    if (start === end) return;

    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        setCount(end.toLocaleString());
        clearInterval(timer);
      } else {
        setCount(start.toLocaleString());
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-md font-bold text-white tracking-wide">{count}</span>
  );
};

const SocialMediaWidget = () => {
  const socialMedia = [
    {
      platform: 'Facebook',
      label: 'Fans',
      count: '34456',
      color: 'bg-blue-700',
      icon: <FaFacebookF className="w-6 h-6" />,
    },
    {
      platform: 'Twitter',
      label: 'Followers',
      count: '34456',
      color: 'bg-blue-500',
      icon: <FaTwitter className="w-6 h-6" />,
    },
    {
      platform: 'YouTube',
      label: 'Subscribers',
      count: '34456',
      color: 'bg-red-600',
      icon: <FaYoutube className="w-6 h-6" />,
    },
    {
      platform: 'Instagram',
      label: 'Followers',
      count: '34456',
      color: 'bg-purple-600',
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      platform: 'Vimeo',
      label: 'Followers',
      count: '34456',
      color: 'bg-cyan-600',
      icon: <FaVimeoV className="w-6 h-6" />,
    },
    {
      platform: 'Dribbble',
      label: 'Followers',
      count: '34456',
      color: 'bg-pink-600',
      icon: <FaDribbble className="w-6 h-6" />,
    },
  ];

  return (
    <div className="font-serif bg-[#fdfaf5] p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-[#2f2f2f] mb-6 border-b pb-2 border-gray-300 tracking-wide">
        Follow Us
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {socialMedia.map((item) => (
          <div
            key={item.platform}
            className={`flex items-center space-x-3 p-4 rounded-md ${item.color} transition-transform transform hover:scale-105 shadow-lg`}
          >
            {item.icon}
            <div className="flex flex-col">
              <AnimatedCounter target={item.count} />
              <span className="text-xs text-white font-light tracking-wide">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaWidget;
