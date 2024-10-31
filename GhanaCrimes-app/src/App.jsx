import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUS";
import TopicsNewsList from "./pages/topicsNewsList";
import AdsRequest from "./pages/adsRequest";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news/:slug" element={<NewsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/topics/:slug" element={<TopicsNewsList />} />
        <Route path="/ads-request" element={<AdsRequest />} />
      </Routes>
    </>
  );
}

export default App;
