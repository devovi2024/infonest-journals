const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-dark-100">
        <div className="relative w-20 h-20">
          <div className="absolute w-full h-full border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute w-full h-full border-4 border-pink-400 rounded-full animate-spin border-b-transparent delay-[0.3s]"></div>
          <div className="absolute w-full h-full border-4 border-yellow-400 rounded-full animate-spin border-l-transparent delay-[0.6s]"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
  