import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Frame118 from "../../assests/Frame_118.png";
import TestimonialsContainer from "../../components/Testimonials/TestimonialsContainer";
import RegisterNowForm from "../../components/RegisterNowForm/RegisterNowForm";
import PerfectPlacementGuide from "../../components/PerfectPlacementGuide/PerfectPlacementGuide";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import ProductPage from "../../components/ProductPage/ProductPage";
import Sidebar from "../../components/Sidebar/Sidebar";

const HomePage = ({ activeMenu, handleChangeActiveMenu, screenSize }) => {
  return (
    <>
      <Hero />
      <PerfectPlacementGuide />
      <HowItWorksSection />
      <ProductPage />
      <TestimonialsContainer screenSize={screenSize}/>
      <RegisterNowForm />

      <Navbar
        color="white"
        highlightColor="var(--neon)"
        currentPage="homepage"
        logo={Frame118}
        bgColor="var(--blue-shade)"
        handleChangeActiveMenu={handleChangeActiveMenu}
        screenSize={screenSize}
      />

      {activeMenu &&
        <Sidebar
          color="white"
          highlightColor="var(--neon)"
          currentPage="homepage"
          bgColor="var(--blue-shade)"
          handleChangeActiveMenu={handleChangeActiveMenu}
        />
      }
    </>
  );
};

export default HomePage;
