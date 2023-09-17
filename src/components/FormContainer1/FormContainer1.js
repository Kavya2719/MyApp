import "./FormContainer1.css";
const FormContainer1 = ({ imageDimensions, featureImageUrl }) => {
  return (
    <div className="group-parent">
      <img className="frame-child" alt="" src={imageDimensions} />
      <div className="remote-or-hybrid-parent">
        <div className="remote-or-hybrid">{featureImageUrl}</div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt utl
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
