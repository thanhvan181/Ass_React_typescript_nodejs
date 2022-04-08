import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from './firebase/firebase.config';
import { currentUser } from './api/auth';
import { onAuthStateChanged } from "firebase/auth";

import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import HomePage from "./features/Website/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";
import SignupVaccinationsPage from "./features/Website/SignupVaccinationsPage";
import Home from "./features/Admin/Home";
import Billing from "./features/Admin/Billing";
import Profile from "./features/Admin/Profile";
import AdminLayout from "./components/layouts/AdminLayout";
import PrivateRouter from "./components/PrivateRouter";
import MainPage from "./features/Website/ProductClient/Pages/Main";
import FindVacciationCenter from "./features/Website/FindVacciationCenter";
import ProductDetails from "./features/Website/ProductClient/Pages/Details";
import SigninPage from "./features/Website/Auth/Pages/Signin";
import SignupPage from "./features/Website/Auth/Pages/Signup";
import ListProductAdmin from "./features/Admin/Product/pages/List";
import SuccessSingupVacciation from "./components/SuccessSingupVacciation";
import ListCategory from "./features/Admin/Category/Pages/ListCategory";
import AddCategoryAdmin from "./features/Admin/Category/Pages/AddCategoryAdmin";
import EditCategory from "./features/Admin/Category/Components/EditCategory";
import ListInjectionPark from "./features/Admin/InjectionPark/Pages/InjectionPark";
import AddInjectionPark from "./features/Admin/InjectionPark/Pages/AddInjectionPark";
import Add from "./features/Admin/Product/pages/Add";
import Edit from "./features/Admin/Product/pages/Edit";
import EditInjectionPark from "./features/Admin/InjectionPark/Pages/EditInjectionPark";

type InputCate = {
  // kiểu dữ liệu của từng input
  name: string;
  index: number;
};
// const Product = React.lazy(() => import('./features/Website/ProductClient'));
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { token } = await user.getIdTokenResult();
        currentUser(token)
          .then(({ data: { name, email, role, _id } }) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name,
                token,
                email,
                role,
                _id,
              },
            });
          })
          .catch((error) => toast.error(error.message));
      }
    });
    return () => unsubcribe();
  }, [dispatch])

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="dangkytiemchung" element={<SignupVaccinationsPage />} />
            <Route path="product">
              <Route index element={<MainPage />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            {/* <Route path="vaccine" element={<ProductPage />} /> */}
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="success" element={<SuccessSingupVacciation />} />
            {/* <Route path="test" element={<TestiMonials />} /> */}
            <Route path="hethongtrungtamtiemchung" element={<FindVacciationCenter />} /> </Route>
          <Route path="admin"
            element={
              <PrivateRouter>
                <AdminLayout />
              </PrivateRouter>
            }
          >
            <Route index element={<Home />} />
            <Route path="category">
              <Route index element={< ListCategory />} />
              <Route path=":id/edit" element={<EditCategory />} />
              <Route path="add" element={<AddCategoryAdmin />} />
            </Route>
            <Route path="injection"> <Route index element={<ListInjectionPark />} />
              <Route path=":id/edit" element={<EditInjectionPark />} />
              <Route path="add" element={<AddInjectionPark />} />
            </Route>
            <Route path="billing" element={<Billing />} />
            <Route path="company">
              <Route
                index
              // element={}
              />
              {/* <Route path=":id/edit" element={<ProductEdit  onUpdate={onHandleUpdate} />} /> */}
              <Route
                path="addcompany"
              // element={}
              />
            </Route>
            <Route path="product"> <Route index element={< ListProductAdmin />} />
              <Route path=":id/edit" element={<Edit />} />
              <Route path="add" element={<Add />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
