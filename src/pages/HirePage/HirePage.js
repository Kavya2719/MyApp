import ContainerWhyUs from "../../components/ContainerWhyUs/ContainerWhyUs";
import ContainerStepsForm from "../../components/ContainerStepForm/ContainerStepsForm";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import "./HirePage.css";
import Frame117 from "../../assests/Frame 117.svg";
import Sidebar from "../../components/Sidebar/Sidebar";
import TalentHub from '../../components/TalentHub/index';

const HirePage = ({ activeMenu, handleChangeActiveMenu, screenSize }) => {
  return (
    <>
      <TalentHub />
      <ContainerWhyUs />
      <ContainerStepsForm />

      <div className={`placement-guide-section`} style={{ paddingBottom: '80px'}}>
        <div className={`placement-guide`}>
          <div className={`placement-guide-container1`}>
            <div className={`placement-guide1`}>
              Hire your first&nbsp; <span style={{ color: 'var(--blue-shade'}}> top-rated </span> &nbsp;Indian without any hassle.
            </div>
          </div>
          <div className="textWhyUs" id="stepsText" style={{width: '75%'}}>
            and we understand your requirements better!
          </div>
        </div>

        <div className="special-btn-column">
          <Button
            buttonText="Hire Now"
            backgroundColor="var(--neon)"
            margin='60px auto 0px auto'
          />
          <div className="arrow-up">
            <img
              className="register-now-child"
              alt="up arrow"
              src="/group-289368.svg"
            />
          </div>
        </div>
      </div>

      <Navbar
        color="black"
        highlightColor="var(--blue-shade)"
        currentPage="hire"
        logo={Frame117}
        bgColor="white"
        handleChangeActiveMenu={handleChangeActiveMenu}
        screenSize={screenSize}
      />

      {activeMenu && (
        <Sidebar
          color="black"
          highlightColor="var(--blue-shade)"
          currentPage="hire"
          bgColor="white"
          handleChangeActiveMenu={handleChangeActiveMenu}
        />
      )}
    </>
  );
};

export default HirePage;
