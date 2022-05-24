import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import Dashboard from './pages/Dashboard';
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
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
