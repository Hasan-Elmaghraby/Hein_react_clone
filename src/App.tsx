import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./shared/components/Layout";
import { ToastContainer } from "react-toastify";

const Auth = lazy(() => import("./modules/Auth"));
const Home = lazy(() => import("./modules/Home"));
const SectionsDetails = lazy(() => import("./modules/SectionsDetails"));
const ProductDetails = lazy(() => import("./modules/ProductDetails"));
function App() {
  return (
    <Suspense fallback={<h1 />}>
      <Layout>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/sections/:id" element={<SectionsDetails />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </Suspense>
  );
}

export default App;
