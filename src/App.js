import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
// import CompareProduct from './pages/CompareProduct';
// import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/SignUp';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SingleProductCard from './pages/SingleProductCard';
import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='product' element={<OurStore />} />
          <Route path='product/bid' element={<SingleProductCard />} />
          <Route path='blogs' element={<Blog />} />
          <Route path='shopcart' element={<Cart />} />
          {/* <Route path='checkout' element={<Checkout />} /> */}
          {/* <Route path='compare' element={<CompareProduct />} /> */}
          {/* <Route path='wishlist' element={<WishList />} /> */}
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='forgot-password' element={<Forgotpassword />} />
          <Route path='blog/bid' element={<SingleBlog />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          </Route>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
