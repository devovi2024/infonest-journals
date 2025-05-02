import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CategoryList = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return <p className="text-center text-gray-500">No categories found.</p>;
  }

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-amber-800 tracking-wide">
        🌍 Explore Our Roots
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/category/${cat.slug}`}
            className="border-2 border-amber-900 rounded-xl overflow-hidden bg-white hover:bg-amber-50 transition-all duration-300"
          >
            <div
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-white drop-shadow">
                  {cat.name}
                </h3>
                <div className="flex items-center text-sm text-yellow-200 mt-1">
                  <span className="mr-2">Dive In</span>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
