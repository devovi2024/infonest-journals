


import React from "react";
import TrendingPost from "../components/TrendingPost";
import RecentSection from "../components/RecentSection";
import PopularSection from "../components/PopularSection";
import EnvironmentSection from "../components/EnvironmentSection";
import CategoryList from "../components/CategoryList";
import BusinessPosts from "../components/BusinessPosts/BusinessPosts";
import TopStories from "../components/TopStories/TopStories";
import Opinion from "../components/Opinion/Opinion";
// import FeaturedSection from "../components/FeaturedSection";
import NewsTabs from "../components/NewsTabs/NewsTabs";

const Home = ({ posts, categories }) => {
  return (
    <div className="container mx-auto px-4 font-sans">

      <section>
        <TopStories posts={posts}/>





                {/* Opinion and  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
             <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.01] duration-300">
              <Opinion posts={posts} />
            </div>
          </div>
          <div>
              {/* <News /> */}
              <NewsTabs posts={posts}/>
              
          </div>
        </div>
      </section>

    <section>
      <div>
        <BusinessPosts posts={posts}/>
      </div>
    </section>

      

      <RecentSection posts={posts} />
      <PopularSection posts={posts} />
      <div className="flex">
      <EnvironmentSection posts={posts} />
      <div className="w-1/3 ">
      <CategoryList categories={categories} />
      </div>
      </div>
    </div>
  );
};

export default Home;
