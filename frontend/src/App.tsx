import { Navigate, NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import SignupVaccinationsPage from "./pages/SignupVaccinationsPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import FindVacciationCenterPage from "./pages/FindVacciationCenterPage";
import SignUp from "./pages/admin/SignUp";
import SignIn from "./pages/admin/SignIn";
import Home from "./pages/admin/Home";
import Category from "./pages/admin/Category";
import Billing from "./pages/admin/Billing";
import Profile from "./pages/admin/Profile";
import AdminLayout from "./pages/layouts/AdminLayout";

import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Product from "./pages/admin/Product";
import ProductDetail from "./pages/ProductDetail";

type InputCate = {
  // kiểu dữ liệu của từng input
  name: string;
  index: number;
};

function App() {
  const [categories, setCategories] = useState<InputCate[]>([]);

 

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />

            <Route
              path="dangkytiemchung"
              element={<SignupVaccinationsPage />}
            />
            <Route path="vaccine">
              <Route index element={<ProductPage />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            {/* <Route path="vaccine" element={<ProductPage />} /> */}
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route
              path="hethongtrungtamtiemchung"
              element={<FindVacciationCenterPage />}
            />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="billing" element={<Billing />} />
            <Route path="product" element={<Product />} />

            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
