import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import CategoryPage from "./pages/CategoryPage";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Loader from "./components/Loader"; // ✅ Add loader import

const App = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Always call all hooks first
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setPosts(data.posts);
        setCategories(data.categories);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // loader duration

    return () => clearTimeout(timer);
  }, []);

  // ✅ Then conditionally return JSX
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <MainLayout categories={categories}>
        <Routes>
          <Route path="/" element={<Home posts={posts} categories={categories} />} />
          <Route path="/category/:slug" element={<CategoryPage posts={posts} categories={categories}  />} />
          <Route path="/post/:slug" element={<BlogDetails posts={posts} categories={categories} />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
