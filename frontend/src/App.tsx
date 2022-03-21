
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import { useState } from 'react';


import SignupVaccinationsPage from './pages/SignupVaccinationsPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

import CategoryPage from './pages/admin/Category/list/CategoryPage';
import CategoryAddPage from './pages/admin/Category/add/CategoryAddPage';
import { create } from './api/category';

type InputCate = { // kiểu dữ liệu của từng input
  name: string,
  index: number,
};

function App() {
  const [categories, setCategories] = useState<InputCate[]>([])

  const hanlderAddCate = async (category: any) => {
    console.log("cate", category);

    const {data} = await create(category);
    console.log("Data", data)
    setCategories([...categories, data]);



    



  }

  // useEffect(() => {
  //   const getProducts = async () => {
  //       const { data } = await list();
  //       setProducts(data);
  //   }
  //   getProducts();
  // }, [])
  return (
    <div className="App">
        {/* <header>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </header> */}
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<HomePage />} />
                
                  <Route path="dangkytiemchung" element={<SignupVaccinationsPage />}  />
                  <Route path="vaccine" element={<ProductPage/>} />
                  <Route path="signin" element={<SigninPage/>} />
                  <Route path="signup" element={<SignupPage/>} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />

                <Route path="category">
                  <Route index  element={<CategoryPage  />} />
                
                </Route>
                <Route path="addcate" element={<CategoryAddPage onAdd={hanlderAddCate} />} />
               
                {/* <Route path="category" element={<CategoryPage />}/>
                <Route path="addcate" element={<CategoryAddPage  />} /> */}
                 

               
                
                
            </Route>
           
          </Routes>
        </main>
    </div>
  )
}

export default App



