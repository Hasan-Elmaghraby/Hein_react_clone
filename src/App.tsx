import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./shared/components/Layout";
import { ToastContainer } from "react-toastify";
import Loader from "./shared/components/Loader";
import NotFoundPage from "./shared/components/NotFoundPage";

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
const Packages = lazy(() => import("./modules/Packages"));
const MyPackage = lazy(() => import("./modules/MyPackage"));
const Commission = lazy(() => import("./modules/Commission"));
const SinglePage = lazy(() => import("./modules/SinglePage"));
const Followers = lazy(() => import("./modules/Followers"));
const Favorites = lazy(() => import("./modules/Favorites"));
const Notifications = lazy(() => import("./modules/Notifications"));
const Messages = lazy(() => import("./modules/Messages"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
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
            <Route path="/packages" element={<Packages />} />
            <Route path="/myPackage" element={<MyPackage />} />
            <Route path="/site-commission" element={<Commission />} />
            <Route path="/single-page/:id" element={<SinglePage />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Layout>
    </Suspense>
  );
}

export default App;
