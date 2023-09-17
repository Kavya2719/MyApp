import FormContainer1 from "../FormContainer1/FormContainer1";
import Button from "../Button/Button.js";
import "./ContainerWhyUs.css";

import Card from '../Card/card'
import remoteOrHybridImg from '../../assests/remoteOrHybridImg.png'
import mentorshipImg from '../../assests/mentorshipImg.png'
import managaEasilyImg from '../../assests/manageEasilyImg.png'
import isHiringImg from '../../assests/isHiring.png'

const ContainerWhyUs = () => {
  return (
    <div className={`placement-guide-section`} style={{backgroundColor: 'var(--blue-shade)'}}>
      <div className={`placement-guide`} style={{width: '80%', margin: 'auto'}}>
        <div className={`perfect-placement-guide`} style={{color: 'var(--neon)'}}>Why us?</div>
        <div className={`placement-guide-container1`}>
          <div className={`placement-guide1`} style={{color: 'white'}}>
            The world is changing—And so
            <span className="isHiringImg">
              <img src={isHiringImg} alt="person" id="personPNG" />
            </span>
          </div>
        </div>
        <div className="textWhyUs" style={{color: 'white'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        </div>
      </div>

      <div className={`mentorship-section`}>
        <div className={`mentorship-section1`}>
          <Card
            mentorTitle={"Remote or Hybrid"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt utl"
            }
            image={remoteOrHybridImg}
            color={'white'}
            padding={'24px'}
          />
          <Card
            mentorTitle={"Mentorship"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt utl"
            }
            image={mentorshipImg}
            color={'white'}
            padding={'24px'}
          />
          <Card
            mentorTitle={"Manage Easily"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt utl"
            }
            image={managaEasilyImg}
            color={'white'}
            padding={'24px'}
          />
        </div>
      </div>

      <Button
        buttonText="Hire Now"
        backgroundColor="var(--neon)"
        margin='60px auto 20px auto'
      />
    </div>
  );
};

export default ContainerWhyUs;
