import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Sections } from "./components/Sections";
import useGetHomeData from "./api/useGetHomeData";

const Home: React.FC = () => {
  const { data } = useGetHomeData();
  const { about, sliders, categories } = data || {};

  return (
    <>
      <Hero sliders={sliders || []} />

      <AboutUs
        title={about?.title || ""}
        subtitle={about?.subtitle || ""}
        image={about?.image || ""}
        content={about?.content || ""}
      />
      <Sections sections={categories || []} />
    </>
  );
};

export default Home;
