import HireTopCandidates from "./HireTopCandidates";
import ImageGrid from "./ImageGrid";
import "./style.css";

function TalentHub() {
  return (
    <div className={`talent-section`}>
      <HireTopCandidates />
      <div className={`talent-needs`}>
        <ImageGrid />
      </div>
    </div>
  );
}

export default TalentHub;
