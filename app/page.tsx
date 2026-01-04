import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products";
import FeaturedProducts from "@/components/landing-page/featured-products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaunchedProducts />
    </div>
  );
}
