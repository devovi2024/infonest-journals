import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import CategoryPage from "./pages/CategoryPage";
import PostDetails from "./pages/PostDetails";
import PptToWordConverter from "./components/App/Convert";
import BlogDetails from "./components/BlogDetails/BlogDetails";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetching from the 'public' folder where the data.json file resides
      const response = await fetch('/data.json');
      const data = await response.json();
      setPosts(data.posts);
      setCategories(data.categories);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <MainLayout categories={categories}>
        <Routes>
          <Route 
            path="/" 
            element={<Home posts={posts} categories={categories} />} 
          />
          <Route 
            path="/category/:slug" 
            element={<CategoryPage posts={posts} />} 
          />
          {/* <Route 
            path="/post/:slug" 
            element={<PostDetails posts={posts} categories={categories} />} 
          /> */}
          <Route path="/convert" element={<PptToWordConverter/>}
          />

          <Route path="/post/:slug" element={<BlogDetails posts={posts}/>}/>
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
