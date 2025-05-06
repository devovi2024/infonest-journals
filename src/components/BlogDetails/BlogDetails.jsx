import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ResponsesSidebar from '../ResponsesSidebar/ResponsesSidebar';
import NewsTabs from '../NewsTabs/NewsTabs';
import CategoryList from '../../pages/CategoryList';

const BlogDetails = ({ posts, categories }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const [showResponse, setShowResponse] = useState(false);

  if (!post) {
    return <div className="text-center text-red-600 font-semibold">Post not found.</div>;
  }

  const relatedPosts = posts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);



  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-10 relative">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight">{post.title1}</h1>
            <div className="flex items-center gap-3 mb-6">
              <img src={post.image} alt="Author" className="w-10 h-10 rounded-full shadow" />
              <div className="text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">{post.author}</span>
                  <button className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-100 transition">Follow</button>
                </div>
                <p className="text-xs text-gray-500">{post.readtime}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-6 text-gray-600">
              <div className="flex items-center gap-1 hover:text-gray-800 cursor-pointer transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">{post.like}</span>
              </div>
              <div className="flex items-center gap-1 hover:text-gray-800 cursor-pointer transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">{post.comment}</span>
              </div>
              {/* <button onClick={() => setShowResponse(true)} className="text-blue-600 text-lg hover:scale-110 transition">
                <FaRegComment />
              </button> */}
              <button onClick={handleBookmark} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Bookmark</button>
            </div>

            <article className="text-base leading-relaxed space-y-4 mb-10">
              <p>{post.content1}</p>
              <p>{post.content2}</p>
            </article>

            {showResponse && (
              <div className="fixed inset-0 z-50">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowResponse(false)}></div>
                <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl transition-all duration-300 z-50">
                  <ResponsesSidebar posts={posts} onClose={() => setShowResponse(false)} />
                </aside>
              </div>
            )}
          </div>

          <aside className="lg:w-1/3 space-y-6">
            <NewsTabs posts={posts} />
            <CategoryList categories={categories} />
          </aside>
        </div>

        <div className="mt-14 bg-[url('/paper-texture.png')] bg-repeat py-10 px-4 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6 font-serif">Read Next</h2>
          <div className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[75%] lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible snap-x lg:snap-none">
            {relatedPosts.map(post => (
              <div key={post.slug} className="bg-white/90 backdrop-blur-sm border-l-4 border-yellow-600 rounded-xl shadow p-4 snap-start lg:snap-none transition hover:shadow-lg">
                <img src={post.image} alt={post.title1} className="w-full h-40 object-cover rounded-md mb-3" />
                <Link to={`/post/${post.slug}`}>
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2 hover:underline font-serif">{post.title1}</h3>
                </Link>
                <p className="text-xs text-gray-500">{post.author} · {post.readtime}</p>
                <p className="text-sm text-stone-700 mt-2 line-clamp-2">{post.content1}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogDetails;
