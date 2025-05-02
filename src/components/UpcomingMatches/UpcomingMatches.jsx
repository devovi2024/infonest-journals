import React from 'react';

const UpcomingMatches = () => {
  const matches = [
    {
      team1: 'Bangladesh',
      team2: 'India',
      flag1: 'https://flagcdn.com/16x12/bd.png', 
      flag2: 'https://flagcdn.com/16x12/in.png', 
      date: 'Tomorrow',
      time: 'M22:30 (CST)',
      sport: 'Cricket',
    },
    {
      team1: 'Bangladesh',
      team2: 'Pakistan',
      flag1: 'https://flagcdn.com/16x12/bd.png', 
      flag2: 'https://flagcdn.com/16x12/pk.png', 
      date: 'Next Week',
      time: 'M17:00 (CST)',
      sport: 'Football',
    },
    {
      team1: 'Bangladesh',
      team2: 'Sri Lanka',
      flag1: 'https://flagcdn.com/16x12/bd.png', 
      flag2: 'https://flagcdn.com/16x12/lk.png',
      date: 'This Weekend',
      time: 'M20:00 (CST)',
      sport: 'Kabaddi',
    },
    {
      team1: 'Bangladesh',
      team2: 'Thailand',
      flag1: 'https://flagcdn.com/16x12/bd.png', 
      flag2: 'https://flagcdn.com/16x12/th.png',
      date: 'In 3 Days',
      time: 'M21:30 (CST)',
      sport: 'Hockey',
    },
    {
      team1: 'Bangladesh',
      team2: 'Malaysia',
      flag1: 'https://flagcdn.com/16x12/bd.png', 
      flag2: 'https://flagcdn.com/16x12/my.png', 
      date: 'Next Month',
      time: 'M16:00 (CST)',
      sport: 'Football',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Bangladesh Matches</h2>
        <a href="#" className="text-sm text-blue-500 font-semibold hover:underline">
          SEE ALL
        </a>
      </div>

      {/* Matches List */}
      {matches.map((match, index) => (
        <div
          key={index}
          className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-xl transform transition-all hover:scale-105 duration-300"
        >
          {/* Teams and Flags */}
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <img
                src={match.flag1}
                alt={`${match.team1} flag`}
                className="w-12 h-12 rounded-full mr-3"
              />
              <img
                src={match.flag2}
                alt={`${match.team2} flag`}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {match.team1} VS {match.team2}
              </p>
              <p className="text-sm text-gray-500">
                {match.date} | {match.time}
              </p>
              <p className="text-sm text-gray-400">Sport: {match.sport}</p>
            </div>
          </div>

          {/* Circular Icon */}
          <div className="w-8 h-8 border-4 border-gray-300 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-400 transition-colors duration-300">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatches;
