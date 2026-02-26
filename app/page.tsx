"use client";
import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import CategoryHighlights from "../components/CategoryHighlights";
import ProductTabs from "../components/ProductTabs";
import AppDownloadBanner from "../components/AppDownloadBanner";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main id="main-content" className="content-wrapper main-content-wrapper " tabIndex={-1}>
      <HeroCarousel />
      <CategoryHighlights />
      <ProductTabs />
      <AppDownloadBanner />
      <AboutSection />
    </main>
  );
}
