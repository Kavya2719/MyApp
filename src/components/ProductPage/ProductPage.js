import Card from "../Card/card.js";
import Frame1 from '../../assests/Frame 5041.jpg'
import Frame2 from '../../assests/Frame 5041.png'
import Frame3 from '../../assests/Frame 5041.svg'
import Benefits from '../../assests/benefits.png'
import "./ProductPage.css";

function ProductPage() {
  return (
    <div className={`placement-guide-section`}>
      <div className={`placement-guide`}>
        <div className={`perfect-placement-guide`}>Benefits</div>
        <div className={`placement-guide-container1`}>
          <div className={`placement-guide benefits-image`}>
            <img src={Benefits} alt="what will I get?" id="personPNG" className="benefits-img"/>
          </div>
        </div>
      </div>

      <div className={`mentorship-section`}>
        <div className={`mentorship-section1`}>
          <Card
            mentorTitle={"Guidance"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat ut"
            }
            endLine={"Lorem ipsum dolor sit"}
            image={Frame1}
            padding={'30px'}
          />
          <Card
            mentorTitle={"Better Matches"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat ut"
            }
            endLine={"Lorem ipsum dolor sit"}
            image={Frame2}
            padding={'30px'}
          />
          <Card
            mentorTitle={"Success"}
            mentorDesctiption={
              "Lorem ipsum dolor sit amet consectetur. Ac ut nunc sodales a integer. Risus sapien nec volutpat ut"
            }
            endLine={"Lorem ipsum dolor sit"}
            image={Frame3}
            padding={'30px'}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
