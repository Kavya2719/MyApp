import HeroCardForm from "../../components/HeroCardForm/HeroCardForm.js";
import BenefitsContainer from "../../components/BenefitsContainer/BenefitsContainer.js";
import RegisterNowForm from "../../components/RegisterNowForm/RegisterNowForm.js";
import TestimonialsContainer from "../../components/Testimonials/TestimonialsContainer.js";
import "./PlacementPage.css";
import Frame118 from "../../assests/Frame_118.png";
import Navbar from "../../components/Navbar/Navbar.js";
import Sidebar from "../../components/Sidebar/Sidebar";

const PlacementPage = ({ activeMenu, handleChangeActiveMenu, screenSize }) => {
  return (
    <>
      <div className="placement-page" style={{width: '100%'}}>
        <div className="hero-parent">
          <HeroCardForm />
          <BenefitsContainer />
          <RegisterNowForm />
          <TestimonialsContainer screenSize={screenSize}/>
        </div>
      </div>

      <Navbar
        color="white"
        highlightColor="var(--neon)"
        currentPage="placement"
        logo={Frame118}
        bgColor="var(--blue-shade)"
        handleChangeActiveMenu={handleChangeActiveMenu}
        screenSize={screenSize}
      />

      {activeMenu && (
        <Sidebar
          color="white"
          highlightColor="var(--neon)"
          currentPage="placement"
          bgColor="var(--blue-shade)"
          handleChangeActiveMenu={handleChangeActiveMenu}
        />
      )}
    </>
  );
};

export default PlacementPage;
