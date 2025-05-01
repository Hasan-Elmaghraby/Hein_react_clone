import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./shared/components/Layout";

const Home = lazy(() => import("./modules/Home"));
const SectionsDetails = lazy(() => import("./modules/SectionsDetails"));
function App() {
  return (
    <Suspense fallback={<h1 />}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sections/:id" element={<SectionsDetails />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
