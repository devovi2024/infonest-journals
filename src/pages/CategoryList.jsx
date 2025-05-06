import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CategoryList = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4 text-xs">
        No categories found.
      </p>
    );
  }

  return (
    <section className="py-4 px-2">
      <h2 className="text-lg font-semibold mb-3 text-amber-800 tracking-wide">
        🌍 Explore Our Roots
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.slug}`}
            className="group border border-amber-800 rounded-md overflow-hidden bg-white hover:bg-amber-50 transition-all duration-300"
          >
            <div
              className="h-24 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-1.5 flex flex-col justify-end">
                <h3 className="text-xs font-medium text-white drop-shadow">
                  {category.name}
                </h3>
                <div className="flex items-center text-[10px] text-yellow-200 mt-0.5 group-hover:translate-x-1 transition-transform">
                  <span className="mr-1">Dive In</span>
                  <FaArrowRight size={10} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
