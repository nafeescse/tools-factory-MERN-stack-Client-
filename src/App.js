import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import Blogs from './pages/Blogs';
import Portfolio from './pages/Portfolio';
import Signup from './pages/Signup';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './components/MyOrders';
import MyReviews from './components/MyReviews';
import Profile from './pages/Profile';
import AddProducts from './pages/Dashboard/AddProducts';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import RequireAdmin from './components/RequireAdmin';

function App() {
  return (
    <div className="text-center">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={
        <RequireAuth><Dashboard></Dashboard></RequireAuth>}>
        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
        <Route  path='profile' element={<Profile></Profile>}></Route>
        <Route path='addproducts' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
        <Route  path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
        <Route path='manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        <Route  path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
