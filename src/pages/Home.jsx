


import React from "react";
import TrendingPost from "../components/TrendingPost";
import RecentSection from "../components/RecentSection";
import PopularSection from "../components/PopularSection";
import EnvironmentSection from "../components/EnvironmentSection";
import CategoryList from "../components/CategoryList";
import BusinessPosts from "../components/BusinessPosts/BusinessPosts";
import TopStories from "../components/TopStories/TopStories";
// import FeaturedSection from "../components/FeaturedSection";


const Home = ({ posts, categories }) => {
  return (
    <div className="container mx-auto px-4 font-sans">

      <section>
        <TopStories posts={posts}/>
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
