import AirtelLogo from '../../../assests/Airtel-logo.png';
import SonyLogo from '../../../assests/Sony_logo.png';
import WhirlpoolLogo from '../../../assests/Whirlpool-logo.png';
import UberLogo from '../../../assests/Uber_logo.png';
import IBMLogo from '../../../assests/IBM_logo.png';
import TataLogo from '../../../assests/Tata-logo.png';
import "./style.css";

function ImageGrid() {
  return (
    <div className='image-grid-parent'>
      <div className='line-parent'>
        <div className='line'/>
        <p className={`talent-needs1`}>&nbsp; Top tech companies trust us with their talent needs &nbsp;</p>
      </div>

      <div className="get-placed-at-parent">
          <div className="whirlpool-logo-ww-parent" id='logo-parent'>
              <img alt="whirlpool" src={WhirlpoolLogo} />
              <img alt="Tata" src={TataLogo} />
              <img alt="Sony" src={SonyLogo} />
              <img alt="Uber" src={UberLogo} />
              <img alt="Airtel" src={AirtelLogo} />
              <img alt="IBM" src={IBMLogo} />
          </div>
      </div>
    </div>
  );
}

export default ImageGrid;
