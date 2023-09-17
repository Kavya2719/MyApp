import Button from "../Button/Button";
import "./RegisterNowForm.css";

const RegisterNowForm = () => {
  return (
    <div className="register-now1">      
      <div className={`placement-guide`}>
        <div className={`placement-guide-container1`}>
          <div className={`placement-guide1`}>
            Register Now!
          </div>
        </div>
        <div className="textWhyUs" style={{ width: '100%'}}>
          <p style={{ color: 'var(--text-medium)'}}>Begin your journey today or preview a sample profile.</p>
          <p style={{ color: 'var(--text-medium)'}}>Your next career move awaits!</p>
        </div>
      </div>

      <div className="line-container">
        <div className="buttons-parent">
          <Button
            buttonText="Apply Now"
            backgroundColor="#beeb42"
            color="#202020"
          />
          <Button
            buttonText="View Sample Profile"
            backgroundColor="#fff"
            color="#202020"
            border="4px solid var(--neon)"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterNowForm;
