import React from "react";

const BusinessPosts = ({ posts }) => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Business Posts</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts
            .filter(post => post.category === "Business")
            .map(post => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    By {post.author} | {post.date}
                  </p>
                  <p className="text-gray-700 mb-4">{post.content.slice(0, 100)}...</p>
                  <a
                    href={`/post/${post.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPosts;
