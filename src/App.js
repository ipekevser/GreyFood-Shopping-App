import Layout from "./components/layout/Layout";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import SelectedProducts from "./components/selectedProducts/SelectedProducts";
import BestSeller from "./components/bestSeller/BestSeller";
import Campaigns from "./components/campaigns/Campaigns";
import Categories from "./components/categories/Categories";
import React from "react";

function App() {
  return (
    <Layout>
      <Banner />
      <Categories />
      <Campaigns />
      <BestSeller />
      <SelectedProducts />
      <Footer />
    </Layout>
  );
}

export default App;
