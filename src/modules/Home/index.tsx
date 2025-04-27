import React from "react";
import { Header } from "@/shared/components/Header";
import { Footer } from "@/shared/components/Footer";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import useGetHomeData from "./api/useGetHomeData";
const Home: React.FC = () => {
  const { data } = useGetHomeData();
  const { about, sliders } = data || {};

  console.log(sliders);

  return (
    <>
      <Header />
      <Hero sliders={sliders || []} />

      <AboutUs
        title={about?.title || ""}
        subtitle={about?.subtitle || ""}
        image={about?.image || ""}
        content={about?.content || ""}
      />
      <Footer />
    </>
  );
};

export default Home;
