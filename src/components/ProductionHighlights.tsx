import SectionHeader from "./ui/SectionHeader";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwcnVubmluZyUyMHNob2VzfGVufDF8fHx8MTc2OTEzNzI4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Nike Air Max 270",
    category: "Running Shoes",
    price: 159.99,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1635770997862-2b93a75f4856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwYmFza2V0YmFsbCUyMHNob2VzfGVufDF8fHx8MTc2OTA2NDM4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Nike Zoom Freak 5",
    category: "Basketball",
    price: 139.99,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc25lYWtlcnMlMjB3aGl0ZXxlbnwxfHx8fDE3NjkwNzMxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Nike Air Force 1",
    category: "Lifestyle",
    price: 109.99,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1585063395665-b8ad4acbb9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwdHJhaW5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjkxNDE5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Nike Metcon 9",
    category: "Training",
    price: 149.99,
  },
];

const ProductHighlights = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Products"
          description="Discover our handpicked selection of the latest and greatest from Nike"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductHighlights;
