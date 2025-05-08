
import CategoryList from "./CategoryList";
import TopStories from "../components/TopStories/TopStories";
import Opinion from "../components/Opinion/Opinion";
import NewsTabs from "../components/NewsTabs/NewsTabs"; 
import FeaturedNews from "../components/FeaturedNews/FeaturedNews";
import TechnologyPosts from "../components/TechnologyPosts/TechnologyPosts";
import RecentTechnologyPosts from "../components/RecentTechnologyPosts/RecentTechnologyPosts";
import SocialMediaWidget from "../components/SocialMediaWidget/SocialMediaWidget";
import MostSharePosts from '../components/MostSharedPosts/MostSharedPosts';
import Carousel from "../components/Carousel/Carousel";
import EntertainmentPosts from "../components/EntertainmentPosts/EntertainmentPosts";
import SportsPosts from "../components/SportsPosts/SportsPosts";
import SciencePosts from "../components/SciencePosts/SciencePosts";
import NewsparkBanner from "../components/NewsparkBanner/NewsparkBanner";
import BusinessNews from "../components/BusinessNews/BusinessNews";
import ShabdoDhara from "../components/ShabdoDhara/ShabdoDhara";
import UpcomingMatches from "../components/UpcomingMatches/UpcomingMatches";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = ({ posts, categories }) => {
  return (
    <div className=" lg:w-11/12 mx-auto  font-sans">

      <section>
        <TopStories posts={posts} />

        {/* Opinion and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.01] duration-300">
              <Opinion posts={posts} />
            </div>
          </div>
          <div>
            <NewsTabs posts={posts} />
          </div>
        </div>

        <div>
          <FeaturedNews posts={posts} />
        </div>

        {/* Featured Section & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 ">
            <div className="bg-white rounded-xl shadow p-6">
              <TechnologyPosts posts={posts} />
            </div>
            <hr className="border-t border-gray-300 dark:border-gray-600" />
            <div>
              <RecentTechnologyPosts posts={posts} />
            </div>
          </div>

          <div className="space-y-6">
            <SocialMediaWidget />
            <div className="hidden lg:block">
              <MostSharePosts posts={posts} />
            </div>
          </div>
        </div>

        <div>
          <Carousel posts={posts} />
        </div>

        {/* Workspace & Popular Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <div className="lg:col-span-2">
            <div className=" bg-white rounded-xl shadow-md mt-10">
              <Workspace
                thumb="/thumb.jpg"
                thumbWidth={640}
                thumbHeight={360}
                thumbAlt="Demo Video"
                video="/demo.mp4"
                videoWidth={1280}
                videoHeight={720}
              />
            </div>
          </div> */}
          <div>
            {/* <MostView posts={posts} /> */}
          </div>
        </div>

        {/* Entertainment, Sports, Business & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-10">
            <EntertainmentPosts posts={posts} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SportsPosts posts={posts} />
              <SciencePosts posts={posts} />
            </div>
            <div>
              <NewsparkBanner />
            </div>

            <div>
              <BusinessNews posts={posts}/>
            </div>

          </div>

          <div className="p-7">
            <ShabdoDhara posts={posts} />
            <UpcomingMatches />
            <hr className="border-t border-gray-400 dark:border-gray-700" style={{ borderStyle: 'dotted' }} />
            <CategoryList categories={categories} />
            <NewsLetter />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
