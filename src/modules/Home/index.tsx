import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Sections } from "./components/Sections";
import useGetHomeData from "./api/useGetHomeData";
import { LatestAds } from "./components/LatestAds";

const Home: React.FC = () => {
  const { data } = useGetHomeData();
  const { about, sliders, categories, latest } = data || {};

  console.log(latest);

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
      <LatestAds latest={latest || []} />
    </>
  );
};

export default Home;
