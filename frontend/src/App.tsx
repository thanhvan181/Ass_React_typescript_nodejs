
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';


import SignupVaccinationsPage from './pages/SignupVaccinationsPage';

function App() {
  // const [products, setProducts] = useState<{_id: number, name: string}[]>([])

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
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
    </div>
  )
}

export default App



