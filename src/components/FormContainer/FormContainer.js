import { useMemo } from "react";
import "./FormContainer.css";
const FormContainer = ({
  imageDimensions,
  listItemText,
  contactMessage,
  propWidth,
  propHeight,
}) => {
  const frameIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="frame-parent2">
      <img
        className="frame-item"
        alt=""
        src={imageDimensions}
        style={frameIconStyle}
      />
      <div className="list-requirements">{listItemText}</div>
      <div className="our-team-will">{contactMessage}</div>
    </div>
  );
};

export default FormContainer;
