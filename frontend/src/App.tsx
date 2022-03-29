import { Navigate, NavLink, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import ProductAdd from "./pages/admin/ProductAdd";
import { create, listproduct, update } from "./api/product";
import { remove } from "./api/product"
import ProductEdit from "./pages/admin/ProductEdit";
import PrivaRouter from "./components/PrivateRouter";
import PrivateRouter from "./components/PrivateRouter";
import City from "./pages/admin/Company";
import { listCity } from "./api/city";
import CityAdd from "./pages/admin/CompanyAdd";
import Company from "./pages/admin/Company";
import CompanyAdd from "./pages/admin/CompanyAdd";
import { createCompany, listCompany } from "./api/company";


type InputCate = {
  // kiểu dữ liệu của từng input
  name: string;
  index: number;
};

function App() {
  const [categories, setCategories] = useState<InputCate[]>([]);
  const [products, setProducts] = useState<any>([]);
  const [company, setCompany] = useState<any>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listproduct();
      setProducts(data);
    }
    getProducts();
    const getCity = async () => {
      const {data} = await listCompany();
      setCompany(data);
    }
    getCity();
  }, []);
  const onHandleAdd = async (product: any) => {
    const { data } = await create(product);

    setProducts([...products, data]);
  }
  const onHandleRemove = async (id: number) => {

    remove(id);
    // rerender
    setProducts(products.filter((item :any)=> item._id !== id));
  }
  const onHandleUpdate = async (id:any, product: any) => {
    try {
      console.log("product", product)
     
       const {data} = await update(id, product);
    
       setProducts(products.map((item:any) => item._id === data._id ? product : item))
    } catch (error) {
      
    }
  }
  const onHanlRemoveCompany = () => {
  

  }
  const onHandleAddCompany = async(company: any) => {
    const { data } = await createCompany(company);
    console.log("datacompany", data)

    setCompany([...company, data]);


  }



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
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="billing" element={<Billing />} />
            <Route path="company">
              <Route index element={<Company  company={company} onRemoveCompany={onHanlRemoveCompany} />} />
              {/* <Route path=":id/edit" element={<ProductEdit  onUpdate={onHandleUpdate} />} /> */}
              <Route path="addcompany" element={<CompanyAdd onAddCompany={onHandleAddCompany} />} />
            </Route>
            
            <Route path="product">
              <Route index element={<Product products={products} onRemove={onHandleRemove} />} />
              <Route path=":id/edit" element={<ProductEdit  onUpdate={onHandleUpdate} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>



            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
