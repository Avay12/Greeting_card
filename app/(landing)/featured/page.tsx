"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "Floral Birthday Card",
    price: 12.99,
    image: "/images/products/birthday.png",
    category: "Birthday",
    isBestseller: true,
  },
  {
    id: "2",
    title: "Wedding Bells Invitation",
    price: 15.0,
    image: "/images/products/wedding.png",
    category: "Wedding",
  },
  {
    id: "3",
    title: "Thank You Botanical",
    price: 8.5,
    image: "/images/products/thankyou.png",
    category: "Thank You",
  },
  {
    id: "4",
    title: "Modern Anniversary",
    price: 10.0,
    image: "/images/products/valentine.png",
    category: "Anniversary",
    isBestseller: true,
  },
];

export default function FeaturedPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <p className="text-[#e26b58] font-bold tracking-widest text-sm uppercase mb-4">
          CURATED COLLECTION
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8">
          Featured Items
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover our most popular designs and limited edition collaborations.{" "}
          <br className="hidden md:block" /> Hand-picked just for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {FEATURED_PRODUCTS.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="mt-32 p-12 md:p-24 bg-gradient-to-br from-[#e26b58] to-primary rounded-[4rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
            New Seasonal Collections landing every month.
          </h2>
          <p className="text-xl opacity-90 mb-12">
            Stay updated with our latest designer collaborations and limited
            edition drops by joining our newsletter.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/40 transition-all font-medium"
            />
            <button className="bg-white text-primary font-bold px-10 py-5 rounded-full whitespace-nowrap hover:bg-[#fff5f5] transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
