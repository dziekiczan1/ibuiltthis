"use cache";
import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";

const featuredProducts = [
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

export default async function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
