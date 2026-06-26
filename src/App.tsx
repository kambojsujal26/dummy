/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { Success } from "./pages/Success";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { AppProvider } from "./context";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AppProvider>
       <AuthProvider>
          <HelmetProvider>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Home />} />
                     <Route path="about" element={<About />} />
                     <Route path="products" element={<Products />} />
                     <Route path="product/:id" element={<ProductDetail />} />
                     <Route path="blog" element={<Blog />} />
                     <Route path="blog/:slug" element={<BlogPost />} />
                     <Route path="contact" element={<Contact />} />
                     <Route path="cart" element={<Cart />} />
                     <Route path="success" element={<Success />} />
                     <Route path="login" element={<Login />} />
                     <Route path="profile" element={<Profile />} />
                  </Route>
               </Routes>
            </BrowserRouter>
          </HelmetProvider>
       </AuthProvider>
    </AppProvider>
  );
}
