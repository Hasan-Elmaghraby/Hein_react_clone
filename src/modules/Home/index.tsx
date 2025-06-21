import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Sections } from "./components/Sections";
import useGetHomeData from "./api/useGetHomeData";
import { LatestAds } from "./components/LatestAds";
import { ContactUs } from "./components/ContactUs";
import Loader from "@/shared/components/Loader";
import { useTabTitle } from "@/shared/hooks/useTabTitle";

const Home: React.FC = () => {
  useTabTitle("home");

  const { data, isLoading, isError } = useGetHomeData();

  const { about, sliders, categories, latest } = data || {};

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading content</div>;
  }

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
      <ContactUs />
    </>
  );
};

export default Home;
