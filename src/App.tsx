import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./shared/components/Layout";
import ProductDetails from "./modules/ProductDetails";

const Home = lazy(() => import("./modules/Home"));
const SectionsDetails = lazy(() => import("./modules/SectionsDetails"));
function App() {
  return (
    <Suspense fallback={<h1 />}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sections/:id" element={<SectionsDetails />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
