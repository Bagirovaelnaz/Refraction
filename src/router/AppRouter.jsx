import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Bag from "../pages/bag/Bag";
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";
import Error from "../bonus/error/Error";
import Login from "../register/login/Login";
import Detail from "../pages/detail/Detail";
import WishList from "../bonus/wishlist/WishList";
import { useContext } from "react";
import { GlobalThemeContext } from "../context/ThemeContext";
import ThankYou from "../bonus/thankyou/ThankYou";
import ScrollToTop from "../ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "../register/signup/SignUp";
import AddPage from "../dashboard/AddPage";
import Dashboard from "../dashboard/Dashboard";
import EditPage from "../dashboard/EditPage";
import { UserProvider } from "../context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

function MainLayout() {
  const { darkMode } = useContext(GlobalThemeContext);
  const isErrorPage =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/bag" ||
    location.pathname === "/contact" ||
    location.pathname === "/shop" ||
    location.pathname === "/login" ||
    location.pathname === "/thankyou" ||
    location.pathname === "/wishlist" ||
    location.pathname === "/signup" ||
    location.pathname === "/admin" ||
    location.pathname === "/add-product" ||
    location.pathname === "/faq2";

  return (
    <div className={darkMode ? "dark" : "light"}>
      <ScrollToTop />
      {isErrorPage && <Header />}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        style={{
          backgroundColor: "#c6be9e",
          color: "#fff",
          marginBottom: "-30px",
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop/:id" element={<Detail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/add-product" element={<AddPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/edit-product/:id" element={<EditPage />} />
      </Routes>
      {isErrorPage && <Footer />}
    </div>
  );
}

export default App;
