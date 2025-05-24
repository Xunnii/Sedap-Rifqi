// App.js
import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import OrderStatus from "./components/OrderStatus";
import ProductChecker from "./components/Produk";
import QuizHomepage from "./pages/QuizHomepage";
import GuestLayout from "./layouts/GuestLayout";

// Uncomment jika ingin menggunakan MemberCek
// import MemberCek from "./components/membercek";

// Lazy-loaded layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Lazy-loaded pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Lazy-loaded auth pages
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/admin" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orderstatus" element={<OrderStatus />} />
          {/* Uncomment jika sudah import MemberCek */}
          {/* <Route path="membercek" element={<MemberCek />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* GuestLayout */}
        <Route path="" element={<GuestLayout />}>
          <Route index element={<QuizHomepage />} />
          <Route path="/" element={<QuizHomepage />} />
          <Route path="/produk" element={<ProductChecker />} />
        </Route>

        {/* AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}