import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./shared/components/Layout";
import { ToastContainer } from "react-toastify";

const Auth = lazy(() => import("./modules/Auth"));
const Home = lazy(() => import("./modules/Home"));
const SectionsDetails = lazy(() => import("./modules/SectionsDetails"));
const ProductDetails = lazy(() => import("./modules/ProductDetails"));
const PrivatePage = lazy(() => import("./modules/PrivatePage"));
const Profile = lazy(() => import("./modules/Profile"));
const AddAd = lazy(() => import("./modules/AddAd"));
const MyAds = lazy(() => import("./modules/MyAds"));
const MyAdEdit = lazy(() => import("./modules/MyAdEdit"));
const Wallet = lazy(() => import("./modules/Wallet"));

function App() {
  return (
    <Suspense fallback={<h1 />}>
      <Layout>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/sections/:id" element={<SectionsDetails />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route element={<PrivatePage />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-ad" element={<AddAd />} />
            <Route path="/myAds" element={<MyAds />} />
            <Route path="/myAds/edit/:id" element={<MyAdEdit />} />
            <Route path="/wallet" element={<Wallet />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Layout>
    </Suspense>
  );
}

export default App;
