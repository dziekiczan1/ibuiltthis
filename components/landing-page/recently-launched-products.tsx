import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";

const recentlyLaunchedProducts = [
  {
    id: 1,
    name: "Product One",
    description: "This is the first featured product.",
    tags: ["Tag1", "Tag2"],
    voteCount: 120,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Product Two",
    description: "This is the second featured product.",
    tags: ["Tag3", "Tag4"],
    voteCount: 95,
    isFeatured: false,
  },
];

export default async function RecentlyLaunchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community"
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}
