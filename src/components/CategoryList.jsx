import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';  // Import the React icon
// import './CategoryList.css'; // Import the custom CSS

const CategoryList = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return <p className="no-categories">No categories available.</p>;
  }

  return (
    <div className="category-container py-8 px-4">
      <h2 className="category-title text-3xl font-semibold text-center mb-6">📚 Categories</h2>

      <div className="category-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/category/${cat.slug}`}
            aria-label={`View ${cat.name} category`}
            className="category-card relative rounded-lg overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <div
              className="category-image bg-cover bg-center h-48" // Reduced height for a smaller image
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="category-overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                {/* Category Name */}
                <h3 className="category-name text-white text-2xl font-bold">{cat.name}</h3>

                {/* View Products Button */}
                <a
                  href={`/category/${cat.id}`}  // Assuming you have dynamic category links
                  className="view-products-btn text-white text-xl flex items-center mt-4"
                >
                  <FaArrowRight className="ml-2" /> {/* React icon for the arrow */}
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
