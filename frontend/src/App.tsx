import { Navigate, NavLink, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./features/Website/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import SignupVaccinationsPage from "./features/Website/SignupVaccinationsPage";
import Home from "./features/Admin/Home";
import Category from "./features/Admin/Category";
import Billing from "./features/Admin/Billing";
import Profile from "./features/Admin/Profile";
import AdminLayout from "./components/layouts/AdminLayout";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import ProductAdd from "./features/Admin/ProductAdd";
import { create, listproduct, update } from "./api/product";
import { remove } from "./api/product";
import ProductEdit from "./features/Admin/ProductEdit";
import PrivateRouter from "./components/PrivateRouter";
import Company from "./features/Admin/Company";
import CompanyAdd from "./features/Admin/CompanyAdd";
import { createCompany, listCompany } from "./api/company";

import MainPage from "./features/Website/ProductClient/Pages/Main";

import FindVacciationCenter from "./features/Website/FindVacciationCenter";
import ProductDetails from "./features/Website/ProductClient/Pages/Details";
import SigninPage from "./features/Website/Auth/Pages/Signin";
import SignupPage from "./features/Website/Auth/Pages/Signup";
import ProductList from "./features/Admin/Product/Components/ProductList";
import ListProduct from "./features/Website/ProductClient/Components/ListProduct";
import ListProductAdmin from "./features/Admin/Product/pages/List";
import SuccessSingupVacciation from "./components/SuccessSingupVacciation";

 "./features/Website/ProductClient";
type InputCate = {
  // kiểu dữ liệu của từng input
  name: string;
  index: number;
};
// const Product = React.lazy(() => import('./features/Website/ProductClient'));
function App() {
 
  const [products, setProducts] = useState<any>([]);
  const [company, setCompany] = useState<any>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data: {data}} = await listproduct("");

      // console.log("productaaaaaaa", products);

      // console.log("listproduca", data.data);
      setProducts(data);
    };
    getProducts();
    const getCity = async () => {
      const { data } = await listCompany();
      setCompany(data);
    };
    getCity();
  }, []);
  const onHandleAdd = async (product: any) => {
    const { data } = await create(product);

    setProducts([...products, data]);
  };
  const onHandleRemove = async (id: number) => {
    remove(id);
    // rerender
    setProducts(products.filter((item: any) => item._id !== id));
  };
  const onHandleUpdate = async (id: any, product: any) => {
    try {
      console.log("product", product);

      const { data } = await update(id, product);

      setProducts(
        products.map((item: any) => (item._id === data._id ? product : item))
      );
    } catch (error) {}
  };
  const onHanlRemoveCompany = () => {};
  const onHandleAddCompany = async (company: any) => {
    const { data } = await createCompany(company);
    console.log("datacompany", data);

    setCompany([...company, data]);
  };

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
            <Route path="product">
            <Route index  element={<MainPage/>} />
              <Route path=":id" element={<ProductDetails/>} />
            </Route>
            {/* <Route path="vaccine" element={<ProductPage />} /> */}
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="success" element={<SuccessSingupVacciation />} />

            {/* <Route path="test" element={<TestiMonials />} /> */}
            <Route
              path="hethongtrungtamtiemchung"
              element={<FindVacciationCenter />}
            />
          </Route>
          <Route
            path="admin"
            element={
              // <PrivateRouter>
                <AdminLayout />
              // </PrivateRouter>
            }
          >
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="billing" element={<Billing />} />
            <Route path="company">
              <Route
                index
                element={
                  <Company
                    company={company}
                    onRemoveCompany={onHanlRemoveCompany}
                  />
                }
              />
              {/* <Route path=":id/edit" element={<ProductEdit  onUpdate={onHandleUpdate} />} /> */}
              <Route
                path="addcompany"
                element={<CompanyAdd onAddCompany={onHandleAddCompany} />}
              />
            </Route>

            <Route path="product">
              <Route
                index
                element={
                  < ListProductAdmin/>
                }
              />
              <Route
                path=":id/edit"
                element={<ProductEdit onUpdate={onHandleUpdate} />}
              />
               <Route
                  path="add"
                  element={<ProductAdd onAdd={onHandleAdd} />}
                />
             
             
            </Route>
           

            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
