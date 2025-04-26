import React from "react";
import { Header } from "@/shared/components/Header";
import { Footer } from "@/shared/components/Footer";
import { Hero } from "./components/Hero";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
