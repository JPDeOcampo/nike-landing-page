import SectionHeader from "./ui/SectionHeader";
import ProductCard from "./ProductCard";
import { products } from "../constant/Constant";

const ProductHighlights = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="default-width">
        <SectionHeader
          title="Featured Products"
          description="Discover our handpicked selection of the latest and greatest from Nike"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
