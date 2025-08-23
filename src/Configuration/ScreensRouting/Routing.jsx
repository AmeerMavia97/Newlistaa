import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../../Screens/Home/Home";
import Login from "../../Screens/Login/login";
import OurPlans from "../../Screens/OurPlans/OurPlans";
import Register from "../../Screens/Register/register";
import AboutUs from "../../Screens/AboutUs/AboutUs";
import Pricing from "../../Screens/Pricing/Pricing";
import ContactUs from "../../Screens/ContactUs.jsx/ContactUs";
import AddProperty from "../../Screens/AddProperty/AddProperty";
import ViewProperty from "../../Screens/ViewProperty/ViewProperty";
import PropertyDetails from "../../Screens/ViewProperty/PropertyDetails";
import Residential from "../../Screens/Residential/Residential";
import Commercial from "../../Screens/Commercial/Commercial";
import Admin from "../../Screens/Admin/Admin";
import Industrial from "../../Screens/Industrial/Industrial";
import LeaseForm from "../../Screens/LeaseForm/LeaseForm";
import ForgetPassword from "../../Screens/ProtectedScreen/ForgetPassword";
import OptVerification from "../../Screens/ProtectedScreen/OptVerification";
import SetNewPassword from "../../Screens/ProtectedScreen/SetNewPassword";
import AddProperty2 from "../../Screens/AddProperty/AddProperty2";
import AddProperty3 from "../../Screens/AddProperty/AddProperty3.jsx";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop.jsx";
import ProtectiveRoute from "../ProtectiveRoute/ProtectiveRoute.jsx";
import SinglePricing from "../../Screens/Pricing/PremiumYear.jsx";
import FreeMontlhy from "../../Screens/Pricing/FreeMontly.jsx";
import PremiumMonthly from "../../Screens/Pricing/PremiumMontlhy.jsx";
import FreeYear from "../../Screens/Pricing/FreeYear.jsx";
import PremiumYear from "../../Screens/Pricing/PremiumYear.jsx";
import ForgetPassOtp from "../../Screens/ProtectedScreen/ForgetPassOpt.jsx";
import ChangePassword from "../../Screens/ProtectedScreen/ChangePassword.jsx";
import useUnreadMessageListener from "../../CustomHook/useUnreadMessageListener/useUnreadMessageListener.js";
import Privacy from "../../Screens/Privacy/Privacy.jsx";
import Terms from "../../Screens/Terms/Terms.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import TransparentNavbar from "../../Components/Navbar/TransparentNavbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import MiniFooter from "../../Components/Footer/MiniFooter.jsx";


const Layout = ({ children }) => {
  const location = useLocation();

  const showNavbar = ["/" , "/about-us" , "/pricing" , "/contact-us"].includes(location.pathname);
  const showMiniFooter = ["/" , "/about-us" , "/contact-us" ].includes(location.pathname);
  const showFooter = ["/" , "/about-us" , "/pricing" , "/contact-us"].includes(location.pathname);

  return (
    <>
      {showNavbar && <TransparentNavbar />}
      {children}
      {showMiniFooter && <MiniFooter />}
      {showFooter && <Footer />}
    </>
  );
};


const Routing = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user) setCurrentUser(user);
  }, []);

  useUnreadMessageListener(currentUser);


  return (
    <>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about-us"} element={<AboutUs />} />
            <Route
              path={"/create-property"}
              element={<ProtectiveRoute component={<AddProperty3 />} />}
            />
            <Route path={"/properties"} element={<ViewProperty />} />
            <Route path={"/properties/:id"} element={<PropertyDetails />} />
            <Route path={"/pricing"} element={<Pricing />} />
            <Route path={"/premiumyear"} element={<PremiumYear />} />
            <Route path={"/freemontlhy"} element={<FreeMontlhy />} />
            <Route path={"/premiummontlhy"} element={<PremiumMonthly />} />
            <Route path={"/freeyear"} element={<FreeYear />} />
            <Route path={"/contact-us"} element={<ContactUs />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/reset-password"} element={<ForgetPassword />} />
            <Route path={"/verify-otp"} element={<OptVerification />} />
            <Route path={"/forget-otp"} element={<ForgetPassOtp />} />
            <Route path={"/set-new-password"} element={<SetNewPassword />} />
            <Route path={"/register"} element={<Register />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-use" element={<Terms />} />
            <Route
              path={"/admin/*"}
              element={<ProtectiveRoute component={<Admin />} />}
            />
          </Routes>
        </Layout>

      </BrowserRouter>
    </>
  );
};

export default Routing;
