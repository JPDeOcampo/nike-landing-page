import SectionHeader from "../components/ui/SectionHeader";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/GlobalTypes";
import { useParams } from "react-router-dom";
import { products, arrivals } from "../constant/Constant";

const categoryProducts: Record<string, Product[]> = {
  featured: [...arrivals, ...products],
  men: [...products],
  women: [...arrivals],
  kids: [...products],
  sale: [...products, ...arrivals],
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const products = categoryProducts[category || "featured"] || [];

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "Featured";

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="default-width">
        <SectionHeader
          title={categoryTitle}
          description={`Explore our collection of ${categoryTitle.toLowerCase()} products`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
