import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import AppNav from "./components/AppNav";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import UpTop from "./components/UpTop";
import "./index.css";

const Root = () => {
  const [loading, setloading] = useState(false);
  // fake loading
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <HelmetProvider>
      <SmoothScroll>
        {loading ? (
          <div className="w-full h-[100vh] flex justify-center items-center bg-beg-900 ">
            <HashLoader color="#000" loading={loading} size={100} />
          </div>
        ) : (
          <>
            <AppNav />
            <Outlet />
            <UpTop />
            <Footer />
          </>
        )}
      </SmoothScroll>
    </HelmetProvider>
  );
};

export default Root;
